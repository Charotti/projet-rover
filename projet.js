console.log("Chargement en cours");

//                                       Installation prompt
const prompt = require("prompt");
prompt.start();
const axios = require("axios");

//                                           Etape 1 déclaration Grid

const grid = [
    ["N", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
];
//                                           Etape 2
// function turn Right and Left
function turnLeft(myRover) {
    switch (myRover.direction) {
        case "N":
            myRover.direction = "W";
            break;
        case "W":
            myRover.direction = "S";
            break;
        case "S":
            myRover.direction = "E";
            break;
        case "E":
            myRover.direction = "N";
            break;
    }
    grid[rover.y][rover.x] = rover.direction;
}

function turnRight(myRover) {
    switch (myRover.direction) {
        case "N":
            myRover.direction = "E";
            break;
        case "E":
            myRover.direction = "S";
            break;
        case "S":
            myRover.direction = "W";
            break;
        case "W":
            myRover.direction = "N";
            break;
    }
    grid[rover.y][rover.x] = rover.direction;
}
//                               Etape 3 Rover and position


let rover = {
    direction: "N",
    x: 0, //horizontal
    y: 0, // vertical
    travelLog: []
};



//                                 Etape 4 move forward

function moveForward(myRover) {
    switch (myRover.direction) {
        case "N":
            if (myRover.y === 0) { // guard pour ne pas sortir du tableau
                console.log("Vous sortez de la grille")
            } else {
                grid[rover.y][rover.x] = " "; //           Fait disparaitre le rover 
                myRover.y -= 1; //                 Fait déplacer le rover
            }
            break;
        case "E":
            if (myRover.x === 9) {
                console.log("Vous sortez de la grille")
            } else {
                grid[rover.y][rover.x] = " ";
                myRover.x += 1;
            }
            break;
        case "S":
            if (myRover.y === 9) {
                console.log("Vous sortez de la grille")
            } else {
                grid[rover.y][rover.x] = " ";
                myRover.y += 1;
            }
            break;
        case "W":
            if (myRover.x === 0) {
                console.log("Vous sortez de la grille")
            } else {
                grid[rover.y][rover.x] = " ";
                myRover.x -= 1;
            }
            break;
    }
    grid[rover.y][rover.x] = rover.direction; // fait réapparaitre le rover à la position modifiée précedement
}
// Bonus 2                      Move backward

function moveBackward(myRover) {
    switch (myRover.direction) {
        case "N":
            if (myRover.y === 9) { // guard pour ne pas sortir du talbeau
                console.log("Vous sortez de la grille")
            } else {
                grid[rover.y][rover.x] = " "; //           Fait disparaitre le rover 
                myRover.y += 1; //                 Fait déplacer le rover
            }
            break;
        case "E":
            if (myRover.x === 0) {
                console.log("Vous sortez de la grille")
            } else {
                grid[rover.y][rover.x] = " ";
                myRover.x -= 1;
            }
            break;
        case "S":
            if (myRover.y === 0) {
                console.log("Vous sortez de la grille")
            } else {
                grid[rover.y][rover.x] = " ";
                myRover.y -= 1;
            }
            break;
        case "W":
            if (myRover.x === 9) {
                console.log("Vous sortez de la grille")
            } else {
                grid[rover.y][rover.x] = " ";
                myRover.x += 1;
            }
            break;
    }
    grid[rover.y][rover.x] = rover.direction; // fait réapparaitre le rover à la position modifiée précedement
}


//                                    Position du rover dans mon tableau



//console.table(grid);

//                                    Etape 5

function pilotRover(str) {
    grid[rover.y][rover.x] = rover.direction;
    for (let i = 0; i < str.length; i++) {

        if (str.charAt(i) === "l") {
            turnLeft(rover);
            // console.log("c'est un l")
        } else if (str.charAt(i) === "r") {
            // console.log("c'est un r")
            turnRight(rover);
        } else if (str.charAt(i) === "f") {
            rover.travelLog.push(`Mouvement ${i} : ${rover.y}y / ${rover.x}x `) // historique des positions si le rover se déplace
            moveForward(rover);
            console.log(rover.travelLog);
        } else if (str.charAt(i) === "b") {
            rover.travelLog.push(`Mouvement ${i} : ${rover.y}y / ${rover.x}x `) // historique des positions si le rover se déplace
            moveBackward(rover);
            console.log(rover.travelLog);
        }
    }
    console.table(grid);

}

const conditions = [{
    name: "letter",
    description: "Play with a f to forward, a l to turn left, a r to turn right and a b to backward",
    type: "string",
    pattern: /[l|r|f|b]/i,
    message: "Only  r,  l , f and b are valid",
    require: true
}];
let numberOfGame = 0;
//                              Importation de l'API
let pokemons;

axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100").then((res) => {
    pokemons = res.data.results.map((pokemon) => {
            return pokemon.name;
        })
        //console.log(pokemons);
}).catch((err) => {
    console.log("erreur" + err)
});


const randomPokemon = Math.floor(Math.random() * 99)
    //console.log(randomPokemon)         Affiche la case ou se trouve le pokemon
let timing = true;
setTimeout(function() {

    return timing = false;
}, 10000);

console.log(randomPokemon) // position du pokemon

function launch() {
    if (timing === false) {
        return console.log("game over")
    }
    if (numberOfGame === 0) {
        console.table(grid);

    }; // permet d'afficher le tableau en début de partie

    prompt.get(conditions, // Paramètre auquel doit correspondre la lettre entrée dans prompt
        function(err, result) { // deuxième paramètre correspond à au resultat de prompt get

            if (err) {
                return console.log("Error " + err) //     Guard
            }
            pilotRover(result.letter) //    Donne à ma fonction piloteRover la lettre entrée dans prompt
            let idPokemon = parseInt(`${rover.y}${rover.x}`) //    Définition d'un id pokemon
            numberOfGame += 1;
            // partie décourverte de pokemon

            if (randomPokemon === idPokemon) {
                return console.log(`Félicitations vous avez trouvé : ${pokemons[idPokemon]}`)
            } else {
                console.log(`You must found ${pokemons[randomPokemon]}`)
                console.log(pokemons[idPokemon])
            }
            if (timing === true) {
                launch()
            }
        })
};

launch();
//console.log("Game over")