export default class Calculator {
  constructor(
    primaryOperand,
    secondaryOperand,
    operation,
    firstNumber,
    secondNumber
  ) {
    this.primaryOperand = primaryOperand;
    this.secondaryOperand = secondaryOperand;
    this.operation = operation;
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  clear() {
    this.primaryOperand.innerHTML = 0;
    this.secondaryOperand.innerHTML = "";
    this.operation = null;
    this.firstNumber = 0;
    this.secondNumber = 0;
  }

  addDigit(digit) {
    this.firstNumber += digit;
    this.primaryOperand.innerHTML = displayNumber(this.firstNumber);
  }

  removeDigit() {
    const numberString = this.firstNumber.toString();
    if (numberString.length <= 1) {
      this.firstNumber = 0;
      return;
    }
    this.firstNumber = numberString.substring(0, numberString.length - 1);
    this.primaryOperand.innerHTML = displayNumber(this.firstNumber);
  }
  chooseOperation(operation) {
    if (this.operation && this.operation.textContent !== "") return;
    this.operation = operation;
    this.secondNumber = this.firstNumber;
    this.firstNumber = 0;
    this.secondaryOperand.innerHTML = this.primaryOperand.innerHTML;
    this.primaryOperand.innerHTML = 0;
  }

  evaluate() {
    let result;
    switch (this.operation) {
      case "*":
        result = parseFloat(this.secondNumber) * parseFloat(this.firstNumber);
        break;
      case "÷":
        result = parseFloat(this.secondNumber) / parseFloat(this.firstNumber);
        break;
      case "+":
        result = parseFloat(this.secondNumber) + parseFloat(this.firstNumber);
        break;
      case "-":
        result = parseFloat(this.secondNumber) - parseFloat(this.firstNumber);
        break;
      default:
        return;
    }

    this.clear();
    this.primaryOperand.innerHTML = displayNumber(result);

    return result;
  }
}
const NUMBER_FORMATTER = new Intl.NumberFormat("en");

function displayNumber(number) {
  const stringNumber = number.toString() || "";
  if (stringNumber === "") return "";
  const [integer, decimal] = stringNumber.split(".");
  const formattedInteger = NUMBER_FORMATTER.format(integer);
  if (decimal == null) return formattedInteger;
  return formattedInteger + "." + decimal;
}
