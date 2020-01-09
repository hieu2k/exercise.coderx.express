const buttonOfCompletes = document.querySelectorAll('#buttonOfComplete');
const createTask = document.querySelector("#createTask");
const formOfComplete = document.querySelectorAll('.formOfComplete')
const completeTime = document.querySelectorAll('#completeTime');
const timeStart = document.querySelectorAll('.timeStart');

let check = true;
let lostMinutes = 0;
let minutesOUT = 0;

timeStart.forEach((element,i) => {
    
    element.addEventListener('click', () => {
        buttonOfCompletes.forEach((buttonOfComplete) => {
            buttonOfComplete.disabled = false;
        });
        if(check === true){
             let minutesIN = parseInt(completeTime[i].getAttribute('data-time'));
             check = false;
             countTime(minutesIN, completeTime[i]);
        }else{
            countTime(minutesOUT, completeTime[i])
        }
       
    })
});



function countTime(minutesIN, item){
    minutesOUT = minutesIN;
    let seconds = 0;
    var setTime = setInterval(() => {

        item.innerHTML = minutesOUT;

        if (minutesOUT === 0 && seconds === 0) {
            clearInterval(setTime);
            countDown();
        }else if(seconds === 0){
            minutesOUT --;
            seconds = 60;
        }else{
            seconds --;
        }
    }, 100);

    function countDown (){
        let lostTime = setInterval(() => {
            seconds++;
            item.innerHTML = lostMinutes;
            if (seconds === 60) {
                seconds = 1;
                lostMinutes = lostMinutes - 1;
            }
        },100); 

        buttonOfCompletes.forEach((buttonOfComplete) => {
            buttonOfComplete.addEventListener('click', e => {
                clearInterval(lostTime);
            });
        });
    }

    buttonOfCompletes.forEach((buttonOfComplete) => {
        buttonOfComplete.addEventListener('click', e => {
            clearInterval(setTime);
        });
    });
}



buttonOfCompletes.forEach((buttonOfComplete, i) => {
    buttonOfComplete.disabled = true;
    buttonOfComplete.addEventListener('click', e => {
        render();
    });
});

function render(){
    let html = `
                    <input type="number" name="hasTime" min= 0 style="display: none" value=${minutesOUT}>
                    <input type="number" name="lostTime" max= 0 style="display: none" value=${lostMinutes}>
                    <input type="text" name="feedback">
                    <button> I'll make more better. Then again</button>
                `;
    formOfComplete[i].innerHTML = html;
}


