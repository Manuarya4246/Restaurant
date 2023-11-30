var allinp=document.querySelectorAll("input")
console.log(allinp)
function checkdata(){
    var email=allinp[0].value
    var password=allinp[1].value

    var useremail=localStorage.getItem('Email')
    var userpassword=localStorage.getItem('Password')
    if(useremail==email&&userpassword==password){
        open("home.html")
    }
    else{
        document.getElementById("LoginButton").style.backgroundColor="red"
        document.getElementById("thumbsdown").style.rotate="180deg"
    }
}