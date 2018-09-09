$(document).ready(function() {
    console.log('Code from main');

    let svg = document.getElementById("cups");
    let s = Snap(svg);

    let simpleCup = Snap.select('#simple-cup');
    let fancyCup = Snap.select('#fancy-cup');

    let simpleCupPoints = simpleCup.node.getAttribute('d');
    let fancyCupPoints = fancyCup.node.getAttribute('d');


    let toFancy = function () {
        simpleCup.animate({d: fancyCupPoints}, 1000, mina.backout, toSimple);
    }

    let toSimple = function () {
        simpleCup.animate({d: simpleCupPoints}, 1000, mina.backout, toFancy);
    }


    toSimple();

});