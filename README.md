# Skybound Mobile Travel Planner

## Online Demo URL

Use the fixed Vercel production URL for demo and testing:

```text
https://interface-sage-seven.vercel.app
```

Do not use Vercel preview deployment URLs such as:

```text
https://interface-xxxx-todd-s-projects13.vercel.app
```

The Render backend CORS allowlist is configured for the fixed production URL. Preview URLs change between deployments and can trigger `Unable to load data`, `Failed to fetch`, or `Origin not allowed` errors unless they are also added to `ALLOWED_ORIGINS`.

Skybound is a mobile-style travel planning demo app. It includes destination search, preference-based recommendations, destination details, itinerary management, route-map previews, saved destinations, and profile preferences.

The project can be demoed in two modes:

- **Frontend-only demo:** fastest setup, uses the built-in seed data in `frontend_app/app.js`.
- **Full demo with persistence:** runs the Express backend and Supabase database so created itineraries, saved destinations, and preferences persist through refreshes.

## Project Structure

```text
.
├── frontend_app/
│   ├── index.html
│   ├── app.js
│   └── styles.css
└── backend/
    ├── server.js
    ├── package.json
    ├── .env.example
    └── supabase/
        ├── schema.sql
        └── seed.sql
```

## Requirements

For the frontend-only demo:

- Python 3, or any simple static file server.
- A browser.
- Internet access is recommended because several demo images and Google Fonts are loaded from remote URLs.

For the full backend demo:

- Node.js 18+.
- npm.
- A Supabase project.
- Supabase service role key.

## Quick Demo: Frontend Only

Use this when you only need to show the UI and core interactions quickly.

```bash
cd frontend_app
python3 -m http.server 4173
```

Open:

```text
http://localhost:4173
```

Demo login:

```text
Phone: 10000000000
Code: 123456
```

Notes:

- The frontend tries to call `http://localhost:4174/api`.
- If the backend is not running, the app still has built-in seed data for the main demo screens.
- Backend-dependent saves may show an error or use local fallback behavior. For a persistence demo, use the full setup below.

## Full Demo: Backend + Supabase

### 1. Create Supabase Tables

Open your Supabase SQL editor and run these files in order:

```text
backend/supabase/schema.sql
backend/supabase/seed.sql
```

The seed creates the demo user, destinations, preferences, saved destinations, travel history, and starter itineraries.

### 2. Configure Backend Environment

Create `backend/.env` from the example:

```bash
cd backend
cp .env.example .env
```

Fill in:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
ALLOWED_ORIGINS=http://localhost:4173,http://127.0.0.1:4173
```

Important:

- Use the **service role key**, not the anon key.
- Do not commit or share `backend/.env`.
- `PORT` is optional for local development. Render provides `PORT` automatically in production.
- The frontend API base is configured in `frontend_app/config.js`.

### 3. Install and Start Backend

```bash
cd backend
npm install
npm run dev
```

Or:

```bash
npm start
```

Backend health check:

```text
http://localhost:4174/api/health
```

Expected response:

```json
{ "ok": true }
```

### 4. Start Frontend

In a second terminal:

```bash
cd frontend_app
python3 -m http.server 4173
```

Open:

```text
http://localhost:4173
```

## Demo Script

Use this sequence for a clean walkthrough:

1. Log in with phone `10000000000` and code `123456`.
2. On Home, change category chips and show preference-based recommendations.
3. Click `More Recommendations` to expand all recommendation cards.
4. Open Search and test keyword plus filters such as `Food`, `Standard`, `3-5 days`, and `Walkable`.
5. Open a Destination Detail page and show images, overview, key attractions, add to itinerary, map, and suggested plan.
6. Create an itinerary from a suggested plan and show day tabs plus daily timelines.
7. Add/edit/delete an event on a specific day, save, refresh, and confirm it persists.
8. Open Map from a destination and from an itinerary to show destination pins and route points.
9. Open Profile, edit preferences, save, and return Home to show recommendation changes.
10. Open Saved & History to show saved trips, saved destinations, and past itinerary history.

## Demo Login Rules

- Valid verification code: `123456`.
- Any other code should show an invalid-code message.
- Phone number only needs to pass the demo phone validation. `10000000000` is the seeded demo account.

## Ports

```text
Frontend: http://localhost:4173
Backend:  http://localhost:4174
API base: http://localhost:4174/api
```

The backend CORS allowlist currently accepts:

```text
http://localhost:4173
http://127.0.0.1:4173
```

If you serve the frontend from another origin, update the backend `ALLOWED_ORIGINS` environment variable. For the deployed Vercel demo, include:

```text
https://interface-sage-seven.vercel.app
```

## Data Notes

Destination records include:

- `title`
- `location`
- `countryRegion`
- `category`
- `rating`
- `image`
- `description`
- `note`
- `keyAttractions`
- `budgetLevel`
- `travelStyles`
- `recommendedDuration`

Search supports keyword plus filters:

- category/type
- location/region/country
- budget level
- travel style/interests
- duration
- rating

Itinerary items currently preserve day information through encoded `sortOrder` values and expose `day` in the API response. A future database migration should add a dedicated `day_number` column.

## Validation Commands

Frontend syntax check:

```bash
node --check frontend_app/app.js
```

Backend syntax check:

```bash
cd backend
npm run check
```

## Troubleshooting

### Login works but data does not persist

The frontend is probably running without the backend, or the backend cannot connect to Supabase. Start the backend and verify:

```text
http://localhost:4174/api/health
```

Then check `backend/.env`.

### Browser shows missing images

Some demo images are remote URLs. Make sure the demo machine has internet access. The app has image fallback behavior, but the best visual demo requires network access.

### CORS error

Use the fixed Vercel production URL:

```text
https://interface-sage-seven.vercel.app
```

Do not use Vercel preview URLs unless they are included in the Render backend `ALLOWED_ORIGINS` environment variable. For local development, serve the frontend from `localhost:4173` or `127.0.0.1:4173`.

### Supabase error: demo user not found

Run both SQL files in order:

```text
backend/supabase/schema.sql
backend/supabase/seed.sql
```

### Port already in use

Use another port for the static server, then update backend CORS if using the full backend demo. For example:

```bash
cd frontend_app
python3 -m http.server 5173
```

Then add `http://localhost:5173` to `ALLOWED_ORIGINS`.

## Packaging for Someone Else

Before sending the project:

1. Include `frontend_app/`, `backend/`, and this `README.md`.
2. Do not include `backend/.env`.
3. Include `backend/.env.example`.
4. Tell the recipient whether they should run frontend-only or full backend mode.
5. If they need full persistence, give them Supabase setup access or have them create their own Supabase project and run the SQL files.
