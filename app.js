import inquirer from 'inquirer';
const converter = async () => {
    const { curr1, curr2 } = await inquirer.prompt([
        {
            name: 'curr1',
            type: 'list',
            choices: ["SAR", "PKR", "USD"],
            message: 'Select First Currency'
        },
        {
            name: 'curr2',
            type: 'list',
            choices: ["USD", "PKR", "SAR"]
        }
    ]);
    console.log(curr1, curr2);
};
converter();
