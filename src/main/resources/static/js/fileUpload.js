$(document).ready(function(){
    $('form input').change(function () {
        $('form p').text(this.files.length + " file(s) selected");
    });
});

$(function (){
    $("#uploadButton").click(function(){
        $("#progressBar").toggle();
    });
});
