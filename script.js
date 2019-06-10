class Invert {
  constructor(string) {
    this.string = string;
  }
  invertString() {
    let invertedString = "";
    for (let i = this.string.length - 1; i >= 0; i--) {
      invertedString += this.string[i];
    }
    return invertedString;
  }
}
