//                                           Etape 1 déclaration Grid

const grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
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
    direction: "S",
    x: 0, //horizontal
    y: 0 // vertical
};
//console.table(grid);
// console.log(rover.x)

// console.log(turnRight(rover))
//                                 Etape 4 move forward

function moveForward(myRover) {
    switch (myRover.direction) {
        case "N":
            myRover.y -= 1;
            break;
        case "E":
            myRover.x += 1;
            break;
        case "S":
            myRover.y += 1;
            break;
        case "W":
            myRover.x -= 1;
            break;
    }
    grid[rover.y][rover.x] = rover.direction;
}
//moveForward(rover);


//                                    Position du rover dans mon tableau



//console.table(grid);

//                                    Etape 5

function pilotRover(str) {

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "l") {
            turnLeft(rover)
                // console.log("c'est un l")
        } else if (str.charAt(i) === "r") {
            // console.log("c'est un r")
            turnRight(rover)
        } else if (str.charAt(i) === "f") {
            console.log("ceci est un f");
            moveForward(rover)
            console.table(grid)
        }
    }

}
pilotRover("fff")