const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const managerTemplate = require("./templates/managerTemplate");
const engineerTemplate = require("./templates/engineerTemplate");
const internTemplate = require("./templates/internTemplate");
const mainTemplate = require("./templates/mainTemplate");
const fs = require("fs")

let answers = {
    Manager: [],
    Engineer: [],
    Intern: []
}
let ojb;
let questions = [{
    type: "input",
    message: `name?`,
    name: "name"
}, {
    type: "input",
    message: `id?`,
    name: "id"
}, {
    type: "input",
    message: `email?`,
    name: "email"
}, {
    type: "list",
    message: "what is the employees role",
    choices: ["Manager", "Engineer", "Intern"],
    name: "role"
}]

let officeNumber = {
    type: "input",
    message: `office numbe?`,
    name: "officeNumber"
}
let school = {
    type: "input",
    message: `school?`,
    name: "school"
}
let github = {
    type: "input",
    message: `username?`,
    name: "GitHubUser"
}
let repeating = {
    type: "list",
    massage: "Would you like to add another employee?",
    choices: ["yes", "no"],
    name: "yesNo"
}

function employees() {
    inquirer.prompt(questions).then(function (response) {
        obj = response
        if (obj.role == "Manager") {
            inquirer.prompt(officeNumber).then(function (response) {
                obj.officeNumber = response.officeNumber
                let person = new Manager(obj.name, obj.id, obj.email, obj.officeNumber)
                answers.Manager.push(person)
                repeat();
            })
        } else if (obj.role == "Engineer") {
            inquirer.prompt(github).then(function (response) {
                obj.GitHubUser = response.GitHubUser
                let person = new Engineer(obj.name, obj.id, obj.email, obj.GitHubUser)
                answers.Engineer.push(person)
                repeat();
            })
        } else {
            inquirer.prompt(school).then(function (response) {
                obj.school = response.school
                let person = new Intern(obj.name, obj.id, obj.email, obj.school)
                answers.Intern.push(person)
                repeat();
            })
        }
    })
};
function repeat() {
    inquirer.prompt(repeating).then(function (response) {
        if (response.yesNo == "yes") {
            employees();
        } else {
            html(answers);
        }

    })
}
function html(answers) {
    let cards = ""
    answers.Manager.forEach(element => {
        cards += managerTemplate(element)
    });
    answers.Engineer.forEach(element => {
        cards += engineerTemplate(element)
    });
    answers.Intern.forEach(element => {
        cards += internTemplate(element)
    });
    fs.writeFile("./output/team.html", mainTemplate(cards), function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
}
employees();