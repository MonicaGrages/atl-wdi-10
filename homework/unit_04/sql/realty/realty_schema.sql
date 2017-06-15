DROP TABLE IF EXISTS apartments;
DROP TABLE IF EXISTS offices;
DROP TABLE IF EXISTS storefronts;

CREATE TABLE apartments (
  id SERIAL PRIMARY KEY,
  apt_number INTEGER,
  bedrooms INTEGER,
  bathrooms INTEGER,
  address VARCHAR NOT NULL,
  tenant VARCHAR,
  occupied BOOLEAN,
  sq_footage INTEGER,
  price INTEGER
);

CREATE TABLE offices (
  id SERIAL PRIMARY KEY,
  office_number INTEGER,
  floors INTEGER,
  sq_footage INTEGER,
  cubicles INTEGER,
  bathrooms INTEGER,
  address VARCHAR NOT NULL,
  company_name VARCHAR,
  occupied BOOLEAN,
  price INTEGER
);

CREATE TABLE storefronts (
  id SERIAL PRIMARY KEY,
  address VARCHAR NOT NULL,
  occupied BOOLEAN,
  price INTEGER,
  has_kitchen BOOLEAN,
  sq_footage INTEGER,
  owner VARCHAR,
  has_outdoor_seating BOOLEAN DEFAULT FALSE
);
