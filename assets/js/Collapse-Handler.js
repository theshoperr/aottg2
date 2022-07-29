var $myGroup = $('#teams');
var $CollapseBtn = $('.cbtn');
var $clicked = false;
var $LastBtn;
var $CurrentBtn;
var $section;

$section = document.getElementById('teams');

$myGroup.on('show.bs.collapse','.collapse', function() {
    $myGroup.find('.collapse.show').collapse('hide');
    $clicked = true;
    $section.style.background = 'linear-gradient(rgba(0,0,0,0.34), rgba(0,0,0,0.24) 99%), url("assets/img/Menu-cut-out.png") left / contain no-repeat, linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.6) 99%), url("assets/img/4.jpg") center / cover no-repeat'; 
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