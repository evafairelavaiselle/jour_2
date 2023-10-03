function splitOperation(operation) {
const matches = operation.match(/(\d+)([+\-*/])(\d+)/);
if (matches) {
  const firstNumber = parseInt(matches[1], 10);
  const operator = matches[2];
  const secondNumber = parseInt(matches[3], 10);
  return [firstNumber, operator, secondNumber];
} else {
  return null;
}
}
function doOperation(operation) {
const parts = splitOperation(operation);
if (parts) {
  const [firstNumber, operator, secondNumber] = parts;
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      if (secondNumber === 0) {
       console.log("Can't divide by 0");
        return null;
      } else {
      return firstNumber / secondNumber;
      }
    default:
      console.log("Invalid operator");
      return null;
  }
} else {
  console.log("Invalid operation format");
  return null;
}
}
const operation1 = "5+3";
const result1 = doOperation(operation1);
console.log(result1); // Affichera 8
const operation2 = "10/0";
const result2 = doOperation(operation2);