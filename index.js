class Obstacle {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
class Rover {
    constructor(name) {
        this.name = name;
this.direction = 'N';
this.x = 0;
this.y = 0;
this.travellog = [];
    }
    turn(dir){
        if (dir === "r" || dir === "l") {
            // *Directions are "r" (Right), "l" (left).
            switch (this.direction) {
              case "N":
                dir == "r" ? (this.direction = "E") : (this.direction = "W");
                break;
              case "S":
                dir == "r" ? (this.direction = "W") : (this.direction = "E");
                break;
              case "E":
                dir == "r" ? (this.direction = "S") : (this.direction = "N");
                break;
              case "W":
                dir == "r" ? (this.direction = "N") : (this.direction = "S");
                break;
            }
            console.log(`${dir} was called, rover is heading ${this.direction}.`);
          } 
    }
    move(dir) {
         // *Directions are "f" (forward), "b" (backward).
        
    if (dir === "f") {
        switch (this.direction) {
          case "N":
            if (this.y === 0) {
              throw Error(`Rover is at y${this.y}, can't move North.`);
            } else {
              this.y--;
              this.travellog.push(`(x${this.x},y${this.y})`);
            }
            break;
          case "S":
            if (this.y === 9) {
              throw Error(`Rover is at y${this.y}, can't move South.`);
            } else {
              this.y++;
              this.travellog.push(`(x${this.x},y${this.y})`);
            }
            break;
          case "W":
            if (this.x === 0) {
              throw Error(`Rover is at x${this.x}, can't move West.`);
            } else {
              this.x--;
              this.travellog.push(`(x${this.x},y${this.y})`);
            }
            break;
          case "E":
            if (this.x === 9) {
              throw Error(`Rover is at x${this.x}, can't move East.`);
            } else {
              this.x++;
              this.travellog.push(`(x${this.x},y${this.y})`);
            }
            break;
        }
        console.log(
          `Rover is at (x${this.x},y${this.y}) ::: Travel Log: ${this.travellog}`
        );
      } else if (dir === "b") {
        switch (this.direction) {
          case "N":
            if (this.y === 9) {
              throw Error(`Rover is at y${this.y}, can't move South.`);
            } else {
              this.y++;
              this.travellog.push(`(x${this.x},y${this.y})`);
            }
            break;
          case "S":
            if (this.y === 0) {
              throw Error(`Rover is at y${this.y}, can't move North.`);
            } else {
              this.y--;
              this.travellog.push(`(x${this.x},y${this.y})`);
            }
            break;
          case "W":
            if (this.x === 9) {
              throw Error(`Rover is at x${this.x}, can't move East.`);
            } else {
              this.x++;
              this.travellog.push(`(x${this.x},y${this.y})`);
            }
            break;
          case "E":
            if (this.x === 0) {
              throw Error(`Rover is at x${this.x}, can't move Wast.`);
            } else {
              this.x--;
              this.travellog.push(`(x${this.x},y${this.y})`);
            }
            break;
        }
        obstacleArray.forEach(obstacle => {
            console.log(this.x,obstacle.x);
            if(obstacle.x === this.x && obstacle.y === this.y) {
                console.log('Caution - Obstacle ' + obstacle +' is in the path');
                this.travellog.pop();
            } else {
                console.log(
                    `Rover is at (x${this.x},y${this.y}) ::: Travel Log: ${this.travellog}`
                  );
            }
        })
        
      } 
    }
    location(dir) {
        console.log(
            `Rover is located at (x${this.x},y${this.y}), facing ${this.direction}.`
          ); 
    }
    path(str) {
        if (str !== "" && str !== undefined) {
            str
              .split("")
              .map(char => ("fb".includes(char) ? this.move(char) : this.turn(char)));
          } else {
            throw Error(`No path provided.`);
          }
    }
}
const roverApollo13 = new Rover();
const roverFalcon = new Rover();
const roverChandhrayan = new Rover();
const rock = new Obstacle(1,0);
const disc = new Obstacle(2,3);
const obstacleArray = [rock,disc];
// const 
// Welcome message:
console.log("%c --- Rover available commands: ---", "color: orange");
console.log(
  "%c rover.turn(), rover.move(), rover.location(), path()",
  "color: orange"
);

