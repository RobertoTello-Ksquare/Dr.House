

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



var end = new Date('12/12/2022 11:00 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.querySelector('#countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.querySelector('#countdown').innerHTML = days + ' days, ';
        document.querySelector('#countdown').innerHTML += hours + ' hours, ';
        document.querySelector('#countdown').innerHTML += minutes + ' minutes and ';
        document.querySelector('#countdown').innerHTML += seconds + ' seconds';
    }

    timer = setInterval(showRemaining, 1000);