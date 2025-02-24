const soundFiles = {
    toolUpgrade: "./src/sounds/buy.mp3",
    click: "./src/sounds/click.mp3",
    goldenDiamondSpawn: "./src/sounds/pop.mp3",
    pressBtn: "./src/sounds/press.mp3",
    backgroundMusic: "./src/sounds/background-loop-2.mp3",
    goldenDiamondDrop: "./src/sounds/golden-diamond-drop.mp3",
    goldenDiamondGrow: "./src/sounds/golden-diamond-grow.mp3",
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
    sounds.backgroundMusic.muted = isMuted;
    sounds.backgroundMusic.loop = true;
    sounds.backgroundMusic.volume = volume;
    sounds.backgroundMusic.play();
}

export function spawnGoldenDiamondSound() {
    if(!isMuted) {
        sounds.goldenDiamondSpawn.currentTime = 0;
        sounds.goldenDiamondSpawn.play();

        sounds.goldenDiamondGrow.loop = true;
        sounds.goldenDiamondGrow.currentTime = 0;
        sounds.goldenDiamondGrow.volume = 0.2;
        sounds.goldenDiamondGrow.play();
    }
}

export function dropGoldenDiamondSound() {
    if(!isMuted) {
        sounds.goldenDiamondDrop.currentTime = 0;
        sounds.goldenDiamondDrop.play();
        stopSoundGrowGoldenDiamond();
    }
}

export function stopSoundGrowGoldenDiamond() {
    if(!isMuted) {
        sounds.goldenDiamondGrow.pause();
        sounds.goldenDiamondGrow.currentTime = 0;
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

export function setSoundSettings(newMuted, newVolume) {
    isMuted = newMuted;
    volume = newVolume;
}

document.querySelectorAll('.js--press-sound').forEach((el) => {
    el.addEventListener('click', () => {
        pressMenuBtnSound();
    })
})


