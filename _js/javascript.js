//Arrow keys
var pane = $('#ground'),
    base = $('#base'),
    cannon = $('#cannon'),
    w = pane.width() - base.width(),
    d = {},
    rot_speed = 2,        //Cannon rotating Speed
    tank_friction = 50,   //Tank speed (descending)  
    x = 3;


function newv(v,a,b) {

// Mouse rotate


    var cannonCenter=[cannon.offset().left+cannon.width()/2, cannon.offset().top+cannon.height()/2];

    $(document).mousemove(function(e){    
             
        var angle = Math.atan2(e.pageX- cannonCenter[0],- (e.pageY- cannonCenter[1]) )*(180/Math.PI);     
        
        cannon.css({ 'transform': 'rotate(' + angle + 'deg)'});
        
    });
// Mouse rotate end


    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > w ? w : n;
}


//Base Rotaing

    var rot = 0;


    $(window).keydown(function(e) {    // When key clicked
        d[e.which] = true;
        
        function rotate(degree) {       //Rotate function
               $base.css({ WebkitTransform: 'rotate(' + degree + 'deg)'}),
               $cannon.css({ WebkitTransform: 'rotate(' + (-degree) + 'deg)'});
               console.log("Rotating");
            }

        var $base = $("#base");
        var $cannon = $("#cannon");

        if (e.keyCode==68) {  //Right key (D)
            rot=rot + rot_speed;
            rotate(rot);
        };

        if (e.keyCode==65) {  //Left key (A)
            rot=rot - rot_speed;
            rotate(rot);
        };

    });


$(window).keyup(function(e) { d[e.which] = false; }); // When key is released

setInterval(function() {



    base.css({
        top: function(i,v) { return newv(v, 87, 83); }  //Up Down (W S)

    });
}, tank_friction);



$(document).ready(function () {
    $("#grd_img").click(function () {
            $("#cannon").animate({ top: '5px' }, 50);
            $("#cannon").animate({ top: '-5px' }, 200);
    });
});

