function hasTime(minutes){
    let seconds = 0;
    let minutesOUT = minutes;
    var countTime = setInterval(() => {
        if(minutesOUT !== 0){
            minutesOUT --;
            seconds = 60;
        }else if(minutesOUT === 0 && seconds === 0){
            lostTime();
            clearInterval(countTime);
        }
        seconds--;
    },1000);

    return minutesOUT;
}

function lostTime(){
    let seconds = 0;
    

}