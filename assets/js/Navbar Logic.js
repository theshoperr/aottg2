var $toggler = $('#toggler')
var $patreonBtn;
var toggled = false;

$patreonBtn = document.getElementById('pbtn');

$toggler.on('click', function(){
    
    toggled = !toggled;
    
    if(toggled) $patreonBtn.style.opacity = '0';
    else $patreonBtn.style.opacity = '1';
        
});