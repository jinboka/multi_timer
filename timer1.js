const form = document.querySelector(".form"),
start = form.querySelector(".submit"),
timerStop = document.querySelector(".stop"),
timer = document.querySelector(".timer"),
hour = form.querySelector(".hour"),
minute = form.querySelector(".minute"),
second = form.querySelector(".second"),
reset = document.querySelector(".reset");
const OVER_TIMER_CSS = document.querySelector(".overTimer");
const TITLE_INPUT= document.querySelector(".titleInput");
const stBT = document.querySelector(".stBT");
const title_LS = "title";
var intervalAudioPlay;
var foraudioInterval;
const AUDIO = new Audio();
AUDIO.src='1.mp3';
var audioStart;
var TIME_LS = "totalSec";
const SHOW = "showing";
const BLIND = "blind";
const OVERTIMER_st = "overTimerStart";
var TimeId;
const OVERTIME_LS = "overLs";
const COUNT_LS = "count_ls";
var audioArror;
var foraudioInterval;
var pousedAudio;
var time;

function audioPlay(){
 AUDIO.play();
}



function count(){
     var overTimeLs = JSON.parse(localStorage.getItem(OVERTIME_LS));
     var count_ls = JSON.parse(localStorage.getItem(COUNT_LS));
    if(time > 0){
       if(count_ls == true){
           time--;
            console.log(time);
           form.classList.add(BLIND);
           var excuteHour = Math.floor(time/3600);
           var excuteMinute = Math.floor((time-(excuteHour*3600))/60);
           var excuteSec = Math.floor(time-(excuteHour*3600)-(excuteMinute*60));
           timer.innerText = `${excuteHour <10 ? `0${excuteHour}`: `${excuteHour}`}:${excuteMinute <10 ? `0${excuteMinute}`: `${excuteMinute}`}:${excuteSec <10 ? `0${excuteSec}`: `${excuteSec}`}`;
       }
       
        
           
       }
     else{
       form.classList.remove(BLIND);
        hour.value=`0${0}`;
        minute.value=`0${0}`;
        second.value=`0${0}`;
        var overTimeLs = JSON.parse(localStorage.getItem(OVERTIME_LS));
        localStorage.removeItem(TIME_LS);
        if(overTimeLs == true){
            clearInterval(TimeId)
            handleOverTime()
           timer.classList.remove(SHOW);
           audioArror = setInterval(audioPlay,500);
            start.classList.add(BLIND);
          timerStop.classList.remove(SHOW);
           stBT.classList.remove(SHOW);
           OVER_TIMER_CSS.classList.add(OVERTIMER_st);
    
            document.querySelector(".h").classList.add(OVERTIMER_st);
            document.querySelector(".m").classList.add(OVERTIMER_st);
            document.querySelector(".s").classList.add(OVERTIMER_st);
        }
        
      
       
        }
}

function counting(){
    
    var excuteHour = Math.floor(time/3600);
    var excuteMinute = Math.floor((time-(excuteHour*3600))/60);
    var excuteSec = Math.floor(time-(excuteHour*3600)-(excuteMinute*60));
    timer.innerText = `${excuteHour <10 ? `0${excuteHour}`: `${excuteHour}`}:${excuteMinute <10 ? `0${excuteMinute}`: `${excuteMinute}`}:${excuteSec <10 ? `0${excuteSec}`: `${excuteSec}`}`;
    TimeId = setInterval(count,1000);
}

function saveTime(){ 
   
      timer.classList.add(SHOW);
      timerStop.classList.add(SHOW);
      reset.classList.add(SHOW);
      stBT.classList.remove(SHOW);

      var titleInput = TITLE_INPUT.value;
      localStorage.setItem(title_LS,titleInput);
      time =  Number(hour.value)*3600+ Number(minute.value*60,) +Number(second.value);
    
      

     if(time <=  0){
          alert("시간을 다시 작성해주세요.");
          timer.classList.remove(SHOW);
          timerStop.classList.remove(SHOW);
          reset.classList.remove(SHOW);
          
        }
        else{audioStart = setTimeout(audioPlay,time*1000);
        form.classList.add(BLIND);
        counting();
        localStorage.setItem(OVERTIME_LS,JSON.stringify(true));
        localStorage.setItem(COUNT_LS,JSON.stringify(true));

        }
        
      
        
}
      
    
     

function handleSotp(){
    stBT.classList.add(SHOW);
    clearTimeout(TimeId);
    clearTimeout(audioStart);
    timerStop.classList.remove(SHOW);
    AUDIO.pause();
    clearTimeout(foraudioInterval)
    clearInterval(pousedAudio);
    clearInterval(intervalAudioPlay);
    clearInterval(audioArror);
    
}
      
      

function handleHourDrag(){
hour.select();
}

function handleMinuteDrag(){
minute.select();
}  

function handledSecondDrag(){
 second.select();
}
function audioPause(){
  AUDIO.pause();
}
function handleReset(){
    clearTimeout(TimeId); 
    form.classList.remove(BLIND);
    timer.classList.remove(SHOW);
    stBT.classList.remove(SHOW);
    timerStop.classList.remove(SHOW);
    reset.classList.remove(SHOW);
    start.classList.remove(BLIND);
    OVER_TIMER_CSS.classList.remove(OVERTIMER_st);
    
      localStorage.removeItem(title_LS);
      localStorage.removeItem(COUNT_LS );

    
    clearTimeout(overTimeId);  
    clearTimeout(audioStart);
    clearInterval(intervalAudioPlay);
    clearTimeout(foraudioInterval);
    clearInterval(audioArror);
    clearInterval(pousedAudio);
    
    audioPause();
    
    localStorage.removeItem(TIME_LS);
    localStorage.removeItem(OVERTIME_LS);
    
    timer.innerHTML="00:00:00";
    
    overTimeStop();
    
    document.querySelector(".s").innerHTML ="00";
    document.querySelector(".m").innerHTML =  "00";
    document.querySelector(".h").innerHTML = "overtime00";
    document.querySelector(".h").classList.remove(OVERTIMER_st);
    document.querySelector(".m").classList.remove(OVERTIMER_st);
    document.querySelector(".s").classList.remove(OVERTIMER_st);
    hour.value=`0${0}`;
    minute.value=`0${0}`;
    second.value=`0${0}`;
  
  TITLE_INPUT.value ="";
  
}


function handleAudioInterval(){
 pousedAudio=setInterval(audioPlay,1000);
}
function handlestBT(){
  timerStop.classList.add(SHOW);
     TimeId = setInterval(count,1000);
    stBT.classList.toggle(SHOW);
    var forAudioStart = parseInt(localStorage.getItem(TIME_LS));
    audioStart = setTimeout(audioPlay,forAudioStart*1000+1000);
    foraudioInterval = setTimeout(handleAudioInterval,forAudioStart*1000+1000);
    console.log(forAudioStart);
}


function handleSumbit(event){
  event.preventDefault();
 
}

function handleTitleInput(){
  TITLE_INPUT.select();
}

function callingTitleInput(){
  var currentTitle = localStorage.getItem(title_LS);
  if(currentTitle !== null){
     TITLE_INPUT.value = currentTitle;
    }

 
}

function init(){
    
    form.addEventListener("submit", handleSumbit);
    start.addEventListener("click", saveTime);
    timerStop.addEventListener("click",handleSotp);
    hour.addEventListener("click", handleHourDrag);
    minute.addEventListener("click",handleMinuteDrag);
    second.addEventListener("click",handledSecondDrag);
    TITLE_INPUT.addEventListener("click",handleTitleInput);
    reset.addEventListener("click", handleReset);
    stBT.addEventListener("click",handlestBT);
    callingTitleInput();
    
}
init();

//overTime시작 js
var h = 0;
var m = 0;
var s = 0;
var overTimeId;



function startOverTime(){
if(s<59){
s++;
document.querySelector(".s").innerHTML =`${s < 10 ? `0${s}` :`${s}`}`;  
}
else{
s=0;
m++;
document.querySelector(".s").innerHTML = `${s < 10 ? `0${s}` :`${s}`}`;  
}
if(m<=59){
document.querySelector(".m").innerHTML = `${m < 10 ? `0${m}` :`${m}`}`;  
}
else{
m=0;
h++;
document.querySelector(".m").innerHTML = `${m < 10 ? `0${m}` :`${m}`}`;  
}
if( h < 1){
document.querySelector(".h").innerHTML = `overtime${h < 10 ? `0${h}` :`${h}`}`;
}
else{
overTimeStop();
document.querySelector(".h").innerHTML = "overtime01";

}

}

function handleOverTime(){
overTimeId = setInterval(startOverTime,1000);

}

function handleOverTimeReset(){
clearInterval(overTimeId);
}
function overTimeStop(){
handleOverTimeReset();
form.classList.remove(BLIND);

localStorage.removeItem(TIME_LS);
}




