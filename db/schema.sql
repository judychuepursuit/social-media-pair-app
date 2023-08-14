DROP DATABASE IF EXISTS socialmedia_dev;
CREATE DATABASE socialmedia_dev;

\c socialmedia_dev;

-- DROP TABLE IF EXISTS socialmedia;
-- CREATE TABLE socialmedia (
--  id SERIAL PRIMARY KEY,
--  name TEXT NOT NULL,
--  artist TEXT,
--  album TEXT,
--  time TEXT,
--  is_favorite BOOLEAN
-- );

DROP TABLE IF EXISTS socialmedia;

CREATE TABLE socialmedia (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 rating TEXT,
 launched TEXT,
 ma_users TEXT,
 website TEXT NOT NULL,
 logo_link TEXT,
 is_favorite BOOLEAN
);