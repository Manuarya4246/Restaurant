var allinp=document.querySelectorAll("input")
console.log(allinp)
function storedata(){
    var fname=allinp[0].value
    var lname=allinp[1].value
    var email=allinp[2].value
    var phnnumber=allinp[3].value
    var password=allinp[4].value
    var address=document.querySelector("textarea").value
    var landmark=allinp[6].value
    var pincode=allinp[7].value
    var city=document.querySelector("select").value

    localStorage.setItem('Fname',fname)
    localStorage.setItem('Lname',lname)
    localStorage.setItem('Email',email)
    localStorage.setItem('Phnnumber',phnnumber)
    localStorage.setItem('Address',address)
    localStorage.setItem('Landmark',landmark)
    localStorage.setItem('Pincode',pincode)
    localStorage.setItem('City',city)
    localStorage.setItem('Password',password)

    open("loginpage.html")
}