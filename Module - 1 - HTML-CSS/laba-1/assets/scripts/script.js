let audioNL = document.querySelectorAll('audio');
let audio = Array.apply(null, audioNL);

audio.forEach(audioFunction => {
    let index = audio.indexOf(audioFunction);

    audioFunction.addEventListener('play', () => {
        audio.forEach(audioSubfunction => {
            audioSubfunction !== audio[index] ? (audioSubfunction.pause(), audioSubfunction.currentTime = 0) : audioSubfunction.play();
        })
    })
});