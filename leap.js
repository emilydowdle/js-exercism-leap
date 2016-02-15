var Year = function(year) {
  this.year = year
}

Year.prototype.isLeap = function() {
  if (!evenlyDivisibleByFour(this.year)) {
    return false;
  } else if (evenlyDivisibleBy100(this.year)) {
    return evenlyDivisibleBy400(this.year);
  } else {
    return true;
  };
}

function evenlyDivisibleByFour(year) {
  return year % 4 === 0
}

function evenlyDivisibleBy100(year) {
  return year % 100 === 0
}

function evenlyDivisibleBy400(year) {
  return year % 400 === 0
}

module.exports = Year;
