let now_playing = document.querySelector('.playing');
let track_art = document.querySelector('.Art');
let track_name = document.querySelector('.TitleName');
let track_artist = document.querySelector('.SingerName');
let i=0;

let body = document.querySelector('body');
let playpause_btn = document.querySelector('.playpause-track');
let volume_slider=document.querySelector('.volume_slider')
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');
let curr_track = document.createElement('audio');
let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;
let c=0;
let first=0,colorOne=0,colorTwo=0;
var interval=0
let rotation=6;
const music_list = [
    {
        image:'1.jpg',
        name : 'Raataan Lambiyan',
        artist : 'Arijit Singh',
        music : 'music/Raataan Lambiyan.mp3'
    },
    {
        image:'2.jpg',
        name : 'Shayad',
        artist : 'Arijit singh',
        music : 'music/Shayad.mp3'
    },
    {
      
        image:'3.jpg',
        name : 'Wakhra Swag',
        artist : 'Baadshah',
        music : 'music/Wakhra Swag.mp3'
    },
    {
        
        image:'4.jpg',
        name : 'Lets Talk',
        artist : 'Amrinder Gill',
        music : 'music/Lets Talk.mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    track_art.style.backgroundImage = "url(" + music_list[track_index].image + ")";
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;
    curr_track.src = music_list[track_index].music;
    track_name.textContent=music_list[track_index].name;
    body.style.backgroundImage = '-moz-linear-gradient('+ first+ ', ' + colorOne + ', ' + colorTwo + ')';
    track_artist.textContent=music_list[track_index].artist;
    track_art
 

}

function playpauseTrack()
{
    
    if(i%2==0) 
    {   
      
      interval = setInterval(() => {

            track_art.style.transform  =`rotate(${rotation++}deg)`;
        }, 70);
    
        curr_track.play();
        
         playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
         i++;
    }
    else
    {   i++;
        clearInterval(interval);    
        curr_track.pause();
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
    }
}

function nextTrack()
{
    
    if(track_index<music_list.length-1)
    {
        rotation=1;
        track_index++;
        loadTrack(track_index)
        curr_track.play();
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
    }
    else
    {
        track_index=0;
        rotation=1;
        playpause_btn.innerHTML='<i class="fa fa-play-circle fa-5x"></i>';
        loadTrack(track_index);
        

    }
}

function prevTrack()
{
    if(track_index>0)
    {
        rotation=1;
        track_index--;
        loadTrack(track_index)
        curr_track.play();
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
    }
    

}


function setVolume(){
    curr_track.volume = volume_slider.value / 100;

    if(curr_track.volume===0.01)
    {
        console.log(curr_track.volume);
        curr_track.muted=true;
    }
    else
    {
        curr_track.muted=false;
    }
}

function repeatTrack()
{   rotation=1;
    loadTrack(track_index)
    curr_track.play();

}


function seekto()
{

}