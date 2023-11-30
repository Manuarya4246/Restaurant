var allimg=document.images
for(i=1;i<=allimg.length-1;i++){
        allimg[i].src=`/html/assets/images/${i}.jpg`
        allimg[i].addEventListener("click",function(){
            document.getElementById("bigwindow").style.display="flex"
            document.getElementById("bigimage").style.backgroundImage=`URL(${this.src})`
        })
}

function bigwindowclose(){
    document.getElementById("bigwindow").style.display="none"
}