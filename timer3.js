const form3 = document.querySelector(".form3"),
start3 = form3.querySelector(".submit3"),
timerStop3 = document.querySelector(".stop3"),
timer3 = document.querySelector(".timer3"),
hour3 = form3.querySelector(".hour3"),
minute3 = form3.querySelector(".minute3"),
second3 = form3.querySelector(".second3"),
reset3 = document.querySelector(".reset3");
const OVER_TIMER_CSS3 = document.querySelector(".overTimer3");
const TITLE_INPUT3= document.querySelector(".titleInput3");
const stBT3 = document.querySelector(".stBT3");
const title_LS3 = "title3";
var intervalAudioPlay3;
var foraudioInterval3;
const AUDIO3 = new Audio();
AUDIO3.src='1.mp3';
var audioStart3;
var TIME_LS3 = "totalSec3";
const SHOW3 = "showing";
const BLIND3 = "blind";
const OVERTIMER_st3 = "overTimerStart3";
var TimeId3;
const OVERTIME_LS3 = "overLs3";
const COUNT_LS3 = "count_ls3";
const timeSecLS3 = "timeSecLS3"
var audioArror3;
var foraudioInterval3;
var pousedAudio3;
var time3;

function audioPlay3(){
 AUDIO3.play();
}



function count3(){
     var overTimeLs3 = JSON.parse(localStorage.getItem(OVERTIME_LS3));
     var count_ls3 = JSON.parse(localStorage.getItem(COUNT_LS3));
    if(time3 > 0){
       if(count_ls3 == true){
           time3--;
           localStorage.setItem(timeSecLS3,time3);
            console.log(time3);
           form3.classList.add(BLIND3);
           var excutehour3 = Math.floor(time3/3600);
           var excuteMinute3 = Math.floor((time3-(excutehour3*3600))/60);
           var excuteSec3 = Math.floor(time3-(excutehour3*3600)-(excuteMinute3*60));
           timer3.innerText = `${excutehour3 <10 ? `0${excutehour3}`: `${excutehour3}`}:${excuteMinute3 <10 ? `0${excuteMinute3}`: `${excuteMinute3}`}:${excuteSec3 <10 ? `0${excuteSec3}`: `${excuteSec3}`}`;
       }
       
        
           
       }
     else{
       form3.classList.remove(BLIND3);
        hour3.value=`0${0}`;
        minute3.value=`0${0}`;
        second3.value=`0${0}`;
        var overTimeLs3 = JSON.parse(localStorage.getItem(OVERTIME_LS3));
        localStorage.removeItem(TIME_LS3);
        if(overTimeLs3 == true){
            clearInterval(TimeId3)
            handleOverTime3()
           timer3.classList.remove(SHOW3);
           audioArror3 = setInterval(audioPlay3,500);
            start3.classList.add(BLIND3);
          timerStop3.classList.remove(SHOW3);
           stBT3.classList.remove(SHOW3);
           OVER_TIMER_CSS3.classList.add(OVERTIMER_st3);
    
            document.querySelector(".h3").classList.add(OVERTIMER_st3);
            document.querySelector(".m3").classList.add(OVERTIMER_st3);
            document.querySelector(".s3").classList.add(OVERTIMER_st3);
        }
        
      
       
        }
}

function counting3(){
    
    var excutehour3 = Math.floor(time3/3600);
    var excuteMinute3 = Math.floor((time3-(excutehour3*3600))/60);
    var excuteSec3 = Math.floor(time3-(excutehour3*3600)-(excuteMinute3*60));
    timer3.innerText = `${excutehour3 <10 ? `0${excutehour3}`: `${excutehour3}`}:${excuteMinute3 <10 ? `0${excuteMinute3}`: `${excuteMinute3}`}:${excuteSec3 <10 ? `0${excuteSec3}`: `${excuteSec3}`}`;
    TimeId3 = setInterval(count3,1000);
}

function saveTime3(){ 
   
      timer3.classList.add(SHOW3);
      timerStop3.classList.add(SHOW3);
      reset3.classList.add(SHOW3);
      stBT3.classList.remove(SHOW3);

      var titleInput3 = TITLE_INPUT3.value;
      localStorage.setItem(title_LS3,titleInput3);
      time3 =  Number(hour3.value)*3600+ Number(minute3.value*60,) +Number(second3.value);
    
      

     if(time3 <=  0){
          alert("시간을 다시 작성해주세요.");
          timer3.classList.remove(SHOW3);
          timerStop3.classList.remove(SHOW3);
          reset3.classList.remove(SHOW3);
          
        }
        else{audioStart3 = setTimeout(audioPlay3,time3*1000);
        form3.classList.add(BLIND3);
        counting3();
        localStorage.setItem(OVERTIME_LS3,JSON.stringify(true));
        localStorage.setItem(COUNT_LS3,JSON.stringify(true));

        }
        
      
        
}
      
    
     

function handleStop3(){
    stBT3.classList.add(SHOW3);
    clearTimeout(TimeId3);
    clearTimeout(audioStart3);
    timerStop3.classList.remove(SHOW3);
    AUDIO3.pause();
    clearTimeout(foraudioInterval3)
    clearInterval(pousedAudio3);
    clearInterval(intervalAudioPlay3);
    clearInterval(audioArror3);
    
}
      
      

function handleHourDrag3(){
hour3.select();
}

function handleMinuteDrag3(){
minute3.select();
}  

function handledSecondDrag3(){
 second3.select();
}
function audioPause3(){
  AUDIO3.pause();
}
function handleReset3(){
    clearTimeout(TimeId3); 
    form3.classList.remove(BLIND3);
    timer3.classList.remove(SHOW3);
    stBT3.classList.remove(SHOW3);
    timerStop3.classList.remove(SHOW3);
    reset3.classList.remove(SHOW3);
    start3.classList.remove(BLIND3);
    OVER_TIMER_CSS3.classList.remove(OVERTIMER_st3);
    
      localStorage.removeItem(title_LS3);
      localStorage.removeItem(COUNT_LS3);

    
    clearTimeout(overTimeId3);  
    clearTimeout(audioStart3);
    clearInterval(intervalAudioPlay3);
    clearTimeout(foraudioInterval3);
    clearInterval(audioArror3);
    clearInterval(pousedAudio3);
    
    audioPause3();
    
    localStorage.removeItem(TIME_LS3);
    localStorage.removeItem(OVERTIME_LS3);
    localStorage.removeItem(timeSecLS3);
    
    timer3.innerHTML="00:00:00";
    
    overTimeStop3();
    
    document.querySelector(".s3").innerHTML ="00";
    document.querySelector(".m3").innerHTML =  "00";
    document.querySelector(".h3").innerHTML = "overtime00";
    document.querySelector(".h3").classList.remove(OVERTIMER_st3);
    document.querySelector(".m3").classList.remove(OVERTIMER_st3);
    document.querySelector(".s3").classList.remove(OVERTIMER_st3);
    hour3.value=`0${0}`;
    minute3.value=`0${0}`;
    second3.value=`0${0}`;
  
  TITLE_INPUT3.value ="";
  
}


function handleAudioInterval3(){
 pousedAudio3=setInterval(audioPlay3,1000);
}
function handlestBT3(){
  timerStop3.classList.add(SHOW3);
     TimeId3 = setInterval(count3,1000);
    stBT3.classList.toggle(SHOW3);
    var forAudioStart3 = parseInt(localStorage.getItem(timeSecLS3));
    audioStart3 = setTimeout(audioPlay3,forAudioStart3*1000+1000);
    foraudioInterval3 = setTimeout(handleAudioInterval3,forAudioStart3*1000+1000);
    console.log(forAudioStart3);
}


function handleSumbit3(event){
  event.preventDefault();
 
}

function handleTitleInput3(){
  TITLE_INPUT3.selec();
}

function callingTitleInput3(){
  var currentTitle3 = localStorage.getItem(title_LS3);
  if(currentTitle3 !== null){
     TITLE_INPUT3.value = currentTitle3;
    }

 
}

function init3(){
    
    form3.addEventListener("submit", handleSumbit3);
    start3.addEventListener("click", saveTime3);
    timerStop3.addEventListener("click",handleStop3);
    hour3.addEventListener("click", handleHourDrag3);
    minute3.addEventListener("click",handleMinuteDrag3);
    second3.addEventListener("click",handledSecondDrag3);
    TITLE_INPUT3.addEventListener("click",handleTitleInput3);
    reset3.addEventListener("click", handleReset3);
    stBT3.addEventListener("click",handlestBT3);
    callingTitleInput3();
    
}
init3();

//overTime시작 js
var h3 =0;
var m3 =0;
var s3 =0;
var overTimeId3;



function startOverTime3(){
if(s3<59){
s3++;
document.querySelector(".s3").innerHTML =`${s3 < 10 ? `0${s3}` :`${s3}`}`;  
}
else{
s3=0;
m3++;
document.querySelector(".s3").innerHTML = `${s3 < 10 ? `0${s3}` :`${s3}`}`;  
}
if(m3<=59){
document.querySelector(".m3").innerHTML = `${m3 < 10 ? `0${m3}` :`${m3}`}`;  
}
else{
m3=0;
h3++;
document.querySelector(".m3").innerHTML = `${m3 < 10 ? `0${m3}` :`${m3}`}`;  
}
if( h3 < 3){
document.querySelector(".h3").innerHTML = `overtime${h3 < 10 ? `0${h3}` :`${h3}`}`;
}        
else{
overTimeStop3();
document.querySelector(".h3").innerHTML = "overtime03";

}
}
function handleOverTime3(){
overTimeId3 = setInterval(startOverTime3,1000);

}

function handleOverTimeReset3(){
clearInterval(overTimeId3);
}
function overTimeStop3(){
handleOverTimeReset3();
form3.classList.remove(BLIND3);
localStorage.removeItem(TIME_LS3);
}




