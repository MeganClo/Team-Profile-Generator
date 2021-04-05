// create the card section
const generateCards = teamMemberArr => {
    teamMemberArr
        .filter(({ Manager }) => Manager)
        .map(({ name, id, email, role, officeNumber }) => {
            return `
            <div class="col-md-4">
            <div class="card m-3 border-info" style="box-shadow: 3px 3px 20px;">
            <div class="card-body"></div>
            <h5 class="card-title text-center">${name}  <span style="font-size: 38px"><i class="fas fa-chess-queen"></i></span></h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${role}</li>
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"><a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Office Number: ${officeNumber}</li>
            </ul>
            </div>
        </div>
            `
        })
    teamMemberArr
        .filter(({ Engineer }) => Engineer) 
        .map(({ name, id, email, role, github }) => {
            return `
            <div class="col-md-4">
            <div class="card m-3 border-info" style="box-shadow: 3px 3px 20px;">
            <div class="card-body"></div>
            <h5 class="card-title text-center">${name}  <span style="font-size: 38px"><i class="fas fa-chess-bishop"></i></span></h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${role}</li>
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"><a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item"><a href="https://github.com/${github}" target="_blank">GitHub Profile</a></li>
            </ul>
            </div>
        </div>`
        })
        .join("")
    teamMemberArr
        .filter(({ Intern }) => Intern) 
        .map(({ name, id, email, role, school }) => {
            return `
            <div class="col-md-4">
            <div class="card m-3 border-info" style="box-shadow: 3px 3px 20px;">
            <div class="card-body"></div>
            <h5 class="card-title text-center">${name}  <span style="font-size: 38px"><i class="fas fa-chess-pawn"></i></span></h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${role}</li>
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"><a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>` 
        })
        .join("")
};

// Create the HTML page: 

    
