$(document).keydown(function bougehaut(e) {
  if (e.keyCode == 38) {
  $('#flappy').animate({
    'margin-bottom': '+=100px'},
    speed=100, 'swing');
}});

$(document).keydown(function bougebas(e) {
  if (e.keyCode == 40) {
  $('#flappy').animate({
    'margin-top': '+=100px'},
    speed=100, 'swing');
}});

$(document).keydown(function bougedroite(e) {
  if (e.keyCode == 39) {
  $('#flappy').animate({
    'margin-left': '+=100px'},
    speed=100, 'swing');
}});

$(document).keydown(function bougegauche(e) {
  if (e.keyCode == 37) {
  $('#flappy').animate({
    'margin-right': '+=100px'},
    speed=100, 'swing');
}});

$("#flappy").click(function coucou(){
    alert('Coucou')
});
