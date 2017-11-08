 //array of pokemon
 var pokemon = [
  'pickacho', 
  'squirtle', 
  'charmander', 
  'bulbasaur',
  'treecko', 
  'torchic',
  'mudkip',
  'cyndaquil',
  'totodile',
  'chikorita',  
  ];
 var randomItem;
 var Underscores = [];
 var rightguess =[];
 var wrongguess =[];
 var guessesleft = 10;
 var usersguess = [];  
///start game 
function startgame() {
	// body...
}

//choose word randomly 
randomItem = pokemon[Math.floor(Math.random()*pokemon.length)];
//checking word choose 
 console.log(randomItem);
 //create underscores based on length
	for(var i =0; i < randomItem.length; i++){
		Underscores.push('_');
	
	}
 //checking underscores 
 console.log(Underscores.join(" "));

 
//getting keyypress 
document.onkeyup = function(event)
{
	usersguess = event.key;
	console.log(usersguess); 
//if users guess is right 
	if(randomItem.indexOf(usersguess) > -1) 
	{
	 for (var i =0; i < randomItem.length; i++)
	 {
	 	//if userguess is in the word fill in undersocres 
	 	if(randomItem[i] === usersguess)
	 	{
	 		Underscores[i] = usersguess;
	 		console.log(Underscores.join(' '));
	 	}
	 }
	}
//else user is worng 	
	else{
		wrongguess.push(usersguess);
		console.log(wrongguess);
	guessesleft--;
	console.log("guess you have left" + guessesleft);
	}
//if you win 
if (Underscores ==0)
{
	alert("you are the pokemon master")
}
// if you lose 
if(guessesleft == 0)
{
	alert("you are not the best pokemon trainer")
}
}
	



