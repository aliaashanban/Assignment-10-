

var logEmailInput=document.getElementById('logEmailInput');
var logPasswordInput=document.getElementById('logPasswordInput');
var signNameInput=document.getElementById('signNameInput');
var signEmailInput=document.getElementById('signEmailInput');
var signPasswordInput=document.getElementById('signPasswordInput');
var signUpBtn=document.getElementById('signUpBtn');
var logInBtn=document.getElementById('logInBtn');
var logOutBtn=document.getElementById('logOutBtn');
var signUpLink=document.getElementById('signUpLink');
var logInForm=document.getElementById('logInForm');
var signUpForm=document.getElementById('signUpForm');
var welcome=document.getElementById('welcome');
var success=document.getElementById('success');
var incorrect=document.getElementById('incorrect');


var signInputList;
if(localStorage.getItem('users')!=null){
    signInputList=JSON.parse(localStorage.getItem('users'))
    console.log(signInputList);
}else{
    signInputList=[];
}

function existEmail(){
    for(var i=0;i<signInputList.length;i++){
        if (signInputList[i].email.toLowerCase()==signEmailInput.value.toLowerCase()){
            return false
        }
    }
}

function addSignUpInputs(){
    var signUpInputs={
        name:signNameInput.value,
        email:signEmailInput.value,
        password:signPasswordInput.value
    }
    if(signInputList.length==0){
        signInputList.push(signUpInputs);
        localStorage.setItem("users",JSON.stringify(signInputList));
        success.classList.remove('d-none');
        return true;
    }
    if(existEmail()==false){
        exist.classList.remove('d-none');
        success.classList.add('d-none');
    }
    else{
        signInputList.push(signUpInputs);
        localStorage.setItem('users',JSON.stringify(signInputList));
        exist.classList.add('d-none');
        success.classList.remove('d-none');

       
    }
    
    console.log(signInputList);
}

function addLogInInputs(){
    var email=logEmailInput.value;
    var password=logPasswordInput.value;
for(var i=0;i<signInputList.length;i++){
    if(signInputList[i].email.toLowerCase()==email.toLowerCase()&&signInputList[i].password.toLowerCase()==password.toLowerCase()){
        localStorage.setItem('welcomeUser',signInputList[i].name)
        if(signInputList[i].email.toLowerCase()==email.toLowerCase()&&signInputList[i].password.toLowerCase()==password.toLowerCase()){
            welcome.classList.remove('d-none');
            incorrect.classList.add('d-none');
        }
        else{

            incorrect.classList.remove('d-none');
            welcome.classList.add('d-none');

        }
    }
    else{
        incorrect.classList.remove('d-none');

 }
}
}


function clearSign(){
    signNameInput.value=null;
    signEmailInput.value=null;
    signPasswordInput.value=null;
}
function clearLog(){
    logEmailInput.value=null;
    logPasswordInput.value=null;
}
signUpLink.addEventListener('click',function(){
    signUpForm.classList.remove('d-none');
    logInForm.classList.add('d-none');
    welcome.classList.add('d-none');
});
logInBtn.addEventListener('click',function(){
    
    if(logEmailInput.value==="" &&logPasswordInput.value==""){
        logRequired.classList.remove('d-none');
    }
   
    else{
        logInForm.classList.add('d-none');
        signUpForm.classList.add('d-none');
        welcome.classList.remove('d-none');
        logRequired.classList.add('d-none');
        incorrect.classList.add('d-none');
        addLogInInputs()
        clearLog();
       

    }
});
signUpBtn.addEventListener('click',function(){
    if(signNameInput.value==""){
        signRequired.classList.remove('d-none');
    }
    else if(signEmailInput.value==""){
        signRequired.classList.remove('d-none');
    }
    else if(signPasswordInput.value==""){
        signRequired.classList.remove('d-none');
    }
    else{
    signUpForm.classList.remove('d-none');
    logInForm.classList.add('d-none');
    welcome.classList.add('d-none');
    success.classList.remove('d-none');
    signRequired.classList.add('d-none');
    exist.classList.add('d-none');
    addSignUpInputs()
    clearSign();
    
    }
});

signInLink.addEventListener('click',function(){
    logInForm.classList.remove('d-none');
    signUpForm.classList.add('d-none');
    welcome.classList.add('d-none');
});
logOutBtn.addEventListener('click',function(){
    logInForm.classList.remove('d-none');
    signUpForm.classList.add('d-none');
    welcome.classList.add('d-none');
    remove();
})
var username=JSON.parse(localStorage.getItem('welcomeUser'));
if(!username){

    document.getElementById('username').innerHTML=`Welcome....`;
}

function remove(){
    localStorage.removeItem('welcomeUser')
}

