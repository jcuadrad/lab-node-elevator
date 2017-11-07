class Elevator {
  constructor() {
    this.floor = 0;
    this.direction = "up";
    this.MAXFLOOR = 10;
    this.waitingList = [];
    this.passengers = [];
    this.requests = [];
    this.updateIntervalID = "";
  }

  update() {
    // console.log(this.requests);
    if (this.requests.length === 0 && this.waitingList.length === 0) {
      this.stop();
      // } else {
      //   for (let ix = 0; ix < this.request.length(); ix++) {
      //     if (this.request[ix] > this.floor) {
      //       this.floorUp();
      //     } else if (this.requests[ix] < this.floor) {
      //       this.floorDown();
      //     } else if (this.requests[ix] === this.floor) {
      //       this._passengersLeave(this.passengers[0]);
      //     }
      //   }
      //   for (let jx = 0; jx < this.waitingList.length(); jx++) {
      //     if (this.waitingList[jx].originFloor > this.floor) {
      //       this.floorUp();
      //     } else if (this.waitingList[jx].originFloor < this.floor) {
      //       this.floorDown();
      //     } else if (this.requests[jx] === this.floor) {
      //       this._passengersLeave(this.passengers[jx]);
      //     }
      //   }
      // }
    } else if (this.requests.length > 0) {
      if (this.requests[0] > this.floor) {
        this.floorUp();
      } else if (this.requests[0] < this.floor) {
        this.floorDown();
      } else if (this.requests[0] === this.floor) {
        this._passengersLeave(this.passengers[0]);
      }
    } else if (this.waitingList.length > 0) {
      if (this.waitingList[0].originFloor > this.floor) {
        this.floorUp();
      } else if (this.waitingList[0].originFloor < this.floor) {
        this.floorDown();
      } else if (this.waitingList[0].originFloor === this.floor) {
        this._passengersEnter(this.waitingList[0]);
      }
    }
    this.log();
  }

  start() {
    this.updateIntervalID = setInterval(() => this.update(), 1000);
  }

  stop() {
    clearInterval(this.updateIntervalID);
  }

  _passengersEnter(person) {
    if (this.waitingList.includes(person)) {
      this.waitingList.splice(this.waitingList.indexOf(person), 1);
      this.requests.push(person.destinationFloor);
      this.passengers.push(person);
      console.log(`${person.name} has entered the elevator`);
    }
  }

  _passengersLeave(person) {
    if (this.passengers.includes(person)) {
      this.passengers.splice(this.passengers.indexOf(person), 1);
      this.requests.splice(0, 1);
      console.log(`${person.name} has left the elevator`);
    }
  }

  floorUp() {
    if (this.floor === this.MAXFLOOR) {
      this.floor = this.MAXFLOOR;
    } else if (this.floor < this.MAXFLOOR) {
      this.floor += 1;
      this.direction = "Up";
    }
  }

  floorDown() {
    if (this.floor === 0) {
      this.floor = 0;
    } else if (this.floor > 0) {
      this.floor -= 1;
      this.direction = "Down";
    }
  }

  call(person) {
    console.log("Elevator Requested");
    this.waitingList.push(person);
  }

  log() {
    console.log("Direction: " + this.direction + "| Floor: " + this.floor);
  }
}

module.exports = Elevator;
