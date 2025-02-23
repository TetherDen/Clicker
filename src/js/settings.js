import {playBackgroundMusic, isMuted, toggleMute, setVolume, volume} from "./soundManager.js";
import {Game} from "./Game.js";

export function initializeSettings() {
    const startButton = document.getElementById("start-game-btn");
    const muteButton = document.getElementById("mute_button");
    const volumeSlider = document.getElementById("volume_slider");
    const saveButton = document.getElementById("save-game-btn");

    // установка начального значения volumeSlideer в текущее значение/
    volumeSlider.value = volume * 100;
    volumeValue.textContent = `${Math.round(volume * 100)}%`;

    startButton.addEventListener("click", () => {
        document.getElementById("start-screen").style.display = "none";
        playBackgroundMusic();
    });

    muteButton.addEventListener("click", () => {
        toggleMute();
    });

    volumeSlider.addEventListener("input", (e) => {
        const value = e.target.value;
        document.getElementById("volumeValue").textContent = `${value}%`;
        setVolume(value);
    });

    saveButton.addEventListener("click", () => {
        Game.saveGameData();
    })
}
