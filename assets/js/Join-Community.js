var $Title = $('#Join')

$Title.on('mouseenter', function(){
   
    this.style.background = 'url("assets/img/Red-selection-bigger.png") center / contain no-repeat';
    
});

$Title.on('mouseleave', function(){

    this.style.background = 'none';
    
});