var cursor = document.getElementById('cursor');
var section = document.getElementById('Join-community');
var media = window.matchMedia("(min-width: 1400px)");
var sfx = document.querySelector('.blade-audio');
var heading = document.getElementById('Join');

document.addEventListener('mousemove', function(e){
    
    if(media.matches) cursor.style.opacity = '1';
    else cursor.style.opacity = '0';
    
    var x = e.clientX;
    var y = e.clientY;
    
    cursor.style.left = x + "px";
    cursor.style.top = (y + 1800) + "px";
});

heading.addEventListener('mouseenter', function(){
    sfx.volume = 50 / 100;
    sfx.play(); 
});

