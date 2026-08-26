-- Run this in your Neon SQL Editor (or via psql)
-- 1. Create the table
CREATE TABLE IF NOT EXISTS grand_estate_applications (
  id               BIGSERIAL PRIMARY KEY,
  first_name       TEXT,
  last_name        TEXT,
  phone            TEXT,
  email            TEXT,
  app_date         DATE,
  moving_date      DATE,
  occupation       TEXT,
  occupants        INTEGER,
  has_vehicle      TEXT,
  has_pets         TEXT,
  been_evicted     TEXT,
  addr_street1     TEXT,
  addr_street2     TEXT,
  addr_city        TEXT,
  addr_state       TEXT,
  addr_zip         TEXT,
  payment_methods  TEXT,
  signature_data   TEXT,
  submitted_at     TIMESTAMPTZ DEFAULT now()
);
