var circle = document.getElementById("circle");
var upbtn = document.getElementById("upbtn");
var downbtn = document.getElementById("downbtn");

var rotateValue = circle.style.transform;
var rotateSum;

upbtn.onclick = function() {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
downbtn.onclick = function() {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}


// Sec-2 video

const video = document.querySelector(".video");
const btn = document.querySelector(".btn i");
const bar = document.querySelector(".video-bar");


// const playPause = () =>{
//     if (video.paused) {
//         video.play()
//         btn.className ='far fa-pause-circle'
//     }else{
//         video.pause();
//         btn.className='fas fa-play-circle';
//     }
// }

// btn.addEventListener('click',() =>{
//     playPause()
// })

// video.addEventListener('timeupdate', () =>{
//     const barWidth = video.currentTime/video.duration
//     bar.style.width = `${barWidth*100}%`
//     if(video.ended){
//         btn.className="far fa-play-circle";
//     }
// })


video.addEventListener("mouseover", function (e) {
    video.play();
 })

 /* Applying the mouse out event to pause the video */
 video.addEventListener("mouseout", function (e) {
    video.pause();
 });

var swiper = new Swiper('.swiper-container', {

    direction: 'vertical',
    mousewheel: true,
    slidesPerView: 1,
    freeMode: true,
    freeModeSticky: true,
  });


var menu = document.getElementById('menu-icon');
var items = document.getElementById('navlink');

items.style.top = "-360px";

menu.onclick = () => {
    if(items.style.top == "-360px"){
        items.style.top = "0";
    }
    else{
        items.style.top = "-360px" ;
    }
}