//Arrow keys
var pane = $('#ground'),
    box = $('#base'),
    w = pane.width() - box.width(),
    d = {},
    x = 3;

// Mouse rotate

function newv(v,a,b) {

    cannon = $('#cannon');

var cannonCenter=[cannon.offset().left+cannon.width()/2, cannon.offset().top+cannon.height()/2];

$(document).mousemove(function(e){    
         
    var angle = Math.atan2(e.pageX- cannonCenter[0],- (e.pageY- cannonCenter[1]) )*(180/Math.PI);     
    
    cannon.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});    
    cannon.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
    cannon.css({ 'transform': 'rotate(' + angle + 'deg)'});
    
});


    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > w ? w : n;
}

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

setInterval(function() {

    box.css({
        left: function(i,v) { return newv(v, 37, 39); },
        top: function(i,v) { return newv(v, 38, 40); }
    });
}, 50);


