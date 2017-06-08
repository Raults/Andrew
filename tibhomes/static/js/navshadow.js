$(document).ready(function(){
 $(window).scroll(function(){
  var y = $(window).scrollTop();
  if( y > 0 ){
      $("#top-shadow").show();
  } else {
      $("#top-shadow").hide();
  }
 });
})
