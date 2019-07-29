"use strict";
/*This scripts contains code to calculate the present value of an annuity, with consideration as 
* to payout amout desired, interest rate, and the years to pay out the annuity.
* @param payoutAmount (number) - the desired annual payout amount
* @param interestAnnuityRate (number) - the annuity's interest rate
* @param payoutYears (number) - the length of time in years for the annuity to pay out.
Author:  Pam Belknap
*/

function init() 
{
    const btnCalcAnn = document.getElementById("calcAnnuity");
    btnCalcAnn.onclick = calcAnnuity;
    const btnReset = document.getElementById("resetBtn");
    btnReset.onclick = resetBtn;
}

//DETERMINE PRESENT VALUE OF AN ANNUITY
function calcAnnuity() 
{
    let payAmount = document.getElementById("payoutAmount").value;
    payAmount = Number(payAmount);
    let intAnnRate = document.getElementById("interestAnnuityRate").value;
    intAnnRate = Number(intAnnRate);
    let payYears = document.getElementById("payoutYears").value;
    payYears = Number(payYears);
    let intAnnRateD = (intAnnRate / 100);

    let futureValueTotal = payAmount * (Math.pow(1 + intAnnRateD, payYears) - 1) / (Math.pow(1 + intAnnRateD, payYears) * intAnnRateD);

    const resultAnswer = document.getElementById("answerTotal");
    resultAnswer.value = futureValueTotal.toFixed(2);
}

function resetBtn() 
{
    document.getElementById("resetBtn").reset();
}

window.onload = init;

