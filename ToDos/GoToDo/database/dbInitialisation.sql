DROP DATABASE IF EXISTS todo;
CREATE DATABASE todo;
USE todo;

CREATE TABLE todoItem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    description VARCHAR(255),
    fulfilled BOOL
);

INSERT INTO todoItem (title, description, fulfilled) 
VALUES 
('Clean the house', 'Living room, kitchen, bathroom', false),
('Finish report', 'Complete the monthly sales report', true);
