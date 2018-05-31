DROP DATABASE IF EXISTS photoList;

CREATE DATABASE photoList;

USE photoList;

CREATE TABLE photos (
id int NOT NULL AUTO_INCREMENT,
date date,
verification BOOLEAN NOT NULL,
url VARCHAR(255) NOT NULL UNIQUE,
description VARCHAR(255) NOT NULL,
PRIMARY KEY (ID)
);
 /* 

 mysql -u root < schema.sql 
 */

INSERT INTO photos (date, verification, url, description) VALUES ('1000-01-01', 1, 'https://a0.muscache.com/im/pictures/763ad5c8-c951-43e0-b926-4a98c25c45e8.jpg?aki_policy=large', 'random description');
INSERT INTO photos (date, verification, url, description) VALUES ('1000-01-01', 1, 'https://a0.muscache.com/im/pictures/e8c308ed-e108-47ee-a469-55bf0665133e.jpg?aki_policy=x_large', 'random description');
INSERT INTO photos (date, verification, url, description) VALUES ('1000-01-01', 1, 'https://a0.muscache.com/im/pictures/9287b847-fe76-4c72-bfb5-8590739fa90b.jpg?aki_policy=x_large', 'random description');
INSERT INTO photos (date, verification, url, description) VALUES ('1000-01-01', 1, 'https://a0.muscache.com/im/pictures/606c3478-4931-4b6d-8cd4-406355c1efc5.jpg?aki_policy=x_large', 'random description');
INSERT INTO photos (date, verification, url, description) VALUES ('1000-01-01', 1, 'https://a0.muscache.com/im/pictures/7feb8077-e7ae-4cee-8d95-c62afeca8a2c.jpg?aki_policy=x_large', 'random description');
