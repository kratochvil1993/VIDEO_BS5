/* Custom */
$(document).ready( function() {

    $('.modalVideo').each( function(){
        var player = videojs($('video', this).attr("id")); //dodelat
        $(this).on('hidden.bs.modal', function () { player.pause(); })
        $(this).on('shown.bs.modal', function () { player.play(); })
    });
   
    //for home video  
    /*
    $('.modalVideo').on('show.bs.modal', function() {
        $("#bgVideo").get(0).pause();        
    });
    
    $('.modalVideo').on('hidden.bs.modal', function (e) {
        $("#bgVideo").get(0).play();
    });
    */
    
});