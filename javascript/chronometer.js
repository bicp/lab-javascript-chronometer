class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

    // bônus
    this.millisecondsIntervalId = 0;
    this.currentMilliseconds = 0;
  }

  computeTwoDigitNumber(value) {
    if (value <= 9) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }
  
  split() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    if (minutes <= 9) {
      minutes = '0' + minutes; 
    }
    if (seconds <= 9) {
      seconds = '0'+ seconds;
    }

    return `${minutes}:${seconds}`;
  }

  start(callback) {
    // (printTime, /* bônus => */ printMilliseconds)
    this.intervalId = setInterval(() => {
        this.currentTime++;
      //console.log(this.currentTime);
      //printTime(this.currentTime);
      // if (printTime) printTime();
    }, 1000);

    // bônus 
    // this.millisecondsIntervalId = setInterval(() => {
    //   if (this.currentMilliseconds === 99) {
    //     this.currentMilliseconds = 0;
    //   }
    //   this.currentMilliseconds++;
    //   // if (printMilliseconds) printMilliseconds();
    // }, 10);
    if (callback) {
      callback()
    }
  }

  getMinutes() {
    let currentTimeMin = Math.floor(this.currentTime / 60);
    return currentTimeMin;
  }

  getSeconds() {
    let currentTimeSec = this.currentTime % 60;
    return currentTimeSec;
  }

  twoDigitsNumber(num) {
    return ('0' + num).slice(-2);
  }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId); // bônus
  }

  resetClick() {
    this.currentTime = 0;

    // bônus =>
    this.currentMilliseconds = 0;
  }

  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    let milliseconds = this.twoDigitsNumber(this.currentMilliseconds); //  bônus

    return `${minutes}:${seconds}:${milliseconds}`; // bônus
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}