#! /user/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt({ name: "num1",
    type: "number",
    message: "Enter your number",
    validate: (input) => {
        const num2 = parseInt(input);
        if (isNaN(num2)) {
            return "please enter the numaric number";
        }
        else {
            return true;
        }
    }
});
let userInput = answers.num1;
for (let i = 1; i <= 12; i++) {
    let result = userInput * i;
    console.log(`${userInput} x ${i} = ${result}`);
}
