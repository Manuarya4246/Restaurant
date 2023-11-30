var num=0;
var arrimg=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]
function right(){
    num++;
    if(num>arrimg.length-1){
        num=0;
        document.querySelector("header").style.backgroundImage=`url(/html/${arrimg[num]})`
    }
    else{
        document.querySelector("header").style.backgroundImage=`url(/html/${arrimg[num]})`
    }
}


function left(){
    num--;
    if(num<0){
        num=arrimg.length-1;
        document.querySelector("header").style.backgroundImage=`url(/html/${arrimg[num]})`
    }
    else{
        document.querySelector("header").style.backgroundImage=`url(/html/${arrimg[num]})`
    }
}

function autoscroll(){
    num++;
    if(num>arrimg.length-1){
        num=0;
        document.querySelector("header").style.backgroundImage=`url(/html/${arrimg[num]})`
    }
    else{
        document.querySelector("header").style.backgroundImage=`url(/html/${arrimg[num]})`
    }
    setTimeout(autoscroll,3000)
}
autoscroll();


function statusind(){
    if(num==0){
        document.getElementById("status1").style.transform="scale(2)"
        document.getElementById("status1").style.backgroundColor="black"
        document.getElementById("status5").style.transform="scale(1)"
        document.getElementById("status5").style.backgroundColor="red"
        document.getElementById("status2").style.transform="scale(1)"
        document.getElementById("status2").style.backgroundColor="red"
        
    }
    else if(num==1){
        document.getElementById("status2").style.transform="scale(2)"
        document.getElementById("status2").style.backgroundColor="black"
        document.getElementById("status1").style.transform="scale(1)"
        document.getElementById("status1").style.backgroundColor="red"
        document.getElementById("status3").style.transform="scale(1)"
        document.getElementById("status3").style.backgroundColor="red"
    }
    else if(num==2){
        document.getElementById("status3").style.transform="scale(2)"
        document.getElementById("status3").style.backgroundColor="black"
        document.getElementById("status2").style.transform="scale(1)"
        document.getElementById("status2").style.backgroundColor="red"
        document.getElementById("status4").style.transform="scale(1)"
        document.getElementById("status4").style.backgroundColor="red"
    }
    else if(num==3){
        document.getElementById("status4").style.transform="scale(2)"
        document.getElementById("status4").style.backgroundColor="black"
        document.getElementById("status3").style.transform="scale(1)"
        document.getElementById("status3").style.backgroundColor="red"
        document.getElementById("status5").style.transform="scale(1)"
        document.getElementById("status5").style.backgroundColor="red"
    }
    else{
        document.getElementById("status5").style.transform="scale(2)"
        document.getElementById("status5").style.backgroundColor="black"
        document.getElementById("status4").style.transform="scale(1)"
        document.getElementById("status4").style.backgroundColor="red"
        document.getElementById("status1").style.transform="scale(1)"
        document.getElementById("status1").style.backgroundColor="red"
    }
    setTimeout(statusind,100)
}
statusind()
