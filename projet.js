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
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];
//                                           Etape 2
// function turn Right and Left
function turnLeft(myRover) {
    switch (myRover.direction) {
        case "N":
            return "W"

        case "W":
            return "S";

        case "S":
            return "E";

        case "E":
            return "N";
    }
};

function turnRight(myRover) {
    switch (myRover.direction) {
        case "N":
            return "E"

        case "E":
            return "S";

        case "S":
            return "W";

        case "W":
            return "N";
    }
};
//                               Etape 3 Rover and position
let horizontalX = 0,
    verticalY = 0;

let rover = {
    direction: "S",
    x: grid[verticalY, horizontalX], //horizontal
    y: grid[verticalY] // vertical
};
//console.table(grid);
// console.log(rover.x)



// console.log(turnRight(rover))
//                                 Etape 4 move forward

function moveForward(myRover) {
    switch (myRover.direction) {
        case "N":
            return verticalY -= 1

        case "E":
            return horizontalX += 1;

        case "S":
            return verticalY += 1;

        case "W":
            return horizontalX -= 1;
    }
}
moveForward(rover)
console.log(verticalY)


//                                    Postion du rover dans mon tableau
grid[verticalY][horizontalX] = rover.direction;

console.table(grid);