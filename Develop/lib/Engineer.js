// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(github){
     super(name, id, email); 
     // github username 
     this.github = github; 
    }
    getGithub(){}
    // overridden to return "Engineer"
    getRole(){}

}