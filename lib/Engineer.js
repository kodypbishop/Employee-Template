const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email,GitHubUser){
        super(name, id, email)
        this.GitHubUser = GitHubUser
    };
    getRole(){return "Engineer"}
    getGithub(){return this.GitHubUser}
}

module.exports = Engineer;