INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Kyle', 'Comperda', 1, NULL),
    ('Kalee', 'Anderson', 2, 1),
    ('Adam', 'Duplack', 3, 1),
    ('Nick', 'Camery', 2, 1),
    ('Ryan', 'Skaritka', 5, 1),
    ('Chase', 'Conner', 3, 1),
    ('John', 'Hoffman', 4, 1),
    ('Chris', 'Hong', 2, 1)

INSERT INTO department (name)
VALUES 
('Sales'),
('Engineering'),
('Janitor'),
('Finance'),
('Legal')

INSERT INTO e_role (title, salary, role_id)
VALUES 
('Manager', '120000', 1),
('Head Engineer', '100000', 2),
('Head of Sanitary', '70000', 3),
('Head of Finance', '90000', 4),
('Lead Lawyer', '100000', 5)

SELECT * FROM e_role