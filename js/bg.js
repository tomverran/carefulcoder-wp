jQuery(document).ready(function() {

    var carefulBgColours = calcColours(0, jQuery('header').css('background-color'));
    boxColour();

    function boxColour() {

        var colIndex = Math.round(Math.random()*carefulBgColours.length-1);

        var boxes = jQuery('.post');
        var boxIndex = Math.round(Math.random()*boxes.length-1);

        jQuery(boxes[boxIndex]).children().css('background-color',carefulBgColours[colIndex])
        setTimeout(boxColour, Math.round(Math.random()*5000));
    }

    function calcColours(mode, colour)
    {
        if (mode == 0) {
            return jQuery.xcolor.analogous(colour);
        } else if (mode == 1) {
            return jQuery.xcolor.tetrad(colour);
        } else if (mode == 2) {
            return jQuery.xcolor.monochromatic(colour);
        } else {
            return [colour];
        }
    }
});
