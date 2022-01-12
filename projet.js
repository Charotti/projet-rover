// Etape 1 Déclaration du tableau grid et du rover

let rover = {
    direction: "S"
};

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
console.table(grid);
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

console.log(turnRight(rover))