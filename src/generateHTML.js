

// create the card section
const generateCards = teamMembers => {
    let members = '';    
    for (i=0; i < teamMembers.length; i++) {
        if (teamMembers[i].role === "Manager") { 
            members +=
             `<div class="col-md-4">
             <div class="card m-3 border-info" style="box-shadow: 3px 3px 20px;">
             <h5 class="card-title text-center">${teamMembers[i].name}  <span style="font-size: 38px"><i class="fas fa-chess-queen"></i></span></h5>
             <ul class="list-group list-group-flush">
                 <li class="list-group-item">${teamMembers[i].role}</li>
                 <li class="list-group-item">ID: ${teamMembers[i].id}</li>
                 <li class="list-group-item"><a href="mailto:${teamMembers[i].email}">${teamMembers[i].email}</a></li>
                 <li class="list-group-item">Office Number: ${teamMembers[i].officeNumber}</li>
                </ul>
                </div>
             </div>`

        } else if (teamMembers[i].role === "Engineer") {
            members +=
            `<div class="col-md-4">
            <div class="card m-3 border-info" style="box-shadow: 3px 3px 20px;"><h5 class="card-title text-center">${teamMembers[i].name}  <span style="font-size: 38px"><i class="fas fa-chess-knight"></i></span></h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${teamMembers[i].role}</li>
                <li class="list-group-item">ID: ${teamMembers[i].id}</li>
                <li class="list-group-item"><a href="mailto:${teamMembers[i].email}">${teamMembers[i].email}</a></li>
                <li class="list-group-item"><a href="https://github.com/${teamMembers[i].github}" target="_blank">GitHub Profile</a></li>
                </ul>
                </div>
            </div>`
        } else {
            members +=
            `<div class="col-md-4">
            <div class="card m-3 border-info" style="box-shadow: 3px 3px 20px;"><h5 class="card-title text-center">${teamMembers[i].name}  <span style="font-size: 38px"><i class="fas fa-chess-pawn"></i></span></h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${teamMembers[i].role}</li>
                <li class="list-group-item">ID: ${teamMembers[i].id}</li>
                <li class="list-group-item"><a href="mailto:${teamMembers[i].email}">${teamMembers[i].email}</a></li>
                <li class="list-group-item">School: ${teamMembers[i].school}</li>
                </ul>
                </div>
            </div>`
        }
    }
    return members;
        

}





// Create the HTML page: 

const generateHTML = (data) => {

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test for Css</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/e9b4741190.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="page-header text-center bg-info border text-light">
        <h1>My Team</h1>
    </div>
    <div class="container">
        <div class="row d-flex justify-content-center">
      
        ${generateCards(data)}

        </div>
    </div>
    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>   
</body>
</html>    
    
    `
};

module.exports = generateHTML;

    
