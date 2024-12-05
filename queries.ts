import inquirer from 'inquirer';
import pool from './index.ts';
import 'console.table';

export const viewDepartments = async () => {
    const result = await pool.query('SELECT * FROM department');
    console.table(result.rows);
};

export const viewRoles = async () => {
    const result = await pool.query(`
        SELECT role.id, role.title, department.name AS department, role.salary 
        FROM role 
        JOIN department ON role.department_id = department.id
    `);
    console.table(result.rows);
};

export const addEmployee = async () => {
    const roles = await pool.query('SELECT id, title FROM role');
    const managers = await pool.query('SELECT id, first_name, last_name FROM employee');
    
    const answers = await inquirer.prompt([
        {
            name: 'firstName',
            message: "What is the employee's first name?"
        },
        {
            name: 'lastName',
            message: "What is the employee's last name?"
        },
        {
            type: 'list',
            name: 'roleId',
            message: "What is the employee's role?",
            choices: roles.rows.map(role => ({
                name: role.title,
                value: role.id
            }))
        }
    ]);
    
    await pool.query(
        'INSERT INTO employee (first_name, last_name, role_id) VALUES ($1, $2, $3)',
        [answers.firstName, answers.lastName, answers.roleId]
    );
};
