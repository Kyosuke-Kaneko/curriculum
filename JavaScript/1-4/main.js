let number = 1;
while (number < 100){
    if (number % 3 === 0 & number % 5 === 0){
      console.log(" FizzBuzz!!")
    }
    if (number % 3 === 0 & number % 5 === 0){
      number++;
      continue;
    }
     if (number % 3 === 0){
       console.log("Fizz!");
     }
     if (number % 3 === 0){
      number++;
      continue;
    }
     if (number % 5 === 0){
       console.log("Buzz!")
     }
     if (number % 5 === 0){
      number++;
      continue;
    }
  console.log(number);
  number++;
}