'use strict';

//console.log('funguju!');

const buttonElm = document.querySelector('button');
const inputElm = document.querySelector('.time-input');
const minutesElm = document.querySelector('.alarm__minutes');
const secondsElm = document.querySelector('.alarm__seconds');
const alarmElm = document.querySelector('.alarm');

const start = (event) => {
    event.preventDefault();
    //console.log('click');

    alarmElm.classList.remove('alarm--ring');

    let time = Number(inputElm.value);
    console.log('Vstupní hodnota: ' + time);

    if (time === 0) {
        alert('Zadejte vstupní hodnotu');
    } else {
        inputElm.value = '';

        const odecitej = () => {

            if (time > 0) {
                time--;
                secondsElm.textContent = String(time).padStart(2, '0');
                console.log(secondsElm.textContent);       
            } 
            
            if (time <= 0) {
                clearTimeout(resetOdecitej);
                inputElm.value = '';

                const alarmRing = () => {
                    alarmElm.classList.add('alarm--ring');
                }
                
                setTimeout(alarmRing, time);
                
                let audioElm = document.querySelector('audio');

                const spustAudio = () => {
                    audioElm.play();
                }

                setTimeout(spustAudio, time);
            }

        }

        const resetOdecitej = setInterval(odecitej, 1000);
    }
}


buttonElm.addEventListener('click', start);