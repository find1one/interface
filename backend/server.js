import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const PORT = Number(process.env.PORT || 4174);
const DEMO_PHONE = "+10000000000";
const ALLOWED_ORIGINS = new Set([
  "http://localhost:4173",
  "http://127.0.0.1:4173"
]);

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.warn("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. Add backend/.env before running against Supabase.");
}

const supabase = createClient(
  process.env.SUPABASE_URL || "http://localhost",
  process.env.SUPABASE_SERVICE_ROLE_KEY || "missing-service-role-key",
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  }
);

const app = express();

app.use(cors({
  origin(origin, callback) {
    if (!origin || ALLOWED_ORIGINS.has(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error("Not allowed by CORS"));
  }
}));
app.use(express.json());

function sendError(res, status, message) {
  return res.status(status).json({ error: message });
}

function asyncHandler(handler) {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error(error);
      sendError(res, 500, "Internal server error");
    }
  };
}

function isValidPhone(phone) {
  return typeof phone === "string" && /^\+?[0-9][0-9\s().-]{5,}$/.test(phone.trim());
}

function isValidDate(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));
}

function normalizeItems(items = []) {
  if (!Array.isArray(items)) {
    throw Object.assign(new Error("items must be an array"), { status: 400 });
  }

  return items.map((item, index) => {
    const title = String(item?.title || "").trim();
    if (!title) {
      throw Object.assign(new Error("Itinerary item title is required"), { status: 400 });
    }
    const day = Number.isInteger(item.day) && item.day > 0 ? item.day : 1;
    const localSortOrder = Number.isInteger(item.sortOrder) ? item.sortOrder : index;
    return {
      time: item.time || null,
      title,
      location: item.location || null,
      note: item.note || null,
      sort_order: localSortOrder >= 1000 ? localSortOrder : (day - 1) * 1000 + localSortOrder
    };
  });
}

function formatDateRange(startDate, endDate) {
  if (!startDate || !endDate) return "";
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);
  const startText = start.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const endText = end.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  return `${startText} - ${endText}`;
}

function mapUser(row) {
  return {
    id: row.id,
    phone: row.phone,
    displayName: row.display_name
  };
}

function mapAttraction(row) {
  return {
    id: row.id,
    name: row.name,
    time: row.visit_time,
    image: row.image
  };
}

function mapDestination(row) {
  return {
    id: row.id,
    title: row.title,
    location: row.location,
    countryRegion: row.country_region,
    category: row.category,
    rating: row.rating == null ? "" : String(row.rating),
    image: row.image,
    description: row.description,
    note: row.note,
    budgetLevel: row.budget_level,
    travelStyles: row.travel_styles || [],
    recommendedDuration: row.recommended_duration,
    keyAttractions: (row.destination_attractions || []).map((item) => item.name),
    attractions: (row.destination_attractions || []).map(mapAttraction)
  };
}

function mapItinerary(row) {
  const items = [...(row.itinerary_items || [])]
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((item) => {
      const encodedSortOrder = Number.isInteger(item.sort_order) ? item.sort_order : 0;
      const day = Math.floor(encodedSortOrder / 1000) + 1;
      return {
        id: item.id,
        time: item.time,
        title: item.title,
        location: item.location,
        note: item.note,
        day,
        sortOrder: encodedSortOrder % 1000,
        encodedSortOrder
      };
    });

  return {
    id: row.id,
    title: row.title,
    destinationId: row.destination_id,
    destination: row.destinations?.title || "Unassigned Destination",
    startDate: row.start_date,
    endDate: row.end_date,
    dates: formatDateRange(row.start_date, row.end_date),
    attractions: items.length,
    status: row.status,
    notes: row.notes,
    items
  };
}

function mapPreferences(row) {
  return {
    budget: row.budget,
    pace: row.pace,
    dietary: row.dietary || [],
    accessibility: row.accessibility || [],
    transport: row.transport || [],
    language: row.language,
    currency: row.currency
  };
}

function mapSavedDestination(row) {
  const destination = row.destinations || {};
  return {
    id: row.destination_id,
    destinationId: row.destination_id,
    note: row.note,
    title: destination.title,
    location: destination.location,
    countryRegion: destination.country_region,
    category: destination.category,
    rating: destination.rating == null ? "" : String(destination.rating),
    image: destination.image,
    description: destination.description,
    budgetLevel: destination.budget_level,
    travelStyles: destination.travel_styles || [],
    recommendedDuration: destination.recommended_duration
  };
}

function mapTravelHistory(row) {
  return {
    id: row.id,
    destination: row.destination,
    date: row.completed_date ? `Completed ${new Date(`${row.completed_date}T00:00:00`).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })}` : "Completed",
    completedDate: row.completed_date,
    status: row.status
  };
}

function matchesDestinationSearch(row, query) {
  const normalizedQuery = String(query || "").trim().toLowerCase();
  if (!normalizedQuery) return true;
  return [
    row.title,
    row.location,
    row.country_region,
    row.category,
    row.description,
    row.note,
    row.budget_level,
    row.recommended_duration,
    ...(row.travel_styles || []),
    ...(row.destination_attractions || []).map((item) => item.name)
  ].some((value) => String(value || "").toLowerCase().includes(normalizedQuery));
}

function queryValues(value) {
  const rawValues = Array.isArray(value) ? value : [value];
  return rawValues
    .flatMap((item) => String(item || "").split(","))
    .map((item) => item.trim())
    .filter(Boolean);
}

function matchesHomeCategory(destination, category) {
  const aliases = {
    Beach: ["Beach", "Relaxation"],
    Mountain: ["Mountain", "Nature", "Adventure"],
    City: ["City", "Walkable"],
    Food: ["Food"],
    Culture: ["Culture"],
    Nature: ["Nature"],
    Family: ["Family"],
    Adventure: ["Adventure"],
    Relaxation: ["Relaxation"]
  };
  const accepted = aliases[category] || [category];
  return accepted.includes(destination.category) || accepted.some((item) => (destination.travelStyles || []).includes(item));
}

function matchesDestinationFilters(destination, query = {}) {
  const categories = queryValues(query.category || query.type);
  const locations = queryValues(query.location || query.region || query.country);
  const budgetLevels = queryValues(query.budgetLevel || query.budget);
  const travelStyles = queryValues(query.travelStyle || query.interests);
  const durations = queryValues(query.duration || query.recommendedDuration);
  const ratings = queryValues(query.rating);
  const ratingThreshold = ratings.length ? Number(String(ratings[0]).replace("+", "")) : 0;

  if (categories.length && !categories.every((category) => matchesHomeCategory(destination, category))) return false;
  if (locations.length) {
    const locationText = `${destination.location || ""} ${destination.countryRegion || ""}`.toLowerCase();
    if (!locations.every((location) => locationText.includes(location.toLowerCase()))) return false;
  }
  if (budgetLevels.length && !budgetLevels.every((level) => destination.budgetLevel === level)) return false;
  if (travelStyles.length && !travelStyles.every((style) => (destination.travelStyles || []).includes(style))) return false;
  if (durations.length && !durations.every((duration) => destination.recommendedDuration === duration)) return false;
  if (ratingThreshold && Number(destination.rating) < ratingThreshold) return false;
  return true;
}

async function getDemoUser() {
  const { data, error } = await supabase
    .from("users")
    .select("id, phone, display_name")
    .eq("phone", DEMO_PHONE)
    .single();

  if (error || !data) {
    throw Object.assign(new Error("Demo user not found. Run backend/supabase/seed.sql first."), { status: 404 });
  }

  return data;
}

async function getDestinations(query = "") {
  const request = supabase
    .from("destinations")
    .select("*, destination_attractions(*)")
    .order("title", { ascending: true });

  const { data, error } = await request;
  if (error) throw error;
  return (data || []).filter((row) => matchesDestinationSearch(row, query)).map(mapDestination);
}

async function getDestination(id) {
  const { data, error } = await supabase
    .from("destinations")
    .select("*, destination_attractions(*)")
    .eq("id", id)
    .single();

  if (error || !data) return null;
  return mapDestination(data);
}

async function destinationExists(id) {
  const { data, error } = await supabase
    .from("destinations")
    .select("id")
    .eq("id", id)
    .single();

  return !error && Boolean(data);
}

async function getItineraries(userId) {
  const { data, error } = await supabase
    .from("itineraries")
    .select("*, destinations(title), itinerary_items(*)")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data || []).map(mapItinerary);
}

async function getItinerary(userId, itineraryId) {
  const { data, error } = await supabase
    .from("itineraries")
    .select("*, destinations(title), itinerary_items(*)")
    .eq("user_id", userId)
    .eq("id", itineraryId)
    .single();

  if (error || !data) return null;
  return mapItinerary(data);
}

async function getPreferences(userId) {
  const { data, error } = await supabase
    .from("preferences")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error) throw error;
  return mapPreferences(data);
}

async function getSavedDestinations(userId) {
  const { data, error } = await supabase
    .from("saved_destinations")
    .select("*, destinations(*)")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data || []).map(mapSavedDestination);
}

async function getTravelHistory(userId) {
  const { data, error } = await supabase
    .from("travel_history")
    .select("*")
    .eq("user_id", userId)
    .order("completed_date", { ascending: false });

  if (error) throw error;
  return (data || []).map(mapTravelHistory);
}

async function getBootstrapPayload() {
  const user = await getDemoUser();
  const [destinations, itineraries, preferences, savedDestinations, travelHistory] = await Promise.all([
    getDestinations(),
    getItineraries(user.id),
    getPreferences(user.id),
    getSavedDestinations(user.id),
    getTravelHistory(user.id)
  ]);

  return {
    user: mapUser(user),
    destinations,
    itineraries,
    preferences,
    savedDestinations,
    travelHistory
  };
}

function validateItineraryPayload(body) {
  const title = String(body.title || "").trim();
  const destinationId = String(body.destinationId || "").trim();
  const startDate = body.startDate;
  const endDate = body.endDate;

  if (!title) throw Object.assign(new Error("Itinerary title is required"), { status: 400 });
  if (!destinationId) throw Object.assign(new Error("destinationId is required"), { status: 400 });
  if (!isValidDate(startDate) || !isValidDate(endDate)) {
    throw Object.assign(new Error("Valid startDate and endDate are required"), { status: 400 });
  }
  if (new Date(`${endDate}T00:00:00`) < new Date(`${startDate}T00:00:00`)) {
    throw Object.assign(new Error("endDate must be on or after startDate"), { status: 400 });
  }

  return {
    title,
    destinationId,
    startDate,
    endDate,
    notes: body.notes || null,
    status: body.status || "Draft",
    items: normalizeItems(body.items || [])
  };
}

function handleKnownError(error, res) {
  if (error.status) return sendError(res, error.status, error.message);
  throw error;
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/auth/login", asyncHandler(async (req, res) => {
  const { phone, code } = req.body || {};
  if (!isValidPhone(phone)) return sendError(res, 400, "Please enter a valid phone number.");
  if (code !== "123456") return sendError(res, 401, "Invalid verification code. Please try again.");

  const user = await getDemoUser();
  res.json({ user: mapUser(user) });
}));

app.get("/api/bootstrap", asyncHandler(async (_req, res) => {
  res.json(await getBootstrapPayload());
}));

app.get("/api/destinations", asyncHandler(async (req, res) => {
  const destinations = await getDestinations(String(req.query.q || ""));
  res.json({ destinations: destinations.filter((destination) => matchesDestinationFilters(destination, req.query)) });
}));

app.get("/api/destinations/:id", asyncHandler(async (req, res) => {
  const destination = await getDestination(req.params.id);
  if (!destination) return sendError(res, 404, "Destination not found");
  res.json({ destination });
}));

app.get("/api/itineraries", asyncHandler(async (_req, res) => {
  const user = await getDemoUser();
  res.json({ itineraries: await getItineraries(user.id) });
}));

app.post("/api/itineraries", asyncHandler(async (req, res) => {
  const user = await getDemoUser();
  let payload;
  try {
    payload = validateItineraryPayload(req.body || {});
  } catch (error) {
    return handleKnownError(error, res);
  }

  if (!(await destinationExists(payload.destinationId))) {
    return sendError(res, 400, "Destination does not exist");
  }

  const { data: itinerary, error } = await supabase
    .from("itineraries")
    .insert({
      user_id: user.id,
      title: payload.title,
      destination_id: payload.destinationId,
      start_date: payload.startDate,
      end_date: payload.endDate,
      status: payload.status,
      notes: payload.notes
    })
    .select("id")
    .single();

  if (error) throw error;

  if (payload.items.length) {
    const { error: itemError } = await supabase
      .from("itinerary_items")
      .insert(payload.items.map((item) => ({ ...item, itinerary_id: itinerary.id })));
    if (itemError) throw itemError;
  }

  const created = await getItinerary(user.id, itinerary.id);
  res.status(201).json({ itinerary: created });
}));

app.put("/api/itineraries/:id", asyncHandler(async (req, res) => {
  const user = await getDemoUser();
  let payload;
  try {
    payload = validateItineraryPayload(req.body || {});
  } catch (error) {
    return handleKnownError(error, res);
  }

  if (!(await destinationExists(payload.destinationId))) {
    return sendError(res, 400, "Destination does not exist");
  }

  const { data: updatedRows, error } = await supabase
    .from("itineraries")
    .update({
      title: payload.title,
      destination_id: payload.destinationId,
      start_date: payload.startDate,
      end_date: payload.endDate,
      status: payload.status,
      notes: payload.notes,
      updated_at: new Date().toISOString()
    })
    .eq("id", req.params.id)
    .eq("user_id", user.id)
    .select("id");

  if (error) throw error;
  if (!updatedRows?.length) return sendError(res, 404, "Itinerary not found");

  const { error: deleteError } = await supabase
    .from("itinerary_items")
    .delete()
    .eq("itinerary_id", req.params.id);
  if (deleteError) throw deleteError;

  if (payload.items.length) {
    const { error: insertError } = await supabase
      .from("itinerary_items")
      .insert(payload.items.map((item) => ({ ...item, itinerary_id: req.params.id })));
    if (insertError) throw insertError;
  }

  const itinerary = await getItinerary(user.id, req.params.id);
  res.json({ itinerary });
}));

app.delete("/api/itineraries/:id", asyncHandler(async (req, res) => {
  const user = await getDemoUser();
  const { data, error } = await supabase
    .from("itineraries")
    .delete()
    .eq("id", req.params.id)
    .eq("user_id", user.id)
    .select("id");

  if (error) throw error;
  if (!data?.length) return sendError(res, 404, "Itinerary not found");
  res.json({ ok: true });
}));

app.get("/api/preferences", asyncHandler(async (_req, res) => {
  const user = await getDemoUser();
  res.json({ preferences: await getPreferences(user.id) });
}));

app.put("/api/preferences", asyncHandler(async (req, res) => {
  const user = await getDemoUser();
  const allowedBudget = new Set(["Economy", "Standard", "Premium"]);
  const allowedPace = new Set(["Relaxed", "Balanced", "Packed"]);
  const budget = req.body?.budget;
  const pace = req.body?.pace;

  if (!allowedBudget.has(budget)) return sendError(res, 400, "Invalid budget");
  if (!allowedPace.has(pace)) return sendError(res, 400, "Invalid pace");

  const record = {
    user_id: user.id,
    budget,
    pace,
    dietary: Array.isArray(req.body.dietary) ? req.body.dietary : [],
    accessibility: Array.isArray(req.body.accessibility) ? req.body.accessibility : [],
    transport: Array.isArray(req.body.transport) ? req.body.transport : [],
    language: req.body.language || "English (US)",
    currency: req.body.currency || "USD ($)",
    updated_at: new Date().toISOString()
  };

  const { data, error } = await supabase
    .from("preferences")
    .upsert(record, { onConflict: "user_id" })
    .select("*")
    .single();

  if (error) throw error;
  res.json({ preferences: mapPreferences(data) });
}));

app.get("/api/saved-history", asyncHandler(async (_req, res) => {
  const user = await getDemoUser();
  const [savedDestinations, travelHistory] = await Promise.all([
    getSavedDestinations(user.id),
    getTravelHistory(user.id)
  ]);
  res.json({ savedDestinations, travelHistory });
}));

app.post("/api/saved-destinations", asyncHandler(async (req, res) => {
  const user = await getDemoUser();
  const destinationId = String(req.body?.destinationId || "").trim();
  if (!destinationId) return sendError(res, 400, "destinationId is required");
  if (!(await destinationExists(destinationId))) return sendError(res, 400, "Destination does not exist");

  const { error } = await supabase
    .from("saved_destinations")
    .upsert({
      user_id: user.id,
      destination_id: destinationId,
      note: req.body?.note || null
    }, { onConflict: "user_id,destination_id" });

  if (error) throw error;
  res.status(201).json({ savedDestinations: await getSavedDestinations(user.id) });
}));

app.delete("/api/saved-destinations/:destinationId", asyncHandler(async (req, res) => {
  const user = await getDemoUser();
  const { data, error } = await supabase
    .from("saved_destinations")
    .delete()
    .eq("user_id", user.id)
    .eq("destination_id", req.params.destinationId)
    .select("destination_id");

  if (error) throw error;
  if (!data?.length) return sendError(res, 404, "Saved destination not found");
  res.json({ ok: true });
}));

app.use((err, _req, res, _next) => {
  if (err.message === "Not allowed by CORS") {
    sendError(res, 403, "Origin not allowed");
    return;
  }
  console.error(err);
  sendError(res, 500, "Internal server error");
});

app.listen(PORT, () => {
  console.log(`Skybound backend listening on http://localhost:${PORT}`);
});
