//Music
let theme = document.querySelector(".theme");
theme.volume=0.3;
document.body.addEventListener('mouseover', () => {
    theme.muted = false;
    theme.play();
});

//Navbar Scroll Function
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.topnav').style.top = "0";
  } else {
    document.querySelector('.topnav').style.top = "-150px";
  }
};

//Counter Landing Page
let end = new Date('12/12/2022 11:00 AM');

let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;

function showRemaining() {
    let now = new Date();
    let distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.querySelector('#countdown').innerHTML = 'EXPIRED!';

        return;
    }
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);

    document.querySelector('#countdown').innerHTML = days + ' days, ';
    document.querySelector('#countdown').innerHTML += hours + ' hours, ';
    document.querySelector('#countdown').innerHTML += minutes + ' minutes and ';
    document.querySelector('#countdown').innerHTML += seconds + ' seconds';
} 

timer = setInterval(showRemaining, 1000);
