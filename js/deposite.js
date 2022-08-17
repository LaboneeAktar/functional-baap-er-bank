
document.getElementById('btn-deposite').addEventListener('click', function () {
    const newDepositeAmount = getInputFieldValueById('deposite-field');

    //Get previous deposite total by id
    const previousDepositeTotal = getElementValueById('deposite-total');

    //calculate new deposite total
    const newDepositeTotal = previousDepositeTotal + newDepositeAmount;

    //set deposite total value
    setElementValueById('deposite-total', newDepositeTotal);

    // get previous balance by using the function
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;

    setElementValueById('balance-total', newBalanceTotal);

})