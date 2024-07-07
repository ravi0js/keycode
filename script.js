var start = document.querySelector('.subcontainer1');
var pressed = document.querySelector('.subcontainer2');
var code = document.querySelector('.subcontainer3');

window.addEventListener("keyup", (event) => {
    console.log(event);
    pressed.textContent = "Pressed Key: "+ event.key; // Change 'value' to 'textContent'
    code.textContent= event.keyCode;
    playBeep();
});
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playBeep() {
    var oscillator = audioCtx.createOscillator();
    oscillator.type = 'square'; // Square wave type
    oscillator.frequency.value = 440; // Frequency in hertz (A4 note)

    var gainNode = audioCtx.createGain();
    gainNode.gain.value = 0.1; // Volume

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1); // Stop after 0.1 seconds
}


