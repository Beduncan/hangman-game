 //global vari

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
 var choosenword;
 var Underscores = [];
 var rightguess =0;
 var wrongguess =[];
 var guessesleft = 11;
 var usersguess = [];  
 var winC = 0;


//ready function 



//choose word randomly 
choosenword = pokemon[Math.floor(Math.random()*pokemon.length)];
	//checking word choose 
	console.log(choosenword);
//create underscores based on length
for(var i =0; i < choosenword.length; i++)
{
 	Underscores.push('_');
}	

//getting keyypress 
document.onkeyup = function(event)
{
	usersguess = event.key;
	console.log(usersguess); 
	//if users guess is right 
	if(choosenword.indexOf(usersguess) > -1) 
	{
		for (var i =0; i < choosenword.length; i++)
		{
		 	// if userguess is in the word fill in undersocres 
		 	if(choosenword[i] === usersguess)
			{		
		 	Underscores[i] = usersguess;
		 	console.log(Underscores.join(' '));
		 	display();
		 	}
		 	// if guesses is right add letter to underscores 
		 	if (Underscores[i] === usersguess)
		 	{
		 		rightguess++;
		 	}
		}
	}
	
			// else user is worng 	
			else
			{
				wrongguess.push(usersguess);
				console.log(wrongguess);
				guessesleft--;
				display();
			}			
			


function display() 
{
	// geting elements from id 
	document.getElementById("score").innerHTML = Underscores.join(' ');
	document.getElementById("left").innerHTML =("you have " + guessesleft + " guesses left");
	document.getElementById("lettersguessed").innerHTML = (wrongguess);
}


function winlose()
{	
	//if you win	
	if(rightguess == choosenword.length)
	{
		alert("You are The Pokemon Champion");	
	}
	 		if(rightguess == choosenword.length)
			{
				window.location = 'https://beduncan.github.io/hangman-game/'; 
			}
	//if you lose
	if(guessesleft === 0)
	{
	alert("You are Not The Pokemon Champion")
	}
		if (guessesleft === 0)
		{
	    	window.location = 'https://beduncan.github.io/hangman-game/'; 
		}

}
//onkeyclose
}
