var austin = 
{
	'name': 'Austin Powers',
	'attackpts': 15,
	'strength': 200,
	'defendpts': -40,	
	'picture' : ('<img id = "ap" src ="./assets/images/austin.jpg">'),
	'altpicture' : ('<img id = "altap" src ="./assets/images/austin-powers.gif">')
}
var fembots =
 {
	'name': 'Fembots',
	'strength': 300,
	'attackpts': 30,
	'defendpts': -35,
	'picture' : ('<img id = "fem"src ="./assets/images/fembots.jpg">'),
	'altpicture' : ('<img id = "altap" src ="./assets/images/fembots.gif">')
}
var drevil =
 {
	'name': 'Dr Evil',
	'strength': 150,
	'attackpts': 20,
	'defendpts': -60,
	'picture' : ('<img id = "de" src ="./assets/images/dr_evil.jpg">'),
	'altpicture' : ('<img id = "altap" src ="./assets/images/drevil.gif">')
}
var fatbastard =
	{
	'name': 'Fat Bastard',
	'strength': 250,
	'attackpts': 10,
	'defendpts': -40,
	'picture' : ('<img id = "fb" src ="./assets/images/fat_bastard.jpeg">'),
	'altpicture' : ('<img id = "altap" src ="./assets/images/fat_bastard.gif">')
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
		player.attr("data-altpic", players[i].altpicture);
		player.text(player.data('name'))
		p1n = player.text(player.data('strength'));

//set the html for each new div to all 3 values 
		player.html(player.data('name') + player.data('pic') + player.data('strength'))
//append new divs to top row
		$("#start").append(player);
}
//make click handlers.  First one selects the clicked player and moves the others to the idle players section
$('div').one('click', '.playerCont', function (){
	$(this).removeClass('playerCont').addClass('playerOne')
	$('.playerCont').not(this).appendTo('#idlePlayers').removeClass('playerCont').addClass('idlePlayers');
	  pl1 = $(this);
	  p1n = parseInt(pl1.data('strength')) + parseInt(pl1.data('attackpts'));
	});
// Second one selects the enemy via function and runs the function
function pick(){
$('div').one('click', '.idlePlayers', function (){
	$(this).appendTo('#enemy').removeClass('idlePlayers').addClass('enemy');
	pl2 = $(this);
	p2n = parseInt(pl2.data('strength')) + parseInt(pl2.data('attackpts'));
		});	
	};
pick();
$('#idlePlayers').off('click', '.idlePlayers');
// Third handler calculates player strength and game results
$('#clickHere').on('click', function(){
// Update players' strength
		p1n = p1n + parseInt(pl1.data('attackpts'));
		p2n = p2n + parseInt(pl2.data('defendpts'));
// Redfines players' objects with new strength and action (gif) images.
		var newPl1 = $('.playerOne').data('name') + $('.playerOne').data('altpic') + p1n;
		var newPl2 = $('.enemy').data('name') + $('.enemy').data('altpic') + p2n;
// Appends players' objects to the screen
			$('.playerOne').html(newPl1) ;
			$('.enemy').html(newPl2); 
			$('#enemyStatus').html("You attacked  " + $('.enemy').data('name') + "  for <b> " + $('.enemy').data('defendpts') + "</b>  damage. <br>" +
			$('.enemy').data('name') + "  attacked you back for <b> " + $('.playerOne').data('defendpts') + "</b>  damage.");
// Tracks players' status. If player 1 wins, run the pick function again
		if(p2n <= 0){
			$('#enemy').html('');
			$('#enemyStatus').html("You won.  Pick another opponent");
			pick();
/*			if ($('#idlePlayers').hasClass('.idlePlayers') === false){
				alert("Yeah Baby Yeah!");
			}*/
		}
		else if(p1n <= 0){
			$('#enemyStatus').html("You have been defeted.  Game Over")
			$('#replay').append('<button>Replay</button>')
		}

		});
});



















