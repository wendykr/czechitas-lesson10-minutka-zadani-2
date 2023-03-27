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

    let time = inputElm.value;

    console.log('Vstupní hodnota: ' + time);

    /*string search*/
    let count = 0;

    // looping through the items
    for (let i = 0; i < time.length; i++) {
    
        // check if the character is at that position
        if (time.charAt(i) == ':') {
            count += 1;
        }
    }
    console.log('Počet: ' + count);

    if (count === 1) {

        let atIndex = time.indexOf(':');
        console.log('indexOf: ' + atIndex);
        let minutes = Number(time.slice(0, atIndex));
        let seconds = Number(time.slice(atIndex + 1));

        inputElm.value = '';
    
        const odecitej = () => {

            if (minutes >= 0) {
                if (seconds > 0) {
                    seconds--;
                } else {
                    minutes--;
                    seconds = 59;
                }
                minutesElm.textContent = String(minutes).padStart(2, '0') + ':';
                secondsElm.textContent = String(seconds).padStart(2, '0');
                console.log(secondsElm.textContent);
            }

            if (minutes <= 0 && seconds <=0) {

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

    } else {
        alert('Neplatný vstup');
    }
}


buttonElm.addEventListener('click', start);