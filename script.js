console.log("welcome")
// initialize variable
let songIndex=0;
let audioElement = new Audio('E:/Spotify clone website/songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressbar=document.getElementById('myProgressbar');
let gif =document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"I need you",filePath:"E:/Spotify clone website/songs/1.mp3",coverPath:"E:/Spotify clone website/covers/1.jpg"},
    {songName:"fire",filePath:"E:/Spotify clone website/songs/2.mp3",coverPath:"E:/Spotify clone website/covers/2.jpg"},
    {songName:"Dynamite",filePath:"E:/Spotify clone website/songs/3.mp3",coverPath:"E:/Spotify clone website/covers/3.jpg"},
    {songName:"Life goes on",filePath:"E:/Spotify clone website/songs/4.mp3",coverPath:"E:/Spotify clone website/covers/4.jpg"},
    {songName:"Run BTS",filePath:"E:/Spotify clone website/songs/5.mp3",coverPath:"E:/Spotify clone website/covers/5.jpg"},
    {songName:"Europhoia",filePath:"E:/Spotify clone website/songs/6.mp3",coverPath:"E:/Spotify clone website/covers/6.jpg"},
    {songName:"Dreamers",filePath:"E:/Spotify clone website/songs/7.mp3",coverPath:"E:/Spotify clone website/covers/7.jpg"},
    {songName:"Baby",filePath:"E:/Spotify clone website/songs/8.mp3",coverPath:"E:/Spotify clone website/covers/8.jpg"},
    {songName:"DNA",filePath:"E:/Spotify clone website/songs/9.mp3",coverPath:"E:/Spotify clone website/covers/9.jpg"},
    {songName:"Permission to dance",filePath:"E:/Spotify clone website/songs/10.mp3",coverPath:"E:/Spotify clone website/covers/10.jpg"},

    
]
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText =songs[i].songName;

})
//Handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
   
    }
    else
    {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

// listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
  progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
  console.log(progress);
     myProgressbar.value=progress;

})

myProgressbar.addEventListener('change',()=>
{
    audioElement.currentTime=myProgressbar.value * audioElement.duration/100;
    

}) 
const makeAllPlays=()=>{
      
      Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        
      })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
     //console.log(e.target);
     makeAllPlays();
     songIndex= parseInt(e.target.id);
     e.target.classList.remove('fa-play-circle');
     e.target.classList.add('fa-pause-circle');
     masterSongName.innerText= songs[songIndex].songName;
     audioElement.src=`E:/Spotify clone website/songs/${songIndex+1}.mp3`;
     audioElement.currentTime=0;
     audioElement.play();
     gif.style.opacity=1;
     masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
   })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`E:/Spotify clone website/songs/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`E:/Spotify clone website/songs/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    
})
