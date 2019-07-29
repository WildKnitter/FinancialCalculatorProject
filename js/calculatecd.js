"use strict";
//This scripts contains code to calculate the future value of an initial investment, 
// assuming compound interest.
//Author:  Pam Belknap

/*This scripts contains code to calculate the future value of an initial investment, 
* assuming compound interest.
* @param depAmount (number) - the deposit amount
* @param intCdRate (number) - the CD's annual interest rate
* @param loanCdLgth (number) - the length of time in years the CD is held.
Author:  Pam Belknap
*/

function init() 
{
    const btnCalc = document.getElementById("calcCd");
    btnCalc.onclick = calcCd;
    const btnReset = document.getElementById("resetBtn");
    btnReset.onclick = resetBtn;
}

//DETERMINE FUTURE VALUE AND TOTAL EARNED INTEREST
function calcCd() 
{
    let depAmount = document.getElementById("depositAmount").value;
    depAmount = Number(depAmount);
    let intCdRate = document.getElementById("interestCdRate").value;
    intCdRate = Number(intCdRate);
    let loanCdLgth = document.getElementById("loanCdLength").value;
    loanCdLgth = Number(loanCdLgth);

    let intCdRateD = (intCdRate/1200);
     
    let futureValueTotal = depAmount * (Math.pow(1 + intCdRateD,(loanCdLgth*12)));
    let intEarnedTotal = futureValueTotal - depAmount;
    
    if (depAmount < 0) 
    {
        const errorMsg = document.getElementById("errorMsg");
        errorMsg.innerHTML = "One or more of your inputs is a negative number!";
    }
    else
    {
        const errorMsg = document.getElementById("errorMsg");
        errorMsg.innerHTML = " ";
        
    const resultFV = document.getElementById("answerFV");
    resultFV.value = futureValueTotal.toFixed(2);  

    const resultIntEarn = document.getElementById("answerIntEarn");
    resultIntEarn.value = intEarnedTotal.toFixed(2);  
    }
}

function resetBtn() 
{
    document.getElementById("resetBtn").reset();
}

window.onload = init;

