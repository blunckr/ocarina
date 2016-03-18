'use strict';

var audioCtx = new window.AudioContext();

const body = document.querySelector('body');
var oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.start();
oscillator.connect(audioCtx.destination);

body.onkeydown = (e) => {
  switch(e.keyCode){
    case 32:
      oscillator.frequency.value = 1174;
      break;
    case 40:
      oscillator.frequency.value = 1396;
      break;
    case 37: //left
      oscillator.frequency.value = 1975;
      break;
    case 38: //up
      oscillator.frequency.value = 2349;
      break;
    case 39: //right
      oscillator.frequency.value = 1760;
      break;
    default:
      oscillator.frequency.value = 0;
      break;
  }
};

//Notes
//(A)  D    36.71   1174
//(CV) F    43.65
//(C>) A    55.00
//(C<) B    61.74
//(C^) D    73.42
