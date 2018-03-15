$(document).keydown(function bouge(e) {
  if (e.keyCode == 38) {
  $('#flappy').animate({
    'margin-bottom': '+=100px'},
    speed=100, 'swing');
}
  if (e.keyCode == 40){
    $('#flappy').animate({
      'margin-top': '+=100px'},
      speed=100, 'swing');
  }
  if (e.keyCode == 39) {
    $('#flappy').animate({
      'margin-left': '+=100px'},
      speed=100, 'swing');
  }

  if (e.keyCode == 37) {
    $('#flappy').animate({
      'margin-right': '+=100px'},
      speed=100, 'swing');
    }
});



$("#flappy").click(function coucou(){
    alert('Coucou')
});


$('#tuyau').animate({
    'margin-right':'+=600px'},
    speed=3000, 'swing');
