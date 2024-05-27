function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
  return number + "FizzBuzz";
  } else if (number % 3 === 0) {
  return number + "Fizz";
  } else if (number % 5 === 0) {
  return number + "Buzz";
  } else {
  return number.toString();
  }
  }
  
  for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
  }

  module.exports={fizzBuzz};