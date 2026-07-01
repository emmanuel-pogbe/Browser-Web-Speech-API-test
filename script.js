const synth = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance("Hello world!");
utterance.rate = 1.5;
function buttonFunction() {
    console.log("I've been clicked!");
    synth.speak(utterance);
}


synth.getVoices();