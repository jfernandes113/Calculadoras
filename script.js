let result = document.getElementById('result');


function getResult(num) {
  result.value += num;
}

function clearResult() {
  result.value = '';
}

function calculate() {
  result.value = eval(result.value);
}


document.addEventListener('keydown', function(event) {
  if (/^\d$/.test(event.key)) {
    getResult(event.key);
  } else if (event.key === '.') {
    if (!result.value.includes('.')) {
      getResult(event.key);
    }

  } else if (['+', '-', '*', '/', '%'].includes(event.key)) {
    getResult(event.key);

  } else if (event.key === 'Enter' || event.key === '=') {
    calculate();

  } else if (event.key === 'Escape' || event.key === 'Delete') {
    clearResult();

  } else if (event.key === 'Backspace') {
    result.value = result.value.slice(0, -1);
  }
});


// Mortgage Calculator
// Mortgage Calculator

// Get HTML elements
let propertyValue = document.getElementById('property-value');
let downPayment = document.getElementById('down-payment');
let loanAmount = document.getElementById('loan-amount');
let interestRate = document.getElementById('interest-rate');
let loanTerm = document.getElementById('loan-term');
let calculateButton = document.getElementById('calculate-button');
let displayScreen = document.getElementById('display-screen');


// Calculate loan amount
function calculateLoanAmount() {
  let pv = parseFloat(propertyValue.value);
  let dp = parseFloat(downPayment.value);
  let la = pv - dp;
  loanAmount.value = la.toFixed(2);
}
function calculateMonthlyPayment() {
  let la = parseFloat(loanAmount.value);
  let ir = parseFloat(interestRate.value) / 1200;
  let n = parseFloat(loanTerm.value) * 12;
  let mp = la * ir * Math.pow(1 + ir, n) / (Math.pow(1 + ir, n) - 1);
  displayScreen.innerHTML = "Monthly P&amp;I Payment: $" + mp.toFixed(2);
}

calculateButton.addEventListener('click', function() {
  calculateLoanAmount();
  calculateMonthlyPayment();
});

propertyValue.addEventListener('input', function() {
  calculateLoanAmount();
});

downPayment.addEventListener('input', function() {
  calculateLoanAmount();
});

interestRate.addEventListener('input', function() {
  calculateMonthlyPayment();
});

loanTerm.addEventListener('input', function() {
  calculateMonthlyPayment();
});

/*

propertyValue.addEventListener('input', function() {
  calculateLoanAmount();
});
calculateButton.addEventListener('click', function() {
  calculateLoanAmount();
  calculateMonthlyPayment();
});

/*
function loanAmount.value(propertyValue, downPayment) {
  return propertyValue - downPayment;
}

// Calculate monthly payment
// Calculate monthly payment
/*
function calculateMonthlyPayment() {
  let la = parseFloat(loanAmount.value);
  let ir = parseFloat(interestRate.value) / 1200; // monthly interest rate
  let n = parseFloat(loanTerm.value) * 12; // loan term in months
  let mp = la * ir * Math.pow(1 + ir, n) / (Math.pow(1 + ir, n) - 1); // monthly payment
  displayScreen.innerHTML = "Monthly P&amp;I Payment: $" + mp.toFixed(2);
}
/*

// Add event listeners
calculateButton.addEventListener('click', function() {
  calculateLoanAmount();
  calculateMonthlyPayment();
});

propertyValue.addEventListener('input', function() {
  calculateLoanAmount();
});

downPayment.addEventListener('input', function() {
  calculateLoanAmount();
});

interestRate.addEventListener('input', function() {
  calculateMonthlyPayment();
});

loanTerm.addEventListener('input', function() {
  calculateMonthlyPayment();
});

displayScreen.innerHTML = "Monthly P&I Payment: $" + mp.toFixed(2);
displayScreen.innerHTML = "Monthly P&amp;I Payment: $" + mp.toFixed(2)*/
