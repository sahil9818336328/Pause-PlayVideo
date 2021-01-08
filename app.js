const preloader = document.querySelector('.preloader');
const switchBtn = document.querySelector('.switch-btn');
const switche = document.querySelector('.switch');
const video = document.querySelector('.video-container');

window.addEventListener('load',function(){
    preloader.classList.add('hide-preloader');
})

switchBtn.addEventListener('click',function(){
    if(!switchBtn.classList.contains('slide')){
        switchBtn.classList.add('slide');
        video.pause();
    }else{
        switchBtn.classList.remove('slide');
        video.play();
    }
})