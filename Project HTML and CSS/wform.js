
$(document).ready(function(){
  $(".ug_details").hide();
  $(".skills_details").hide();
  $("#next").click(function(){
    $(".ug_details").show();
    $(".pg_details").hide()
    $(".skills_details").hide();
    $("#next1").click(function(){
      $(".skills_details").show();
      $(".ug_details").hide();
      $(".pg_details").hide()
      
    });
  });
});
