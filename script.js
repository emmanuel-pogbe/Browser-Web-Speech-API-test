const synth = window.speechSynthesis;
const voices = synth.getVoices();
const utterance = new SpeechSynthesisUtterance("Hello world!");
utterance.rate = 1;
function buttonFunction() {
    console.log("I've been clicked!");
    synth.speak(utterance);
    console.log(synth.getVoices());
}


synth.getVoices();