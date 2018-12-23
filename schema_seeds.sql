DROP DATABASE IF EXISTS burgers_db;
-- Create the database task_saver_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers
(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(55) NOT NULL,
devoured BOOLEAN DEFAULT false NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO burgers (burger_name, devoured, createdAt, updatedAt) VALUES ('Traditional', 1, now(), now());
INSERT INTO burgers (burger_name, devoured, createdAt, updatedAt) VALUES ('Royale - with cheese', 0, now(), now());
INSERT INTO burgers (burger_name) VALUES ('Salmon-burger');

SELECT * FROM burgers