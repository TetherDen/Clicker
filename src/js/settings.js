import { playBackgroundMusic, isMuted, toggleMute, setVolume, volume } from "./soundManager.js";



export function initializeSettings() {

    const startButton = document.getElementById("start-game-btn");
    const muteButton = document.getElementById("mute_button");
    const volumeSlider = document.getElementById("volume_slider");

    // установка начального значения volumeSlideer в текущее значение/
    volumeSlider.value = volume * 100;
    volumeValue.textContent = `${Math.round(volume * 100)}%`;


    startButton.addEventListener("click", () => {
        document.getElementById("start-screen").style.display = "none";
        if(!isMuted){
            playBackgroundMusic();
        }
    });


    muteButton.addEventListener("click", () => {
        toggleMute();
    });

    
    volumeSlider.addEventListener("input", (e) => {
        const value = e.target.value;
        document.getElementById("volumeValue").textContent = `${value}%`;
        setVolume(value);

    });


}
