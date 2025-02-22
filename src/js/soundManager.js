
const soundFiles = {
    toolUpgrade: "./src/sounds/buy.mp3",
    click: "./src/sounds/click.mp3",
    goldenDiamondSpawn: "./src/sounds/pop.mp3",
    pressBtn: "./src/sounds/press.mp3",
    backgroundMusic: "./src/sounds/backgroud_loop_2.mp3",
};

const sounds = {};

for (const key in soundFiles) {
    sounds[key] = new Audio(soundFiles[key]);
    sounds[key].preload = "auto";
}

export let isMuted = false;
export let volume = 0.50;


export function playToolUpgradeSound() {
    if (!isMuted) {
        sounds.toolUpgrade.currentTime = 0;
        sounds.toolUpgrade.play();
    }
}

export function diamondClickSound() {
    if(!isMuted) {
        sounds.click.currentTime = 0;
        sounds.click.play();
    }
}

export function playBackgroundMusic() {
    if(!isMuted){
        sounds.backgroundMusic.loop = true;
        sounds.backgroundMusic.volume = volume;
        sounds.backgroundMusic.play();
    }
}

export function pauseBackgroundMusic() {
    sounds.backgroundMusic.pause();
}

export function spawnGoldenDiamondSound() {
    if(!isMuted) {
        sounds.goldenDiamondSpawn.currentTime = 0;
        sounds.goldenDiamondSpawn.play();
    }
}

export function pressMenuBtnSound() {
    if(!isMuted) {
        sounds.pressBtn.currentTime = 0;
        sounds.pressBtn.play();
    }
}

export function toggleMute() {
    isMuted = !isMuted;
    sounds.backgroundMusic.muted = isMuted;
}

export function setVolume(value) {
    volume = value / 100;
    sounds.backgroundMusic.volume = volume;
}


