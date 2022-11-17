class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
    this.currentTime = this.currentTime + 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime%60;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return '0'+value;
    } else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let Minutes = this.getMinutes(this.currentTime); // = 0
    let TwoDigitsMinutes = this.computeTwoDigitNumber(Minutes); // mm

    let Seconds = this.getSeconds(this.currentTime); // = 0
    let TwoDigitsSeconds = this.computeTwoDigitNumber(Seconds); // ss
    
    return `${TwoDigitsMinutes}:${TwoDigitsSeconds}`; // mm:ss
  }
}
