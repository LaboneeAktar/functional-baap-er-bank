/*
1. Add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getElementValueById funtion
4. calculate new withdraw total and set the value
4.5 set new withdraw total by using setElementValueById function
5. get previous total balance toatal by using getElementValueById function
6. calculate new balance total
7. set balance total using setElementValueById function
*/

document.getElementById('btn-withdraw').addEventListener('click', function () {

    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getElementValueById('withdraw-total');

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setElementValueById('withdraw-total', newWithdrawTotal);

    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setElementValueById('balance-total', newBalanceTotal);
})