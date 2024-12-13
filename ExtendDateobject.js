
Date.prototype.daysTo = function(otherDate) {
    const oneDay = 24 * 60 * 60 * 1000;
    const thisDate = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    const thatDate = new Date(otherDate.getFullYear(), otherDate.getMonth(), otherDate.getDate());
    return Math.floor((thatDate - thisDate) / oneDay);
};

const d1 = new Date("2024-11-01");
const d2 = new Date("2024-11-13");

console.log(d1.daysTo(d2));
console.log(d2.daysTo(d1));
