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
//choose word randomly 

 var randomItem = pokemon[Math.floor(Math.random()*pokemon.length)];
 var choosenword = randomItem; 	
 var Underscore =[];
 
console.log(choosenword);
 //create underscores based on length
var genrateunderscore = () => {
	for(var i =0; i < choosenword.length; i++){
		Underscore.push('_');
	}
	return Underscore;
}




console.log(genrateunderscore());
 
//capture users guess  
document.addEventListener('keypress', (event) => {
	var keycode = event.keyCode;
	console.log(event);
});