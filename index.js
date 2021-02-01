class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
    console.log(this.items);
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    let max = -Infinity;
    if (this.length > 0) {
      this.items.forEach((el) => {
        if (el > max) max = el;
      });
      return max;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    let min = Infinity;
    if (this.length > 0) {
      this.items.forEach((el) => {
        if (el < min) min = el;
      });
      return min;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.length > 0) {
      return this.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    } else {
      return 0;
    }
  }

  avg() {
    if (this.length > 0) {
      return this.sum() / this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
