$(document).ready(function() {
    console.log('Code from main');
    var s = Snap("#svg");
    var background = s.rect(0,0,620,300)
// Circle with 80px radius
    var circle = s.circle(90, 120, 80);
// Square with 160px side width
    var square = s.rect(210, 40, 160, 160);
// Ellipse with 80px vertical radius and 50px horizontal radius
    var ellipse = s.ellipse(460, 120, 50, 80);


    var g = s.gradient("l(0, 0, 1, 1)#000-#f00-#fff");

    background.attr({
        fill: g
    });


    circle.attr({
        fill: 'coral',
        stroke: 'coral',
        strokeOpacity: .3,
        strokeWidth: 10
    });

    square.attr({
        fill: 'darkblue',
        stroke: 'darkblue',
        strokeOpacity: .3,
        strokeWidth: 10
    });

    ellipse.attr({
        fill: 'mediumturquoise',
        stroke: 'mediumturquoise',
        strokeOpacity: .2,
        strokeWidth: 10
    });

    var square_bbox = square.getBBox();
    var circle_bbox = circle.getBBox();
    var ellipse_bbox = ellipse.getBBox();

    function circ_jump () {
            circle.stop().animate({transform: 't0,-50'}, 500, mina.backout, function () {
                circle.animate({transform: 't0,0'}, 500, mina.backin);
            });
        }

        function sqr_rotate(){
            square.transform('');
            square.animate({ transform: "r180," + square_bbox.cx + ',' + square_bbox.cy}, 1500, mina.bounce);
        }

        function tri_scale () {
            ellipse.transform('');
            ellipse.stop().animate({transform: 's.5,.5'}, 300, mina.easeout, function() {
                ellipse.stop().animate({transform: 's1,1'}, 700, mina.elastic);
            });
        }
        circle.mouseover(circ_jump);
        square.mouseover(sqr_rotate);
        ellipse.mouseover(tri_scale);

});