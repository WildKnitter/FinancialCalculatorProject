"use strict";
//This scripts contains code to calculate mortgage monthly payments and total loan cost.
//Author:  Pam Belknap

function init() 
{
    const btnCalc = document.getElementById("calcMortgage");
    btnCalc.onclick = calcMortgage;
}

//ADD NUMBERS
function calcMortgage() 
{
    let princAmount = document.getElementById("principalAmount").value;
    princAmount = Number(princAmount);
    let intRate = document.getElementById("interestRate").value;
    intRate = Number(intRate);
    let loanLgth = document.getElementById("loanLength").value;
    loanLgth = Number(loanLgth);

    let intRateD = (intRate / 1200);

    let calcTotal = (princAmount * intRateD) / (1 - Math.pow((1 + intRateD), (-12 * loanLgth)))
    let addTotal = (princAmount * intRateD * (12 * loanLgth)) / (1 - Math.pow((1 + intRateD), (-12 * loanLgth)))

    const resultPymt = document.getElementById("answerPayment");
    resultPymt.value = calcTotal.toFixed(2);  //to put a value in an input, use value.

    const resultCost = document.getElementById("answerLoanCost");
    resultCost.value = addTotal.toFixed(2);  //to put a value in an input, use value.
}

window.onload = init;

