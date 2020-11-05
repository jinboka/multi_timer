const form2 = document.querySelector(".form2"),
start2 = form2.querySelector(".submit2"),
timerStop2 = document.querySelector(".stop2"),
timer2 = document.querySelector(".timer2"),
hour2 = form2.querySelector(".hour2"),
minute2 = form2.querySelector(".minute2"),
second2 = form2.querySelector(".second2"),
reset2 = document.querySelector(".reset2");
const OVER_TIMER_CSS2 = document.querySelector(".overTimer2");
const TITLE_INPUT2= document.querySelector(".titleInput2");
const stBT2 = document.querySelector(".stBT2");
const title_LS2 = "title2";
var intervalAudioPlay2;
var foraudioInterval2;
const AUDIO2 = new Audio();
AUDIO2.src='1.mp3';
var audioStart2;
var TIME_LS2 = "totalSec2";
const SHOW2 = "showing";
const BLIND2 = "blind";
const OVERTIMER_st2 = "overTimerStart2";
var TimeId2;
const OVERTIME_LS2 = "overLs2";
const COUNT_LS2 = "count_ls2";
const timeSecLS2 = "timeSecLS2";
var audioArror2;
var foraudioInterval2;
var pousedAudio2;
var time2;

//시간을 클릭으로 추가하는 버튼 시작
const ADD_SEC2= document.querySelector(".addInputSec2");
const ADD_01SEC2 = document.querySelector(".add01_2"),
      ADD_05SEC2 = document.querySelector(".add05_2"),
      ADD_10SEC2 = document.querySelector(".add10_2");
const ADD_TIME2 = document.querySelector(".addTime2"),
      ADD_01TIME2 = document.querySelector(".addTime01_2"),
      ADD_05TIME2 = document.querySelector(".addTime05_2"),
      ADD_10TIME2 = document.querySelector(".addTime10_2");

      //시간추가버튼 변수

function audioPlay2(){
 AUDIO2.play();
}



function count2(){
     var overTimeLs2 = JSON.parse(localStorage.getItem(OVERTIME_LS2));
     var count_ls2 = JSON.parse(localStorage.getItem(COUNT_LS2));
    if(time2 > 0){
       if(count_ls2 == true){
           time2--;
           localStorage.setItem(timeSecLS2,time2);
            console.log(time2);
           form2.classList.add(BLIND2);
           var excuteHour2 = Math.floor(time2/3600);
           var excuteMinute2 = Math.floor((time2-(excuteHour2*3600))/60);
           var excuteSec2 = Math.floor(time2-(excuteHour2*3600)-(excuteMinute2*60));
           timer2.innerText = `${excuteHour2 <10 ? `0${excuteHour2}`: `${excuteHour2}`}:${excuteMinute2 <10 ? `0${excuteMinute2}`: `${excuteMinute2}`}:${excuteSec2 <10 ? `0${excuteSec2}`: `${excuteSec2}`}`;
       }
       
        
           
       }
     else{
       form2.classList.remove(BLIND2);
        hour2.value=`0${0}`;
        minute2.value=`0${0}`;
        second2.value=`0${0}`;
        var overTimeLs2 = JSON.parse(localStorage.getItem(OVERTIME_LS2));
        localStorage.removeItem(TIME_LS2);
        if(overTimeLs2 == true){
            clearInterval(TimeId2)
            handleOverTime2()
           timer2.classList.remove(SHOW2);
           audioArror2 = setInterval(audioPlay2,500);
            start2.classList.add(BLIND2);
          timerStop2.classList.remove(SHOW2);
           stBT2.classList.remove(SHOW2);
           OVER_TIMER_CSS2.classList.add(OVERTIMER_st2);
    
            document.querySelector(".h2").classList.add(OVERTIMER_st2);
            document.querySelector(".m2").classList.add(OVERTIMER_st2);
            document.querySelector(".s2").classList.add(OVERTIMER_st2);
        }
        
      
       
        }
}

function counting2(){
    
    var excuteHour2 = Math.floor(time2/3600);
    var excuteMinute2 = Math.floor((time2-(excuteHour2*3600))/60);
    var excuteSec2 = Math.floor(time2-(excuteHour2*3600)-(excuteMinute2*60));
    timer2.innerText = `${excuteHour2 <10 ? `0${excuteHour2}`: `${excuteHour2}`}:${excuteMinute2 <10 ? `0${excuteMinute2}`: `${excuteMinute2}`}:${excuteSec2 <10 ? `0${excuteSec2}`: `${excuteSec2}`}`;
    TimeId2 = setInterval(count2,1000);
}

function saveTime2(){ 
      ADD_SEC2.classList.add(BLIND2);//INPUT VALUE 추가버튼 
      ADD_TIME2.classList.add(SHOW2);//시간추가버튼 
 
      timer2.classList.add(SHOW2);
      timerStop2.classList.add(SHOW2);
      reset2.classList.add(SHOW2);
      stBT2.classList.remove(SHOW2);

      var titleInput2 = TITLE_INPUT2.value;
      localStorage.setItem(title_LS2,titleInput2);
      time2 =  Number(hour2.value)*3600+ Number(minute2.value*60,) +Number(second2.value);
    
      

     if(time2 <= 0){
          alert("시간을 다시 작성해주세요.");
          timer2.classList.remove(SHOW2);
          timerStop2.classList.remove(SHOW2);
          reset2.classList.remove(SHOW2);
          
        }
        else{audioStart2 = setTimeout(audioPlay2,time2*1000);
        form2.classList.add(BLIND2);
        counting2();
        localStorage.setItem(OVERTIME_LS2,JSON.stringify(true));
        localStorage.setItem(COUNT_LS2,JSON.stringify(true));

        }
        
      
        
}
      
    
     

function handleStop2(){
    stBT2.classList.add(SHOW2);
    clearTimeout(TimeId2);
    clearTimeout(audioStart2);
    timerStop2.classList.remove(SHOW2);
    AUDIO2.pause();
    clearTimeout(foraudioInterval2)
    clearInterval(pousedAudio2);
    clearInterval(intervalAudioPlay2);
    clearInterval(audioArror2);
    
}
      
      

function handleHourDrag2(){
hour2.select();
}

function handleMinuteDrag2(){
minute2.select();
}  

function handledSecondDrag2(){
 second2.select();
}
function audioPause2(){
  AUDIO2.pause();
}
function handleReset2(){
    ADD_SEC2.classList.remove(BLIND2);//INPUT VALUE 추가버튼 
    ADD_TIME2.classList.remove(SHOW2);//시간추가버튼


    clearTimeout(TimeId2); 
    form2.classList.remove(BLIND2);
    timer2.classList.remove(SHOW2);
    stBT2.classList.remove(SHOW2);
    timerStop2.classList.remove(SHOW2);
    reset2.classList.remove(SHOW2);
    start2.classList.remove(BLIND2);
    OVER_TIMER_CSS2.classList.remove(OVERTIMER_st2);
    
      localStorage.removeItem(title_LS2);
      localStorage.removeItem(COUNT_LS2);
      localStorage.removeItem(timeSecLS2);

    
    clearTimeout(overTimeId2);  
    clearTimeout(audioStart2);
    clearInterval(intervalAudioPlay2);
    clearTimeout(foraudioInterval2);
    clearInterval(audioArror2);
    clearInterval(pousedAudio2);
    
    audioPause2();
    
    localStorage.removeItem(TIME_LS2);
    localStorage.removeItem(OVERTIME_LS2);
    
    timer2.innerHTML="00:00:00";
    
    overTimeStop2();
    
    document.querySelector(".s2").innerHTML ="00";
    document.querySelector(".m2").innerHTML =  "00";
    document.querySelector(".h2").innerHTML = "overtime00";
    document.querySelector(".h2").classList.remove(OVERTIMER_st2);
    document.querySelector(".m2").classList.remove(OVERTIMER_st2);
    document.querySelector(".s2").classList.remove(OVERTIMER_st2);
    hour2.value=`0${0}`;
    minute2.value=`0${0}`;
    second2.value=`0${0}`;
  
  TITLE_INPUT2.value ="";
  
}


function handleAudioInterval2(){
 pousedAudio2=setInterval(audioPlay2,1000);
}
function handlestBT2(){
  timerStop2.classList.add(SHOW2);
     TimeId2 = setInterval(count2,1000);
    stBT2.classList.toggle(SHOW2);
    var forAudioStart2 = parseInt(localStorage.getItem(timeSecLS2));
    audioStart2 = setTimeout(audioPlay2,forAudioStart2*1000+1000);
    foraudioInterval2 = setTimeout(handleAudioInterval2,forAudioStart2*1000+1000);
    console.log(forAudioStart2);
}


function handleSumbit2(event){
  event.preventDefault2();
 
}

function handleTitleInput2(){
  TITLE_INPUT2.select();
}

function callingTitleInput2(){
  var currentTitle2 = localStorage.getItem(title_LS2);
  if(currentTitle2 !== null){
     TITLE_INPUT2.value = currentTitle2;
    }

 
}
//시간추가버튼 함수시작
function add01Bt_2(){
  let currnetValue = minute2.value;
  minute2.value =  Number(currnetValue)+1;
 
}
function addTimeBt01_2(){
   time2 = time2 + 60;
   clearTimeout(audioStart2);
   AUDIO2.pause();
   clearTimeout(foraudioInterval2)
   clearInterval(pousedAudio2);
   clearInterval(intervalAudioPlay2);
   clearInterval(audioArror2);
  }
  function add05Bt_2(){
    let currnetValue = minute2.value;
    minute2.value =  Number(currnetValue)+5;
   
  }
  function addTimeBt05_2(){
     time2= time2 + 300;
     clearTimeout(audioStart2);
     AUDIO2.pause();
     clearTimeout(foraudioInterval2)
     clearInterval(pousedAudio2);
     clearInterval(intervalAudioPlay2);
     clearInterval(audioArror2);
    }
    function add10Bt_2(){
      let currnetValue = minute2.value;
      minute2.value =  Number(currnetValue)+10;
     
    }
    function addTimeBt10_2(){
       time2 = time2 + 600;
       clearTimeout(audioStart2);
       AUDIO2.pause();
       clearTimeout(foraudioInterval2)
       clearInterval(pousedAudio2);
       clearInterval(intervalAudioPlay2);
       clearInterval(audioArror2);
      }
//시간추가버튼 함수 끝

function init2(){
    
    form2.addEventListener("submit", handleSumbit2);
    start2.addEventListener("click", saveTime2);
    timerStop2.addEventListener("click",handleStop2);
    hour2.addEventListener("click", handleHourDrag2);
    minute2.addEventListener("click",handleMinuteDrag2);
    second2.addEventListener("click",handledSecondDrag2);
    TITLE_INPUT.addEventListener("click",handleTitleInput2);
    reset2.addEventListener("click", handleReset2);
    stBT2.addEventListener("click",handlestBT2);
    callingTitleInput2();

    //시간추가 이벤트 핸들러
    ADD_01SEC2.addEventListener("click",add01Bt_2);
    ADD_01TIME2.addEventListener("click",addTimeBt01_2);
    ADD_05SEC2.addEventListener("click",add05Bt_2);
    ADD_05TIME2.addEventListener("click",addTimeBt05_2);
    ADD_10SEC2.addEventListener("click",add10Bt_2);
    ADD_10TIME2.addEventListener("click",addTimeBt10_2);
    //시간추가 이베트 핸들러 끝
    
}
init2();

//overTime시작 js
var h2 = 0;
var m2 = 0;
var s2 = 0;
var overTimeId2;



function startOverTime2(){
if(s2<59){
s2++;
document.querySelector(".s2").innerHTML =`${s2 < 10 ? `0${s2}` :`${2}`}`;  
}
else{
s2=0;
m2++;
document.querySelector(".s2").innerHTML = `${s2 < 10 ? `0${s2}` :`${s2}`}`;  
}
if(m2<=59){
document.querySelector(".m2").innerHTML = `${m2 < 10 ? `0${m2}` :`${m2}`}`;  
}
else{
m2=0;
h2++;
document.querySelector(".m2").innerHTML = `${m2 < 10 ? `0${m2}` :`${m2}`}`;  
}
if( h2 < 1){
document.querySelector(".h2").innerHTML = `overtime${h2 < 10 ? `0${h2}` :`${h2}`}`;
}
else{
overTimeStop2();
document.querySelector(".h2").innerHTML = "overtime01";

}

}

function handleOverTime2(){
overTimeId2 = setInterval(startOverTime2,1000);

}

function handleOverTimeReset2(){
clearInterval(overTimeId);
}
function overTimeStop2(){
handleOverTimeReset2();
form2.classList.remove(BLIND2);

localStorage.removeItem(TIME_LS2);
}




