var $myGroup = $('#teams');
var $CollapseBtn = $('.cbtn');
var $clicked = false;
var $LastBtn;
var $CurrentBtn;
var $LastBtn2;
var $CurrentBtn2;
var $section;
var x = window.matchMedia("(min-width: 1400px)")

$section = document.getElementById('teams');

$myGroup.on('show.bs.collapse','.collapse', function() {
    $myGroup.find('.collapse.show').collapse('hide');
    $clicked = true;
    
    if(x.matches) $section.style.background = 'linear-gradient(rgba(0,0,0,0.34), rgba(0,0,0,0.24) 99%), url("assets/img/Menu-cut-out.png") left / contain no-repeat, linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.6) 99%), url("assets/img/4.jpg") center / cover no-repeat';
    else $section.style.background = 'linear-gradient(rgba(0,0,0,0.34), rgba(0,0,0,0.24) 99%), url("assets/img/Menu-cut-out.png") left / cover no-repeat, linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.6) 99%), url("assets/img/4.jpg") center / cover no-repeat';
});

$myGroup.on('hide.bs.collapse','.collapse', function() {
    $clicked = false;
    $section.style.background = 'linear-gradient(rgba(0,0,0,0.34), rgba(0,0,0,0.24) 99%), url("assets/img/Menu-cut-out.png") left / auto no-repeat, linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.6) 99%), url("assets/img/4.jpg") center / cover no-repeat';
});

$CollapseBtn.on('click', function() {

    if ($CurrentBtn == null) $CurrentBtn = this;
    else if($CurrentBtn != this) { $LastBtn = $CurrentBtn; $CurrentBtn = this; }
    else { $CurrentBtn = this; $LastBtn = null; }
    
    if($clicked) {
        $CurrentBtn.style.background = 'url("assets/img/Red-selection-bigger.png") center / contain no-repeat';
        $CurrentBtn.style.color = 'var(--bs-primary)';
    }
    else {
        $CurrentBtn.style.background = 'none';
        $CurrentBtn.style.color = 'var(--bs-dark)';
    }
    
    if($LastBtn != null) {
            $LastBtn.style.background = 'none';
            $LastBtn.style.color = 'var(--bs-dark)';
        }
});

$CollapseBtn.on('mouseenter', function(){
    
    if ($CurrentBtn2 == null) $CurrentBtn2 = this;
    else if($CurrentBtn2 != this) { $LastBtn2 = $CurrentBtn2; $CurrentBtn2 = this; }
    else { $CurrentBtn2 = this; $LastBtn2 = null; }
    
    if(!$clicked) {
        $CurrentBtn2.style.background = 'url("assets/img/Red-selection-bigger.png") center / contain no-repeat';
        $CurrentBtn2.style.color = 'var(--bs-primary)';
    }
});

$CollapseBtn.on('mouseleave', function(){
    if ($CurrentBtn2 == null) $CurrentBtn2 = this;
    else if($CurrentBtn2 != this) { $LastBtn2 = $CurrentBtn2; $CurrentBtn2 = this; }
    else { $CurrentBtn2 = this; $LastBtn2 = null; }
    
    if(!$clicked) {
        $CurrentBtn2.style.background = 'none';
        $CurrentBtn2.style.color = 'var(--bs-dark)';
    }
});