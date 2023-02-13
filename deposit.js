
// -deposit

document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field')
    const newDepositTotalString= depositField.value;
    const newDepositTotal = parseFloat(newDepositTotalString)


    const depositAmountElement = document.getElementById('deposit-amount')
    const previousDepositTotalString = depositAmountElement.innerText;
    const previousDepositTotal =parseFloat(previousDepositTotalString)
    // document.getElementById('deposit-amount').innerText = depositAmount;
    // console.log(depositAmount)
    depositField.value ='';
    
    const currentDepositTotal =previousDepositTotal + newDepositTotal;
    // newDepositTotal.innerText =currentDepositTotal
    depositAmountElement.innerText =currentDepositTotal;
    const totalBalanceElement =document.getElementById('total-balance')
    const previousTotalBalanceString = totalBalanceElement.innerText
    const previousTotalBalance = parseFloat(previousTotalBalanceString) 
    const currentTotalBalance = previousTotalBalance + currentDepositTotal
totalBalanceElement.innerText =currentTotalBalance;
    // console.log(typeof previousTotalBalance)
})