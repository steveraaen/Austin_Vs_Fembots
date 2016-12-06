var austin = 
{
	'name': 'Austin Powers',
	'strength': 200,
	'picture' : ('<img id = "ap" src ="./assets/images/austin.jpg">')
}
var fembots =
 {
	'name': 'Fembots',
	'strength': 300,
	'picture' : ('<img id = "fem"src ="./assets/images/fembots.jpg">')
}
var drevil =
 {
	'name': 'Dr Evil',
	'strength': 150,
	'picture' : ('<img id = "de" src ="./assets/images/dr_evil.jpg">')
}
var fatbastard =
	{
	'name': 'Fat Bastard',
	'strength': 250,
	'picture' : ('<img id = "fb" src ="./assets/images/fat_bastard.jpeg">')
};
var players = [austin, fembots, drevil, fatbastard];

$(document).ready(function(){

for(var i = 0; i < players.length; i++){
//Make divs for players starting position
	var player = $('<div class = "player col-md-3 playerCont"></div>');
// assign attributes for name, picture and strength
		player.attr('data-name', players[i].name);
		player.text(player.data('name'))

		player.attr("data-strength", players[i].strength);
		player.text(player.data('strength'));
		player.attr("data-pic", players[i].picture);
//set the html for each new div to all 3 values 
		player.html(player.data('name') + player.data('pic') + player.data('strength'))
//append new divs to top row
		$("#start").append(player);
}
//make click handlers
$('.playerCont').on('click', function(){
	$(this).toggleClass("playerContRed").toggleClass("playerCont");
	alert ($(this).data('name') + '  has  ' + $(this).data('strength') + '  power left');
});
});
























