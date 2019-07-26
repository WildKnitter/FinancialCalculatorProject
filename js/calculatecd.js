"use strict";
//This scripts contains code to calculate the future value of an initial investment, 
// assuming compound interest.
//Author:  Pam Belknap

function init() 
{
    const btnCalc = document.getElementById("calcCd");
    btnCalc.onclick = calcCd;
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

    let intCdRateD = (intCdRate/100);
     
    let futureValueTotal = depAmount * (Math.pow(1 + intCdRateD,loanCdLgth));
    let intEarnedTotal = futureValueTotal - depAmount;

    const resultFV = document.getElementById("answerFV");
    resultFV.value = futureValueTotal.toFixed(2);  //to put a value in an input, use value.

    const resultIntEarn = document.getElementById("answerIntEarn");
    resultIntEarn.value = intEarnedTotal.toFixed(2);  //to put a value in an input, use value.
}

window.onload = init;

