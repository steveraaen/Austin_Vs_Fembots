var austin = 
{
	'name': 'Austin Powers',
	'attackpts': 15,
	'strength': 200,
	'defendpts': -40,	
	'picture' : ('<img id = "ap" src ="./assets/images/austin.jpg">')
}
var fembots =
 {
	'name': 'Fembots',
	'strength': 300,
	'attackpts': 30,
	'defendpts': -35,
	'picture' : ('<img id = "fem"src ="./assets/images/fembots.jpg">')
}
var drevil =
 {
	'name': 'Dr Evil',
	'strength': 150,
	'attackpts': 20,
	'defendpts': -60,
	'picture' : ('<img id = "de" src ="./assets/images/dr_evil.jpg">')
}
var fatbastard =
	{
	'name': 'Fat Bastard',
	'strength': 250,
	'attackpts': 10,
	'defendpts': -40,
	'picture' : ('<img id = "fb" src ="./assets/images/fat_bastard.jpeg">')
};
var players = [austin, fembots, drevil, fatbastard];
var p1s = 0,p1a = 0,p1d = 0,p2s = 0,p2s = 0,p2s = 0, pl1, pl2, p1n, p2n ;
$(document).ready(function(){

for(var i = 0; i < players.length; i++){
//Make divs for players starting position
	var player = $('<div class = "col-md-3 playerCont"></div>');
// assign attributes for name, picture and strength
		player.attr('data-name', players[i].name);
		player.attr("data-attackpts", players[i].attackpts);
		player.attr("data-defendpts", players[i].defendpts);
		player.attr("data-strength", players[i].strength);
		player.attr("data-pic", players[i].picture);
		player.text(player.data('name'))
		p1n = player.text(player.data('strength'));

//set the html for each new div to all 3 values 
		player.html(player.data('name') + player.data('pic') + player.data('strength'))
//append new divs to top row
		$("#start").append(player);
}
//make click handlers
$('div').one('click', '.playerCont', function (){
	$(this).removeClass('playerCont').addClass('playerOne')
	$('.playerCont').not(this).appendTo('#idlePlayers').removeClass('playerCont').addClass('idlePlayers');
	  pl1 = $(this);
	  p1n = parseInt(pl1.data('strength')) + parseInt(pl1.data('attackpts'));
	  console.log(pl1)
});
function pick(){
$('div').one('click', '.idlePlayers', function (){
	$(this).appendTo('#enemy').removeClass('idlePlayers').addClass('enemy');
	pl2 = $(this);
	p2n = parseInt(pl2.data('strength')) + parseInt(pl2.data('attackpts'));
	});
};
pick();
$('#idlePlayers').off('click', '.idlePlayers');
$('div').on('click', '.action', function(){

		p1n = p1n + parseInt(pl1.data('attackpts'));
		p2n = p2n + parseInt(pl2.data('defendpts'));

		var newPl1 = $('.playerOne').data('name') + $('.playerOne').data('pic') + p1n;
		var newPl2 = $('.enemy').data('name') + $('.enemy').data('pic') + p2n;
			$('.playerOne').html(newPl1) ;
			$('.enemy').html(newPl2); 
			$('#enemyStatus').html("You attacked  " + $('.enemy').data('name') + "  for <b> " + $('.enemy').data('defendpts') + "</b>  damage. <br>" +
			$('.enemy').data('name') + "  attacked you back for <b> " + $('.playerOne').data('defendpts') + "</b>  damage.");
		console.log(p2n)

		if(p2n <= 0){
			$('#enemy').html('');
			$('#enemyStatus').html("You won.  Pick another opponent")
			pick();
		}

		else if(p1n <= 0){
			$('#enemyStatus').html("You have been defeted.  Game Over")
			$('#replay').append('<button>Replay</button>')
		}
		
		});
});



















