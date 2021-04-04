const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager")

// assigning an array to hold engineer information
const teamMemberArr = [];

// assigning an array to hold intern information
// const internArr = [];

// assigning an object to hold manager information
// let manager = {};

// questions related to manager information
const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "Please enter the team manager's name. (Required)",
        validate: managerNameInput => {
            if (managerNameInput) {
                return true;
            } else {
                console.log("You must enter the team manager's name.")
                return false;
            }
        }

    },
    {
        type: "input",
        name: "managerID",
        message: "Please enter the team manager's ID number.",
        default: " "
    },
    {
        type: "input", 
        name: "managerEmail",
        message: "Please enter the team manager's email (Required)",
        validate: managerEmailInput => {
            if (managerEmailInput) {
                return true;
            } else {
                console.log("You must enter the team manager's email.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the office number to reach the team manager. (Required)",
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log("You must enter the team manager's email.")
                return false;
            }
        }
    },
    
];

// question to call to check if information was entered correctly
const checkQuestion = [
    {
        type: "list",
        name: "check", 
        message: "Is the above information correct?",
        choices: ["Yes, take me to the next step.", "No, please allow me to re-enter that information."]
    }
];

// question to call to see if the user is finished or would like to add more employees
const nextStepQuestion = [
    {
       type: "list",
       name: "nextStepCheck",
       message: "What would you like to do next?",
       choices: ["I've finished building my team, generate my team page!", "I'd like to add an engineer to my Team.", "I'd like to add an intern to my team."] 
    }
];

// questions related to engineers
const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "Please enter the engineer's name. (Required)",
        validate: engineerNameInput => {
            if (engineerNameInput) {
                return true;
            } else {
                console.log("You must enter the engineer's name.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "engineerID",
        message: "Please enter the engineer's ID number.",
        default: " "
    },
    {
        type: "input", 
        name: "engineerEmail",
        message: "Please enter the engineers's email (Required)",
        validate: engineerEmailInput => {
            if (engineerEmailInput) {
                return true;
            } else {
                console.log("You must enter the engineer's email.")
                return false;
            }
        }
    },
    {
        type: "input", 
        name: "engineerGithub",
        message: "Please enter the engineers's GitHub username (Required)",
        validate: engineerGithubInput => {
            if (engineerGithubInput) {
                return true;
            } else {
                console.log("You must enter the engineer's GitHub username.")
                return false;
            }
        }
    },
];

// questions related to interns
const internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "Please enter the intern's name. (Required)",
        validate: internNameInput => {
            if (internNameInput) {
                return true;
            } else {
                console.log("You must enter the intern's name.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "internID",
        message: "Please enter the intern's ID number.",
        default: " "
    },
    {
        type: "input", 
        name: "internEmail",
        message: "Please enter the intern's email (Required)",
        validate: internEmailInput => {
            if (internEmailInput) {
                return true;
            } else {
                console.log("You must enter the intern's email.")
                return false;
            }
        }
    },
    {
        type: "input", 
        name: "internSchool",
        message: "Please enter the intern's school. (Required)",
        validate: internSchoolInput => {
            if (internSchoolInput) {
                return true;
            } else {
                console.log("You must enter the intern's school.")
                return false;
            }
        }
    },
];


const promptManagerInfo = () => {
    return inquirer.prompt(managerQuestions)
    .then(managerData => {
        console.table(managerData);
        answerCheck()
        .then(answerCheckData => {
            if (answerCheckData.check === "Yes, take me to the next step.") {
                const manager = new Manager
                (this.name = managerData.managerName,
                this.id = managerData.managerID,
                this.email = managerData.managerEmail,
                this.officeNumber = managerData.officeNumber)
                teamMemberArr.push(manager);
                console.log(teamMemberArr);
                employeeAdd();
            } else {
                promptManagerInfo();
            }
        })
        .catch(err => {
            console.log(err);
        })
    });
};

const engineerAdd = () => {
    return inquirer.prompt(engineerQuestions)
    .then(engineerData => {
        console.table(engineerData);
        answerCheck()
        .then(answerCheckData => {
            if (answerCheckData.check === "Yes, take me to the next step.") {
                const engineer = new Engineer
                (this.name = engineerData.engineerName, 
                this.id = engineerData.engineerID, 
                this.email = engineerData.engineerEmail,
                this.github = engineerData.engineerGithub);
                teamMemberArr.push(engineer);
                console.log(teamMemberArr);
                employeeAdd();
            } else {
                engineerAdd();
            }
        })
        .catch(err => {
            console.log(err);
        })
    })
};

const internAdd = () => {
    return inquirer.prompt(internQuestions)
    .then(internData => {
        console.table(internData);
        answerCheck()
        .then(answerCheckData => {
            if (answerCheckData.check === "Yes, take me to the next step.") {
                const intern = new Intern
                (this.name = internData.internName, 
                this.id = internData.internID, 
                this.email = internData.internEmail,
                this.school = internData.internSchool);
                teamMemberArr.push(intern);
                console.log(teamMemberArr);
                employeeAdd();
            } else {
                internAdd();
            }
        })
        .catch(err => {
            console.log(err);
        })
    })
};


const answerCheck = () => {
    return inquirer.prompt(checkQuestion)
};

const employeeAdd = () => {
    return inquirer.prompt(nextStepQuestion)
    .then(nextStepQuestion => {
        if (nextStepQuestion.nextStepCheck === "I've finished building my team, generate my team page!") {
            console.log("Team page will be built")
        } else if (nextStepQuestion.nextStepCheck === "I'd like to add an engineer to my Team.") {
            engineerAdd();
        } else {
            internAdd();
        }
    })
};


promptManagerInfo();



