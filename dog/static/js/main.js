$(document).ready(function() {
    console.log('Code from main');
    var s = Snap("#svg");
// Circle with 80px radius
    var circle = s.circle(90, 120, 80);
// Square with 160px side width
    var square = s.rect(210, 40, 160, 160);
// Ellipse with 80px vertical radius and 50px horizontal radius
    var ellipse = s.ellipse(460, 120, 50, 80);

    circle.attr({
        fill: 'coral',
        stroke: 'coral',
        strokeOpacity: .3,
        strokeWidth: 10
    });

    square.attr({
        fill: 'lightblue',
        stroke: 'lightblue',
        strokeOpacity: .3,
        strokeWidth: 10
    });

    ellipse.attr({
        fill: 'mediumturquoise',
        stroke: 'mediumturquoise',
        strokeOpacity: .2,
        strokeWidth: 10
    });

});