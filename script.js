const text = document.getElementById("TextToConvert");
const ConvertBtn = document.getElementById("ConvertBtn");

ConvertBtn.addEventListener('click', function () {
    ConvertBtn.style.display = "inline-block"; // Ensure button is visible

    const speechSynth = window.speechSynthesis;
    const enteredText = text.value;
    const error = document.querySelector('.errorp');

    if (!speechSynth.speaking &&
        !enteredText.trim().length) {
        error.textContent = `Nothing to Convert! 
        Enter text in the text area.`
    }
    
    if (!speechSynth.speaking && enteredText.trim().length) {
        console.log("Speech synthesis started!"); 
        error.textContent = "";
        const newUtter = new SpeechSynthesisUtterance(enteredText);
        speechSynth.speak(newUtter);
        ConvertBtn.textContent = "Playing...";

        newUtter.onend = () => {
            console.log("Speech ended!");
            ConvertBtn.textContent = "Play the converted text";
        };
    }
    
    
    setTimeout(() => {
        ConvertBtn.textContent = "Play Converted Sound"}, 1000);
});
