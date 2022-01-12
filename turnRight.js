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

module.exports = (turnRight)