/* Departments mysql table */
CREATE TABLE department(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
)
/* role mysql table */
CREATE TABLE e_role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary decimal(10,2) NOT NULL,
    role_id INTEGER,
    CONSTRAINT fk_department
    FOREIGN KEY (role_id)
    REFERENCES department(id)
    ON DELETE SET NULL
)

/* employees mysql table */
CREATE TABLE employee(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    description TEXT,

    CONSTRAINT fk_employee_role
    FOREIGN KEY (role_id)
    REFERENCES e_role(id),
    

    CONSTRAINT fk_manager
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
)