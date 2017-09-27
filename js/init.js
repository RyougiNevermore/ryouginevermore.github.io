(function($){
  $(function(){

    $('.modal').modal();
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $("#buy").click(function () {
      $('#pay').modal("open");
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space