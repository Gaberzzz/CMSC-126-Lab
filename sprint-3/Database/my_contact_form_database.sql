-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS my_contact_form_database;

-- Use the database
USE my_contact_form_database;

-- Create the table to store contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  submission_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) engine=InnoDB;
