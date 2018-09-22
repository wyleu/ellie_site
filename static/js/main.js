$(document).ready(function() {
    console.log('Code from main');

    var log = console.log.bind(console);

    var keyData = document.getElementById('key_data');
    var deviceInfoInputs = document.getElementById('inputs');
    var deviceInfoOutputs = document.getElementById('outputs');
    var midi;
    var midi_status = true;


    if (navigator.requestMIDIAccess) {
        console.log('This browser supports WebMIDI!');
    } else {
        console.log('WebMIDI is not supported in this browser.');
    }


    navigator.requestMIDIAccess()
    .then(onMIDISuccess, onMIDIFailure);


        // MIDI utility functions
    function showMIDIPorts(midiAccess){
        var inputs = midiAccess.inputs,
                outputs = midiAccess.outputs,
                html;
        html = '<h4>MIDI Inputs:</h4><div class="info">';
        inputs.forEach(function(port){
            html += '<p>' + port.name + '<p>';
            html += '<p class="small">connection: ' + port.connection + '</p>';
            html += '<p class="small">state: ' + port.state + '</p>';
            html += '<p class="small">manufacturer: ' + port.manufacturer + '</p>';
            if(port.version){
                html += '<p class="small">version: ' + port.version + '</p>';
            }
        });
        deviceInfoInputs.innerHTML = html + '</div>';

        html = '<h4>MIDI Outputs:</h4><div class="info">';
        outputs.forEach(function(port){
            html += '<p>' + port.name + '<br>';
            html += '<p class="small">manufacturer: ' + port.manufacturer + '</p>';
            if(port.version){
                html += '<p class="small">version: ' + port.version + '</p>';
            }
        });
        deviceInfoOutputs.innerHTML = html + '</div>';
    }



    function onMIDISuccess(midiAccess){
        midi = midiAccess;
        var inputs = midi.inputs.values();
        // loop through all inputs
        for(var input = inputs.next(); input && !input.done; input = inputs.next()){
            // listen for midi messages
            input.value.onmidimessage = onMIDIMessage;

            listInputs(input);
        }
        // listen for connect/disconnect message
        midi.onstatechange = onStateChange;

        showMIDIPorts(midi);
    }

    function onMIDIFailure() {
        console.log('Could not access your MIDI devices.');
    }

    function onStateChange(event){
        showMIDIPorts(midi);
        var port = event.port, state = port.state, name = port.name, type = port.type;
        if(type == "input")
            log("name", name, "port", port, "state", state);

    }

    function listInputs(inputs){
        var input = inputs.value;
            log("Input port : [ type:'" + input.type + "' id: '" + input.id +
                    "' manufacturer: '" + input.manufacturer + "' name: '" + input.name +
                    "' version: '" + input.version + "']");
    }

    function onMIDIMessage(event){
    data = event.data,
    cmd = data[0] >> 4,
    channel = data[0] & 0xf,
    type = data[0] & 0xf0, // channel agnostic message type. Thanks, Phil Burk.
    note = data[1],
    velocity = data[2];

    // with pressure and tilt off
    // note off: 128, cmd: 8
    // note on: 144, cmd: 9
    // pressure / tilt on
    // pressure: 176, cmd 11:
    // bend: 224, cmd: 14
    if(midi_status) {
        $('#midi_status').hide();
        midi_status = false;
    }
    else{
        $('#midi_status').show();
        midi_status = true;
    }

    log('MIDI data', data);
    switch(type){
        case 144: // noteOn message
            noteOn(note, velocity);
            break;
        case 128: // noteOff message
            noteOff(note, velocity);
            break;
        }

        //log('data', data, 'cmd', cmd, 'channel', channel);
        logger(keyData, 'key data', data);
    }


    let s = Snap("#svg");

    let background = s.rect(0,0,620,300);
// Circle with 80px radius
    let circle = s.circle(90, 120, 80);
// Square with 160px side width
    let square = s.rect(210, 40, 160, 160);
// Ellipse with 80px vertical radius and 50px horizontal radius
    let ellipse = s.ellipse(460, 120, 80, 50);
    let g = s.gradient("l(0, 1, 0, 0)#f00-#f90-#fff");
    let f = s.filter(Snap.filter.shadow(5,10,.3));

    let selectedElement = false;

    let image_group = s.group()


    Snap.load("/static/svg/akai-svg-image-2.svg", onSVGLoaded ) ;

    function onSVGLoaded( data ){
        image_group.append( data );
    }

    image_group.animate({ transform: 's1.5,1.5' }, 1000)


    background.attr({
        fill: g
    });

    circle.attr({
        fill: 'coral',
        stroke: 'black',
        strokeOpacity: .3,
        strokeWidth: 1,
        filter: f
    });

    square.attr({
        fill: 'darkorange',
        stroke: 'black',
        strokeOpacity: .3,
        strokeWidth: 1,
        filter: f
    });

    ellipse.attr({
        fill: 'mediumturquoise',
        stroke: 'black',
        strokeOpacity: .2,
        strokeWidth: 1,
        filter: f
    });

    let square_bbox = square.getBBox();

    function circ_jump () {
        circle.stop().animate(
            {transform: 't0,-50'},
            500,
            mina.backout,
            function (){
                circle.animate(
                    {transform: 't0,0'},
                    500,
                    mina.backin);
            }
        );
    }

    function sqr_rotate(){
        square.transform('');
        square.animate(
            {transform: "r180," + square_bbox.cx + ',' + square_bbox.cy},
            1500,
            mina.bounce
        );
    }

    function tri_scale () {
        ellipse.transform('');
        ellipse.stop().animate(
            {transform: 's.5,.5'},
            300,
            mina.easeout,
            function() {
                ellipse.stop().animate(
                    {transform: 's1,1'},
                    700,
                    mina.elastic
                );
            }
        );
    }
    circle.mouseover(circ_jump);
    square.mouseover(sqr_rotate);
    ellipse.mouseover(tri_scale);

    function makeDraggable(evt) {

        square.drag(drag, startDrag, endDrag);
        // square.mousemove(drag);
        // square.mouseup(endDrag);
        //square.mouseleave(endDrag);

        function startDrag(evt) {
            console.log('startDrag',evt.target);
        }

        function drag(evt) {
            console.log('drag',evt.target);

        }

        function endDrag(evt) {
            console.log('endDrag');
            selectedElement = null;
        }

    }

    makeDraggable();



});