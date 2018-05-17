$(document).ready(function () {
  //Note, you could also add a CSS class in on-page-wonder.css to alter the text color
  $('#targetButton').hover(function () {
    $('#targetText').css("color", "green");
  },
  function () {
    $('#targetText').css('color', 'white');
  });
})