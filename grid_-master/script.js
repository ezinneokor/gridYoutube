const cover = (function(){

const asideIcon = document.querySelector(".aside-icon")
const mainAside = document.querySelector(".main-aside")
const asideHidden = document.querySelector(".aside-hidden")
const mainBarIcon = document.querySelector(".main-bar-icon")
const container = document.querySelector(".container")
const mainLogo = document.querySelector(".main-logo")
const mediaVideo = document.querySelectorAll("#media-video")


    mainBarIcon.onclick =function(){
    asideHidden.style.display = "block"
    container.style.gridTemplateColumns = "2fr 8fr"
    mainLogo.style.display = "none"
    asideHidden.style.transform = "translateX(0%)"
    asideHidden.style.transition = "all 2s"
}

    asideIcon.onclick = function(){
    asideHidden.style.display = "none"
    container.style.gridTemplateColumns = ".5fr 9fr"
    mainLogo.style.display = "block"
}

//Play video when the mouse is hovered on the target video
   
for(let i =0; i < mediaVideo.length; i++){

    mediaVideo[i].addEventListener("mouseover", videoFunc)      
}


function videoFunc(){
    
 this.play()
}



//Pause the video when the mouse leaves the target video
for(let i =0; i < mediaVideo.length; i++){

    mediaVideo[i].addEventListener("mouseleave", leaveFunc)      
}


function leaveFunc(){
    
  this.pause()
}



}())