$(document).ready(function() {
    $(".play-icon").click(function() {
      $(".pop-video").toggleClass("show");
      $(".overlay").toggleClass("show");
    });

    $(".overlay").click(function() {
        $(".pop-video").toggleClass("show");
        $(this).toggleClass("show");
      });
  });