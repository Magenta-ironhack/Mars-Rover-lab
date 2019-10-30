  class Rover {
    constructor() {
      this.direction = "N";
      this.x = 0;
      this.y = 0;
      this.travellog = [];
    }
    turn(dir) {
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

    // moveRover = (x,y) => {
    //   document.getElementById('rover').remove()
    //   document.querySelectorAll('.row')[x].children[y].innerHTML = '<img id="rover" src="./rover.gif" alt="rover" id="rover"></img>'

    // }

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
        // console.log(
        //     `Rover is at (x${this.x},y${this.y}) ::: Travel Log: ${this.travellog}`
        //   );
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
      }
      // obstacleArray.forEach(obs => {
      //   if (obs.x === this.x && obs.y === this.y) {
      //     // this.travellog.pop();
      //     // if(dir === 'f') {
      //     //     this.move('r');
  
      //     //         } else {
  
      //     //             this.move('f');
      //     //         }
      //     throw Error("Obstacle in your path");
      //   }
      // });
  
      console.log(
        `Rover is at (x${this.x},y${this.y}) ::: Travel Log: ${this.travellog}`
      );
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
  const rover1 = new Rover();
  console.log('hihihi')
  
  // function add(name) {
  //   mars[name] = new Rover(name);
  // }
  
  // const obstacleArray = [{ x: 1, y: 0 }, { x: 4, y: 2 }];
  // const
  
  // Welcome message:
  console.log("%c --- Rover available commands: ---", "color: orange");
  console.log(
    "%c rover.turn(), rover.move(), rover.location(), path()",
    "color: orange"
  );
 
  let forward = document.getElementsByClassName('forward');
  let backward = document.getElementsByClassName('backward');
  let right = document.getElementsByClassName('right');
  let left = document.getElementsByClassName('left');
  
  window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 37: // Left
        roverMove('l')
      break;
  
      case 38: // Up
        roverMove('f')
      break;
  
      case 39: // Right
        roverMove('r')
      break;
  
      case 40: // Down
        roverMove('b')
      break;
    }
  }, false);
  
  
  function roverMove(command) {
    rover1.path(command);
    //rover1.x
    let rows = [...(document.getElementsByClassName('row'))];
    rows.forEach((row,index) => {
      console.log(row.className);
      if(row.className.split(' ')[1].search(rover1.x)!== -1) {
        let columns = [...(row.getElementsByClassName('col'))];
        columns.forEach((col,ind) => {
    if(col.className.split(' ')[1].search(rover1.y)!== -1){
      document.getElementById('rover').remove()
      document.querySelectorAll('.row')[index].children[ind].innerHTML = '<img id="rover" src="./rover.gif" alt="rover" id="rover"></img>'
    }
        })
      }
    });
    
  }
  
  // setInterval(()=>{
  //   rover1.moveRover(Math.floor(Math.random()* 4),Math.floor(Math.random()*4))
  // }, 500)
 