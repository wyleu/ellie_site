// var canvasSize = 200,
//     centre = canvasSize/2,
//     radius = canvasSize*0.9/2,
//     s = Snap('#track'),
//     path = "",
//     arc = s.path(path),
//     circ1 = ('#text1'),
//     startY = centre-radius,
//     runBtn = document.getElementById('run-button'),
//     audio = document.getElementById('audio-file');

//When "Play" is clicked run the playPause functions

runBtn.onclick = function() {
  playPause();
};

//Play-Pause Button Functionality

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};

//when audioFile plays call update progress function

audio.addEventListener("timeupdate", updateProgress, true);

//if the audio is playing update the progress circle

function updateProgress() {
  progress(audio.currentTime/audio.duration);
}

//If you would rather the path be drawn in js uncomment this section.

/*var bigCircle = s.circle(100, 100, 80);
bigCircle.attr({
    fill: "transparent",
    stroke: "rgba(151, 193, 228, 1)",
    strokeWidth: 12
});*/

//Draw the Circle using Snap.svg

function progress(percent) {
    var startPoint = percent*360;
  var endpoint = percent*360;
    Snap.animate(startPoint, endpoint,   function (val) {
        arc.remove();

        var d = val,
            dr = d-90;
            radians = Math.PI*(dr)/180,
            endx = centre + radius*Math.cos(radians),
            endy = centre + radius * Math.sin(radians),
            largeArc = d>180 ? 1 : 0;
            path = "M"+centre+","+startY+" A"+radius+","+radius+" 1 "+largeArc+",1 "+endx+","+endy;

        arc = s.path(path);


    }, 2000, mina.easeinout);
};