#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta('                       WELLCOME TO TODOS APP !       '));
let todos = ['gym', 'playing cricket'];
async function todoList(todos) {
    do {
        let method = await inquirer.prompt([{
                name: 'select',
                type: 'list',
                message: chalk.redBright('what you want to do ?'),
                choices: ['Add', 'View', 'Update', 'Delete', 'Exit']
            }]);
        if (method.select === 'Add') {
            let ADD = await inquirer.prompt([{
                    name: 'adding',
                    type: 'input',
                    message: chalk.redBright('what do you want to add ?')
                }]);
            todos.push(ADD.adding);
            console.log(chalk.green(`the item "${ADD.adding}" successfully added to your to do list`));
        }
        else if (method.select === 'View') {
            console.log(todos);
        }
        else if (method.select === 'Update') {
            let UPDATE = await inquirer.prompt([{
                    name: 'updating',
                    type: 'list',
                    message: chalk.redBright('what do you want to update ?'),
                    choices: todos
                }]);
            let UPDATE2 = await inquirer.prompt([{
                    name: "updateList",
                    type: 'input',
                    message: chalk.redBright('please enter work to do .')
                }]);
            let B = todos.indexOf(UPDATE.updating);
            todos.splice(B, 1, UPDATE2.updateList);
            console.log(chalk.green(' successfully updated.'));
        }
        else if (method.select === 'Delete') {
            let remove = await inquirer.prompt([{
                    name: 'delete',
                    type: 'list',
                    message: chalk.redBright('select an option you want to delete .'),
                    choices: todos
                }]);
            let findIndex = todos.indexOf(remove.delete);
            todos.splice(findIndex, 1);
            console.log(chalk.green(`the item "${remove.delete}" has been deleted .`));
        }
        else {
            process.exit();
        }
    } while (true);
}
todoList(todos);
