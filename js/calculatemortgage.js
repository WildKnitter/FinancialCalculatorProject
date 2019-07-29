"use strict";
/*This scripts contains code to calculate mortgage monthly payments and total loan cost.
* @param principalAmount (number) - the principal amount
* @param interestRate (number) - the interest rate
* @param loanLength (number) - the length of time for the loan in years
Author:  Pam Belknap
*/

function init() 
{
    const btnCalc = document.getElementById("calcMortgage");
    btnCalc.onclick = calcMortgage;
    const btnReset = document.getElementById("resetBtn");
    btnReset.onclick = resetBtn;
}

//CALCULATE MONTHLY MORTGAGE AND TOTAL LOAN COST
function calcMortgage() 
{
    let princAmount = document.getElementById("principalAmount").value;
    princAmount = Number(princAmount);
    let intRate = document.getElementById("interestRate").value;
    intRate = Number(intRate);
    let loanLgth = document.getElementById("loanLength").value;
    loanLgth = Number(loanLgth);

    let intRateD = (intRate / 1200);

    let calcTotal = (princAmount * intRateD) / (1 - Math.pow((1 + intRateD), (-12 * loanLgth)));
    let addTotal = (princAmount * intRateD * (12 * loanLgth)) / (1 - Math.pow((1 + intRateD), (-12 * loanLgth)));

    const resultPymt = document.getElementById("answerPayment");
    resultPymt.value = calcTotal.toFixed(2);  

    const resultCost = document.getElementById("answerLoanCost");
    resultCost.value = addTotal.toFixed(2);  
}

function resetBtn()
{
   document.getElementById("resetBtn").reset();
}

window.onload = init;


    
