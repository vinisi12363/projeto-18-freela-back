CREATE USER "amazingtripsdbuser" WITH PASSWORD 'senha_super_secreta_do_dbuser';
GRANT ALL PRIVILEGES ON TABLE cities, airlines, flights, hotels, photos TO "amazingtripsdbuser";
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO "amazingtripsdbuser";

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
);
GRANT ALL PRIVILEGES ON TABLE users TO "amazingtripsdbuser";

-- Tabela "Cities"
CREATE TABLE cities (
  city_id SERIAL PRIMARY KEY,
  city_uf VARCHAR(255) NOT NULL, 
  city_name VARCHAR(255) NOT NULL
);

-- Tabela "Airlines"
CREATE TABLE airlines (
  airline_id SERIAL PRIMARY KEY,
  airline_name VARCHAR(255) NOT NULL
);

-- Tabela "Flights"
CREATE TABLE flights (
  flight_id SERIAL PRIMARY KEY,
  airline_id INT NOT NULL,
  departure_city_id INT NOT NULL,
  destination_city_id INT NOT NULL,
  departure_time TIMESTAMP NOT NULL,
  arrival_time TIMESTAMP NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  FOREIGN KEY (airline_id) REFERENCES airlines (airline_id),
  FOREIGN KEY (departure_city_id) REFERENCES cities (city_id),
  FOREIGN KEY (destination_city_id) REFERENCES cities (city_id)
);

-- Tabela "Hotels"
CREATE TABLE hotels (
  hotel_id SERIAL PRIMARY KEY,
  city_id INT NOT NULL,
  hotel_name VARCHAR(255) NOT NULL,
  description TEXT,
  amenities TEXT,
  price_per_night NUMERIC(10, 2) NOT NULL,
  FOREIGN KEY (city_id) REFERENCES cities (city_id)
);

-- Tabela "Photos"
CREATE TABLE photos (
  photo_id SERIAL PRIMARY KEY,
  hotel_id INT NOT NULL,
  photo_url VARCHAR(255) NOT NULL,
  FOREIGN KEY (hotel_id) REFERENCES hotels (hotel_id)
);