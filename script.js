console.log("welcome to spotify clone")
let songIndex = 0 
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myPrograssBar = document.getElementById('myProgressBar'); 
let gif= document.getElementById('gif'); 
let songs=[
    {songName:"Salam-e-ishq",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salam-e-ishq",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salam-e-ishq",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salam-e-ishq",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
]

// handle play pouse click 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle'); 
        gif.style.opacity =1 ;
    }else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle'); 
        gif.style.opacity =0 ;
    }
})
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myPrograssBar.addEventListener('change',()=>{
    audioElement.currentTime = myPrograssBar.value * audioElement.duration /100 ; 
})