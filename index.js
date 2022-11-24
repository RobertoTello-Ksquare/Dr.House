

let theme = document.querySelector(".theme");
theme.volume=0.3;
document.body.addEventListener('mouseover', () => {
    theme.muted = false;
    theme.play();
});