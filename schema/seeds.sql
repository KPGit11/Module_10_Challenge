INSERT INTO department (name) VALUES 
    ('Engineering'),
    ('Sales'),
    ('Finance'),
    ('Legal');

INSERT INTO role (title, salary, department_id) VALUES
    ('Software Engineer', 120000, 1),
    ('Sales Lead', 100000, 2),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('John', 'Doe', 1, NULL),
    ('Mike', 'Chan', 2, 1),
    ('Ashley', 'Rodriguez', 3, NULL),
    ('Kevin', 'Tupik', 4, 3);
