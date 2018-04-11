DROP DATABASE IF EXISTS CLTfree_db;
CREATE DATABASE CLTfree_db;
USE CLTfree_db;

CREATE TABLE jobs (
  id INTEGER AUTO_INCREMENT NOT NULL,
  creator VARCHAR(255) NOT NULL,
  job_name VARCHAR(255) NOT NULL,
  job_description TEXT NOT NULL,
  job_category TEXT NOT NULL,
  -- email VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
  );

CREATE TABLE freelancers (
  id INTEGER AUTO_INCREMENT NOT NULL,
  freelancer_name VARCHAR(255) NOT NULL,
  skill_set VARCHAR(255) NOT NULL,
  img_link VARCHAR(255),
  bio TEXT NOT NULL,
  portfolio VARCHAR(255) NOT NULL,
  linked_in VARCHAR(255) NOT NULL,
  -- email VARCHAR(255) NOT NULL,
  rate_requested INTEGER NOT NULL,
  PRIMARY KEY (id)
  );

CREATE TABLE users (
  id INTEGER AUTO_INCREMENT NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
)
  
-- CREATE TABLE message (
--   id INTEGER AUTO_INCREMENT NOT NULL,
--   -- foreign key from the freelancers table with the freelancers id,
--   -- foreign key from the jobs table with the jobs id
--   message TEXT NOT NULL,
--   budget_proposed INT NOT NULL,
--   PRIMARY KEY (id)
--   );