const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// what will be used to display data after inquirer is done and everything is pushed into the array
fs.writeFileSync(outputPath, render(teamMembers), "utf-8");

// is populated with information from the prompts about each team memeber
const teamMembers = [];

// makes the HTML with the teamMember info from the teamMember array
render(teamMembers);

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const managerInfo = [
  {
    type: "input",
    name: "name",
    message: "Enter manager's name: ",
  },
  {
    type: "input",
    name: "id",
    message: "What is your manager's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your manager's email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your manager's office number?",
  },
];

const addMembers = [
  {
    type: "list",
    name: "role",
    message: "Who do you want to add next?",
    choices: ["Engineer", "Intern", "None"],
  },
];

const engineer = [
  {
    type: "input",
    name: "name",
    message: "Enter engineer's name: ",
  },
  {
    type: "input",
    name: "id",
    message: "What is your engineer's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your engineer's email?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is your engineer's gitHub username?",
  },
];

const intern = [
    {
        type: "input",
        name: "name",
        message: "Enter intern's name: ",
      },
      {
        type: "input",
        name: "id",
        message: "What is your intern's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your intern's email?",
      },
      {
          type: "input",
          name: "school",
          message: "Where does your inter go to school?"
      }
]

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
