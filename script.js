import Calculator from "./calculator.js";

const primaryOperand = document.querySelector("[data-primary-operand]");
const secondaryOperand = document.querySelector("[data-secondary-operand]");
const operation = document.querySelector("[data-operation]");

const calculator = new Calculator(
  primaryOperand,
  secondaryOperand,
  operation,
  0,
  0
);

document.addEventListener("click", e => {
  if (e.target.matches("[data-all-clear]")) {
    calculator.clear();
  }
  if (e.target.matches("[data-number]")) {
    calculator.addDigit(e.target.textContent);
  }
  if (e.target.matches("[data-delete]")) {
    calculator.removeDigit();
  }
  if (e.target.matches("[data-operation]")) {
    calculator.chooseOperation(e.target.textContent);
  }
  if (e.target.matches("[data-equals]")) {
    calculator.evaluate();
  }
});
