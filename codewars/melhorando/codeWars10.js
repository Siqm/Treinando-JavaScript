function highAndLow(numbers){
    return numbers.split(' ').map(Number);
    // return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }

console.log(highAndLow('1 9 3 4 -5'))