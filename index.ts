import inquirer from 'inquirer';
import { Pool } from 'pg';
import 'console.table';

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'employee_tracker',
    port: 5432
});

const mainMenu = async () => {
    try {
        const { choice } = await inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What would you like to do?',
                choices: [
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',
                    'Add Department',
                    'Add Role',
                    'Add Employee',
                    'Update Employee Role',
                    'Exit'
                ]
            }
        ]);

        switch(choice) {
            case 'View All Departments':
                await viewDepartments();
                break;
            case 'View All Roles':
                await viewRoles();
                break;
            case 'View All Employees':
                await viewEmployees();
                break;
            case 'Add Department':
                await addDepartment();
                break;
            case 'Add Role':
                await addRole();
                break;
            case 'Add Employee':
                await addEmployee();
                break;
            case 'Update Employee Role':
                await updateEmployeeRole();
                break;
            case 'Exit':
                process.exit(0);
        }
        
        await mainMenu(); // Return to main menu after each action
    } catch (error) {
        console.error('An error occurred:', error);
        await mainMenu();
    }
};

// Start the application
mainMenu();