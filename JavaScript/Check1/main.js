let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(num) {
  for (let i = 0; i < numbers.length; i++) {
    if ( numbers[i] % 2 === 0) {
      num = numbers[i]; 
      console.log(num + 'は偶数です');
    }

  }
    
}
isEven();

class Car {
  constructor(gas, figure) {
    this.gas = gas;
    this.figure = figure;
  }
  getNumGas() {
    console.log(`ガソリンは${this.gas}です。`);
    console.log(`ナンバーは${this.figure}です。`);
  }
}
let drive = new Car("regular", 2345);
drive.getNumGas();