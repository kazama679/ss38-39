var opacity = 0;
var intervalId = setInterval(function() {
    var bg = document.getElementById('bg');
    var percent = document.getElementById('percent');
    opacity += 0.01;
    bg.style.opacity = opacity;
    percent.textContent = Math.floor(opacity * 100) + '%';
    if (opacity >= 1) {
        clearInterval(intervalId);
        percent.style.display = 'none';
    }
}, 20);