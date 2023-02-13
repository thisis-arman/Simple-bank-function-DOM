/* document.getElementById('btn-withdraw').addEventListener('click',function(){
const withdrawField= document.getElementById('withdraw-field')
const newWithdrawTotalString =  withdrawField.value;
const newWithdrawTotal = parseFloat(newWithdrawTotalString);
// console.log(typ newWithdrawTotal);


const withdrawAmountElement =document.getElementById('withdraw-amount')
const previousWithdrawAmmountString = withdrawAmountElement.innerText;

const  previousWithdrawAmmount =parseFloat(previousWithdrawAmmountString)


const currentTotalWithdraw = newWithdrawTotal + previousWithdrawAmmount
// console.log(typeof currentTotalWithdraw)
withdrawAmountElement.innerText=currentTotalWithdraw;

}) */


// -withdraw

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field')
    const newwithdrawTotalString= withdrawField.value;
    const newwithdrawTotal = parseFloat(newwithdrawTotalString)


    const withdrawAmountElement = document.getElementById('withdraw-amount')
    const previouswithdrawTotalString = withdrawAmountElement.innerText;
    const previouswithdrawTotal =parseFloat(previouswithdrawTotalString)
    // document.getElementById('withdraw-amount').innerText = withdrawAmount;
    // console.log(withdrawAmount)
    withdrawField.value ='';
    
    const currentwithdrawTotal =previouswithdrawTotal + newwithdrawTotal;
    // newwithdrawTotal.innerText =currentwithdrawTotal
    withdrawAmountElement.innerText =currentwithdrawTotal;
    const totalBalanceElement =document.getElementById('total-balance')
    const previousTotalBalanceString = totalBalanceElement.innerText
    const previousTotalBalance = parseFloat(previousTotalBalanceString) 
    const currentTotalBalance = previousTotalBalance - currentwithdrawTotal
totalBalanceElement.innerText =currentTotalBalance;
    // console.log(typeof previousTotalBalance)
})