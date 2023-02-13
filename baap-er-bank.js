document.getElementById('btn-submit').addEventListener('click',function(){


    const emailField=document.getElementById('user-email')
    const email= emailField.value;
    // console.log('btn clicked')

    const passwordField=document.getElementById('user-password')
    const password = passwordField.value;
    // console.log(email,password)
    if(email ==='aziz@gmail.com' && password ==='aziz'){
        window.location.href ='bank.html'
        }
    else{
       alert('your email or password is not correct')
        
    }
})
