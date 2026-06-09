create extension if not exists pgcrypto;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  phone text unique not null,
  display_name text not null,
  created_at timestamptz not null default now()
);

create table if not exists destinations (
  id text primary key,
  title text not null,
  location text not null,
  country_region text not null default '',
  category text not null,
  rating numeric,
  image text,
  description text,
  note text,
  budget_level text not null default 'Standard' check (budget_level in ('Economy', 'Standard', 'Premium')),
  travel_styles text[] not null default '{}',
  recommended_duration text not null default '3-5 days' check (recommended_duration in ('Weekend', '3-5 days', '1 week', '2+ weeks')),
  lat numeric,
  lng numeric,
  created_at timestamptz not null default now()
);

alter table destinations add column if not exists country_region text not null default '';
alter table destinations add column if not exists budget_level text not null default 'Standard';
alter table destinations add column if not exists travel_styles text[] not null default '{}';
alter table destinations add column if not exists recommended_duration text not null default '3-5 days';
alter table destinations add column if not exists lat numeric;
alter table destinations add column if not exists lng numeric;

create table if not exists destination_attractions (
  id text primary key,
  destination_id text not null references destinations(id) on delete cascade,
  name text not null,
  visit_time text,
  image text,
  lat numeric,
  lng numeric
);

alter table destination_attractions add column if not exists lat numeric;
alter table destination_attractions add column if not exists lng numeric;

create table if not exists itineraries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  title text not null,
  destination_id text references destinations(id) on delete set null,
  start_date date not null,
  end_date date not null,
  status text not null default 'Draft' check (status in ('Draft', 'Planned', 'Completed')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (end_date >= start_date)
);

create table if not exists itinerary_items (
  id uuid primary key default gen_random_uuid(),
  itinerary_id uuid not null references itineraries(id) on delete cascade,
  time text,
  title text not null,
  location text,
  note text,
  sort_order integer not null default 0
);

create table if not exists preferences (
  user_id uuid primary key references users(id) on delete cascade,
  budget text not null check (budget in ('Economy', 'Standard', 'Premium')),
  pace text not null check (pace in ('Relaxed', 'Balanced', 'Packed')),
  dietary text[] not null default '{}',
  accessibility text[] not null default '{}',
  transport text[] not null default '{}',
  language text not null default 'English (US)',
  currency text not null default 'USD ($)',
  updated_at timestamptz not null default now()
);

create table if not exists saved_destinations (
  user_id uuid not null references users(id) on delete cascade,
  destination_id text not null references destinations(id) on delete cascade,
  note text,
  created_at timestamptz not null default now(),
  primary key (user_id, destination_id)
);

create table if not exists travel_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  destination text not null,
  completed_date date,
  status text not null default 'Completed' check (status = 'Completed'),
  created_at timestamptz not null default now()
);

create index if not exists destination_attractions_destination_id_idx on destination_attractions(destination_id);
create index if not exists itineraries_user_id_idx on itineraries(user_id);
create index if not exists itinerary_items_itinerary_id_idx on itinerary_items(itinerary_id);
create index if not exists saved_destinations_user_id_idx on saved_destinations(user_id);
create index if not exists travel_history_user_id_idx on travel_history(user_id);
