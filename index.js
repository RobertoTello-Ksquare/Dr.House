

let theme = document.querySelector(".theme");
theme.volume=0.3;
document.body.addEventListener('mouseover', () => {
    theme.muted = false;
    theme.play();
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.topnav').style.top = "0";
  } else {
    document.querySelector('.topnav').style.top = "-150px";
  }
};



