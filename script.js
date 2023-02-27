
//Regular calculator

//Get the HTML Input Elements
let result = document.getElementById('result');//I am applying the DOM, Document Object Model allowing me to manipulate content under the Id=result, NOTE THAT i NEED TO HAVE THE INPUT IN HTML


function getResult(num) {//Take the 'num' parameter which represents a number or operator input by the user
  result.value += num;  //adding or appending a value to the variable, each time the user clicks a number or operator the += will append it to the current value
}

function clearResult() {
  result.value = '';
}

function calculate() {
  result.value = eval(result.value);//eval is used in JS to to evaluate inputs as mathematical expressions, other method is math.evaluate
}


document.getElementById("limitr-calculator").addEventListener('keydown', function(event) { /*1 with document.getElementById("limitr-calculator") I am limiting thekeyboard to this specific div; 2 document.addEventListener('keydown', function(event) { this line adds an event listener to the document object that listens to keydown event. 3. the second event is a function that will be triggered folloring the triggering of the event, containing info such as what key was pressed */ 
  if (/^\d$/.test(event.key)) {/*if establece la primera condicion, The .test() method is used to test whether a string matches a regular expression. In this case, it tests whether the event.key value, which represents the key that was pressed, matches the regular expression /^\d$/. If it does match, the condition inside the if statement evaluates to true. \d$/is a regular expression that matches any single digit (0-9) string that starts (^ or caret symbol) and ends ($) with a digit. So, this regular expression will match any string that contains only one digit.*/
    getResult(event.key); /*get the digits*/
  } else if (event.key === '.') {/*else if establece la segunda condicion. '.' is to retrieve the decimal point the fuction checks it.*/
/*  if (!result.value.includes('.')) { the ! is the negation operator, in the case there is no decimal point then the condicition inside the if statement is valued as true and the code inside the block is executed, if it is true the operator makes it false. The purpose of the function is to include decirmal points. note that includes:'.' result value includes only one decimal point in order to restrict users of typying more than one decimal point however this would not allow me use another number with decimal. */
      getResult(event.key);/*get the digit*/
    

  } else if (['+', '-', '*', '/', '%'].includes(event.key)) {/*This line checks if the key that was pressed is one of the arithmetic operators (+, -, *, /, %)*/
    getResult(event.key);

  } else if (event.key === 'Enter' || event.key === '=') {/* here I want to check if the equal sign or (||) the enter key was pressed*/
    calculate();

  } else if (event.key === 'Escape' || event.key === 'Delete') {/*aqui dejo que exista el evento de la techa escape o tecra supr para empezar de nuevo*/
    clearResult();

  } else if (event.key === 'Backspace') {
    result.value = result.value.slice(0, -1);
  }
});



// mortgage calculator
// Get the HTML input elements
const propertyValueInput = document.getElementById("property-value");
const downPaymentInput = document.getElementById("down-payment");
const loanAmountInput = document.getElementById("loan-amount");
const ltvInput = document.getElementById("ltv");



// Calculate and display the loan amount and loan-to-value ratio
function calculateLoanAmountAndLTV() {
  const propertyValue = propertyValueInput.value;
  const downPayment = downPaymentInput.value;

  // Calculate the loan amount by subtracting the down payment from the property value
  const loanAmount = propertyValue - downPayment;

  // Calculate the loan-to-value ratio by dividing the loan amount by the property value and multiplying by 100. tofixed(2) limits the number of digits after decimal point
  const ltv = (loanAmount / propertyValue * 100).toFixed(2); 

  // Display the loan amount and loan-to-value ratio in the appropriate HTML input elements
  loanAmountInput.value = loanAmount;
  ltvInput.value = ltv;
}

// Calculate and display the monthly payment
function calculateMonthlyPayment() {
  const propertyValue = propertyValueInput.value;
  const downPayment = downPaymentInput.value;

  // Calculate the loan amount by subtracting the down payment from the property value
  const loanAmount = propertyValue - downPayment;

  // Get the loan term in months, interest rate, and monthly interest rate from the HTML input elements
  const loanTermInMonths = document.getElementById("loan-term").value;
  const interestRate = document.getElementById("interest-rate").value;
  const monthlyInterestRate = interestRate / 100 / 12;

  // Calculate the discount factor using the loan term and monthly interest rate
  const totalPayments = loanTermInMonths;
  const discountFactor = ((1 + monthlyInterestRate) ** totalPayments - 1) / (monthlyInterestRate * (1 + monthlyInterestRate) ** totalPayments);

  // Calculate the monthly payment using the loan amount, discount factor (recap that the formula is different due to the monthly ^ instead of annual), and monthly interest rate
  const monthlyPayment = (loanAmount / discountFactor).toFixed(2);

  // Display the monthly payment in the appropriate HTML input element
  document.getElementById("monthly-payment").value = monthlyPayment;
}

// Attach event listeners to the HTML input elements to calculate the loan amount and loan-to-value ratio whenever the property value or down payment is changed
propertyValueInput.addEventListener("input", calculateLoanAmountAndLTV);
downPaymentInput.addEventListener("input", calculateLoanAmountAndLTV);

// Attach an event listener to the "Calculate Monthly Payment" button to calculate and display the monthly payment when clicked
document.getElementById("calculate-btn").addEventListener("click", calculateMonthlyPayment);
