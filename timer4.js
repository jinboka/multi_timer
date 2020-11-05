const form4 = document.querySelector(".form4"),
start4 = form4.querySelector(".submit4"),
timerStop4 = document.querySelector(".stop4"),
timer4 = document.querySelector(".timer4"),
hour4 = form4.querySelector(".hour4"),
minute4 = form4.querySelector(".minute4"),
second4 = form4.querySelector(".second4"),
reset4 = document.querySelector(".reset4");
const OVER_TIMER_CSS4 = document.querySelector(".overTimer4");
const TITLE_INPUT4= document.querySelector(".titleInput4");
const stBT4 = document.querySelector(".stBT4");
const title_LS4 = "title4";
var intervalAudioPlay4;
var foraudioInterval4;
const AUDIO4 = new Audio();
AUDIO4.src='1.mp3';
var audioStart4;
var TIME_LS4 = "totalSec4";
const SHOW4 = "showing";
const BLIND4 = "blind";
const OVERTIMER_st4 = "overTimerStart4";
var TimeId4;
const OVERTIME_LS4 = "overLs4";
const COUNT_LS4 = "count_ls4";
const timeSecLS4 = "timeSecLS4"
//시간을 클릭으로 추가하는 버튼 시작
const ADD_SEC4= document.querySelector(".addInputSec4");
const ADD_01SEC4 = document.querySelector(".add01_4"),
      ADD_05SEC4 = document.querySelector(".add05_4"),
      ADD_10SEC4 = document.querySelector(".add10_4");
const ADD_TIME4 = document.querySelector(".addTime4"),
      ADD_01TIME4 = document.querySelector(".addTime01_4"),
      ADD_05TIME4 = document.querySelector(".addTime05_4"),
      ADD_10TIME4 = document.querySelector(".addTime10_4");

      //시간추가버튼 변수끝


var audioArror4;
var foraudioInterval4;
var pousedAudio4;
var time4;

function audioPlay4(){
 AUDIO4.play();
}



function count4(){
     var overTimeLs4 = JSON.parse(localStorage.getItem(OVERTIME_LS4));
     var count_ls4 = JSON.parse(localStorage.getItem(COUNT_LS4));
    if(time4 > 0){
       if(count_ls4 == true){
           time4--;
           localStorage.setItem(timeSecLS4,time4);

            console.log(time4);
           form4.classList.add(BLIND4);
           var excutehour4 = Math.floor(time4/3600);
           var excuteMinute4 = Math.floor((time4-(excutehour4*3600))/60);
           var excuteSec4 = Math.floor(time4-(excutehour4*3600)-(excuteMinute4*60));
           timer4.innerText = `${excutehour4 <10 ? `0${excutehour4}`: `${excutehour4}`}:${excuteMinute4 <10 ? `0${excuteMinute4}`: `${excuteMinute4}`}:${excuteSec4 <10 ? `0${excuteSec4}`: `${excuteSec4}`}`;
       }
       
        
           
       }
     else{
       form4.classList.remove(BLIND4);
        hour4.value=`0${0}`;
        minute4.value=`0${0}`;
        second4.value=`0${0}`;
        var overTimeLs4 = JSON.parse(localStorage.getItem(OVERTIME_LS4));
        localStorage.removeItem(TIME_LS4);
        if(overTimeLs4 == true){
            clearInterval(TimeId4)
            handleOverTime4()
            timer4.classList.remove(SHOW4);
            audioArror4 = setInterval(audioPlay4,500);
            start4.classList.add(BLIND4);
            timerStop4.classList.remove(SHOW4);
            stBT4.classList.remove(SHOW4);
           OVER_TIMER_CSS4.classList.add(OVERTIMER_st4);
            document.querySelector(".h4").classList.add(OVERTIMER_st4);
            document.querySelector(".m4").classList.add(OVERTIMER_st4);
            document.querySelector(".s4").classList.add(OVERTIMER_st4);
        }
        
      
       
        }
}

function counting4(){
    
    var excutehour4 = Math.floor(time4/3600);
    var excuteMinute4 = Math.floor((time4-(excutehour4*3600))/60);
    var excuteSec4 = Math.floor(time4-(excutehour4*3600)-(excuteMinute4*60));
    timer4.innerText = `${excutehour4 <10 ? `0${excutehour4}`: `${excutehour4}`}:${excuteMinute4 <10 ? `0${excuteMinute4}`: `${excuteMinute4}`}:${excuteSec4 <10 ? `0${excuteSec4}`: `${excuteSec4}`}`;
    TimeId4 = setInterval(count4,1000);
}
 function saveTime4(){  
      ADD_SEC4.classList.add(BLIND4);//INPUT VALUE 추가버튼 
      ADD_TIME4.classList.add(SHOW4);//시간추가버튼
        
      timer4.classList.add(SHOW4);
      timerStop4.classList.add(SHOW4);
      reset4.classList.add(SHOW4);
      stBT4.classList.remove(SHOW4);

      var titleInput4 = TITLE_INPUT4.value;
      localStorage.setItem(title_LS4,titleInput4);
      time4 =  Number(hour4.value)*3600+ Number(minute4.value*60,) +Number(second4.value);

      

     if(time4 <=  0){
          alert("시간을 다시 작성해주세요.");
          timer4.classList.remove(SHOW4);
          timerStop4.classList.remove(SHOW4);
          reset4.classList.remove(SHOW4);
          
        }
        else{
        audioStart4 = setTimeout(audioPlay4,time4*1000);
        form4.classList.add(BLIND4);
        counting4();
        localStorage.setItem(OVERTIME_LS4,JSON.stringify(true));
        localStorage.setItem(COUNT_LS4,JSON.stringify(true));

        }
        
      
        
}
      
    
     

function handleStop4(){
    stBT4.classList.add(SHOW4);
    clearTimeout(TimeId4);
    clearTimeout(audioStart4);
    timerStop4.classList.remove(SHOW4);
    AUDIO4.pause();
    clearTimeout(foraudioInterval4)
    clearInterval(pousedAudio4);
    clearInterval(intervalAudioPlay4);
    clearInterval(audioArror4);
    // clearTimeout(addTimeAudioStart4);//시간추가버튼으로 시작된오디오 정지
    
}
      
      

function handleHourDrag4(){
hour4.select();
}

function handleMinuteDrag4(){
minute4.select();
}  

function handledSecondDrag4(){
 second4.select();
}
function audioPause4(){
  AUDIO4.pause();
}
function handleReset4(){
    clearTimeout(TimeId4); 
    form4.classList.remove(BLIND4);
    timer4.classList.remove(SHOW4);
    stBT4.classList.remove(SHOW4);
    timerStop4.classList.remove(SHOW4);
    reset4.classList.remove(SHOW4);
    start4.classList.remove(BLIND4);
    
    ADD_SEC4.classList.remove(BLIND4);//INPUT VALUE 추가버튼 
    ADD_TIME4.classList.remove(SHOW4);//시간추가버튼
    // clearTimeout(addTimeAudioStart4);//시간추가버튼으로 시작된오디오 정지

    localStorage.removeItem(title_LS4);
    localStorage.removeItem(COUNT_LS4);
    OVER_TIMER_CSS4.classList.remove(OVERTIMER_st4);
    
    clearTimeout(overTimeId4);  
    clearTimeout(audioStart4);
    clearInterval(intervalAudioPlay4);
    clearTimeout(foraudioInterval4);
    clearInterval(audioArror4);
    clearInterval(pousedAudio4);
    
    audioPause4();
    
    localStorage.removeItem(TIME_LS4);
    localStorage.removeItem(OVERTIME_LS4);
    localStorage.removeItem(timeSecLS4);

    
    timer4.innerHTML="00:00:00";
    
    overTimeStop4();
    
    document.querySelector(".s4").innerHTML ="00";
    document.querySelector(".m4").innerHTML =  "00";
    document.querySelector(".h4").innerHTML = "overtime00";
    document.querySelector(".h4").classList.remove(OVERTIMER_st4);
    document.querySelector(".m4").classList.remove(OVERTIMER_st4);
    document.querySelector(".s4").classList.remove(OVERTIMER_st4);
    hour4.value=`0${0}`;
    minute4.value=`0${0}`;
    second4.value=`0${0}`;
  
  TITLE_INPUT4.value ="";
  
}


function handleAudioInterval4(){
 pousedAudio4=setInterval(audioPlay4,1000);
}
function handlestBT4(){
  timerStop4.classList.add(SHOW4);
    TimeId4 = setInterval(count4,1000);
    stBT4.classList.toggle(SHOW4);
    var forAudioStart4 = parseInt(localStorage.getItem(timeSecLS4));
    audioStart4 = setTimeout(audioPlay4,forAudioStart4*1000+1000);
    foraudioInterval4 = setTimeout(handleAudioInterval4,forAudioStart4*1000+1000);
    console.log(forAudioStart4);
}


function handleSumbit4(event){
  event.preventDefault();
 
}

function handleTitleInput4(){
  TITLE_INPUT4.select();
}

function callingTitleInput4(){
  var currentTitle4 = localStorage.getItem(title_LS4);
  if(currentTitle4 !== null){
     TITLE_INPUT4.value = currentTitle4;
    
    }
   }
//시간추가버튼 함수시작
function add01Bt_4(){
  let currnetValue = minute4.value;
  minute4.value =  Number(currnetValue)+1;
 
}
function addTimeBt01_4(){
   time4 = time4 + 60;
   clearTimeout(audioStart4);
   AUDIO4.pause();
   clearTimeout(foraudioInterval4)
   clearInterval(pousedAudio4);
   clearInterval(intervalAudioPlay4);
   clearInterval(audioArror4);
  }
  function add05Bt_4(){
    let currnetValue = minute4.value;
    minute4.value =  Number(currnetValue)+5;
   
  }
  function addTimeBt05_4(){
     time4 = time4 + 300;
     clearTimeout(audioStart4);
     AUDIO4.pause();
     clearTimeout(foraudioInterval4)
     clearInterval(pousedAudio4);
     clearInterval(intervalAudioPlay4);
     clearInterval(audioArror4);
    }
    function add10Bt_4(){
      let currnetValue = minute4.value;
      minute4.value =  Number(currnetValue)+10;
     
    }
    function addTimeBt10_4(){
       time4 = time4 + 600;
       clearTimeout(audioStart4);
       AUDIO4.pause();
       clearTimeout(foraudioInterval4)
       clearInterval(pousedAudio4);
       clearInterval(intervalAudioPlay4);
       clearInterval(audioArror4);
      }
//시간추가버튼 함수 끝
function init4(){
    
    form4.addEventListener("submit", handleSumbit4);
    start4.addEventListener("click", saveTime4);
    timerStop4.addEventListener("click",handleStop4);
    hour4.addEventListener("click", handleHourDrag4);
    minute4.addEventListener("click",handleMinuteDrag4);
    second4.addEventListener("click",handledSecondDrag4);
    TITLE_INPUT4.addEventListener("click",handleTitleInput4);
    reset4.addEventListener("click", handleReset4);
    stBT4.addEventListener("click",handlestBT4);
    callingTitleInput4();
    //시간추가 이벤트 핸들러
    ADD_01SEC4.addEventListener("click",add01Bt_4);
    ADD_01TIME4.addEventListener("click",addTimeBt01_4);
    ADD_05SEC4.addEventListener("click",add05Bt_4);
    ADD_05TIME4.addEventListener("click",addTimeBt05_4);
    ADD_10SEC4.addEventListener("click",add10Bt_4);
    ADD_10TIME4.addEventListener("click",addTimeBt10_4);
    //시간추가 이베트 핸들러 끝
}
init4();

//overTime시작 js
var h4 =0;
var m4 =0;
var s4 =0;
var overTimeId4;



function startOverTime4(){
if(s4<59){
s4++;
document.querySelector(".s4").innerHTML =`${s4 < 10 ? `0${s4}` :`${s4}`}`;  
}
else{
s4=0;
m4++;
document.querySelector(".s4").innerHTML = `${s4 < 10 ? `0${s4}` :`${s4}`}`;  
}
if(m4<=59){
document.querySelector(".m4").innerHTML = `${m4 < 10 ? `0${m4}` :`${m4}`}`;  
}
else{
m4=0;
h4++;
document.querySelector(".m4").innerHTML = `${m4 < 10 ? `0${m4}` :`${m4}`}`;  
}
if( h4 < 1){
document.querySelector(".h4").innerHTML = `overtime${h4 < 10 ? `0${h4}` :`${h4}`}`;
}        
else{
overTimeStop4();
document.querySelector(".h4").innerHTML = "overtime00";

}
}
function handleOverTime4(){
overTimeId4 = setInterval(startOverTime4,1000);

}

function handleOverTimeReset4(){
clearInterval(overTimeId4);
}
function overTimeStop4(){
handleOverTimeReset4();
form4.classList.remove(BLIND4);
localStorage.removeItem(TIME_LS4);

}


