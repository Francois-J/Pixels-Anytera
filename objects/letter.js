/**
	Class representing a single pixel letter
	Parent of every letter 
*/
class Letter{
	constructor(s){
		this.letter =s;
		this.pixels = [];
		this.specialChar = false;
		/**
			attribut to create a list of pixels
			l : number of lines
			c : number of columns
		*/
		for(let i = 0; i < 7; i++){
			if(!this.pixels[i]){
				this.pixels[i] = [];
			}
			for(let j = 0; j < 7; j++){
				this.pixels[i].push(new Pixel(i,j));
			}
		}
	}

	// for debug purposes, shows the disposition of the letter in string form
	toString(){
		let retour = "";
		this.pixels.forEach((line)=>{
			line.forEach((pixel)=>{
				retour += pixel.on == true? "O":"_";
			});
			retour += "\n";
		});
		return retour;
	}
}
/********************************************************/
/*	Every letter has its own object that extends Letter	*/
/********************************************************/

/*
_______
__OO___
_O__O__
_O__O__
_OOOO__
_O__O__
_______
*/
class LetterA extends Letter{
	constructor(){
		super("A");
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[2][1].init();
		this.pixels[2][4].init();
		this.pixels[3][1].init();
		this.pixels[3][4].init();
		this.pixels[4][1].init();
		this.pixels[4][2].init();
		this.pixels[4][3].init();
		this.pixels[4][4].init();
		this.pixels[5][1].init();
		this.pixels[5][4].init();
	}
}
/*
_______
_OOO___
_O__O__
_OOO___
_O__O__
_OOO___
_______
*/
class LetterB extends Letter{
	constructor(){
		super("B");
		this.pixels[1][1].init();
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[2][1].init();
		this.pixels[2][4].init();
		this.pixels[3][1].init();
		this.pixels[3][2].init();
		this.pixels[3][3].init();
		this.pixels[4][1].init();
		this.pixels[4][4].init();
		this.pixels[5][1].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
	}
}
/*
_______
__OO___
_O__O__
_O_____
_O__O__
__OO___
_______
*/
class LetterC extends Letter{
	constructor(){
		super("C");
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[2][1].init();
		this.pixels[2][4].init();
		this.pixels[2][4].init();
		this.pixels[3][1].init();
		this.pixels[4][1].init();
		this.pixels[4][4].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
	}
}
/*
_______
_OOO___
_O__O__
_O__O__
_O__O__
_OOO___
_______
*/
class LetterD extends Letter{
	constructor(){
		super("D");
		this.pixels[1][1].init();
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[2][1].init();
		this.pixels[2][4].init();
		this.pixels[3][1].init();
		this.pixels[3][4].init();
		this.pixels[4][1].init();
		this.pixels[4][4].init();
		this.pixels[5][1].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
	}
}
/*
_______
_OOOO__
_O_____
_OO____
_O_____
_OOOO__
_______
*/
class LetterE extends Letter{
	constructor(){
		super("E");
		this.pixels[1][1].init();
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[1][4].init();
		this.pixels[2][1].init();
		this.pixels[3][1].init();
		this.pixels[3][2].init();
		this.pixels[4][1].init();
		this.pixels[5][1].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
		this.pixels[5][4].init();
	}
}
/*
_______
_OOOOO_
_O_____
_OOO___
_O_____
_O_____
_______
*/
class LetterF extends Letter{
	constructor(){
		super("F");
		this.pixels[1][1].init();
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[1][4].init();
		this.pixels[1][5].init();
		this.pixels[2][1].init();
		this.pixels[3][1].init();
		this.pixels[3][2].init();
		this.pixels[3][3].init();
		this.pixels[4][1].init();
		this.pixels[5][1].init();
	}
}
/*
_______
__OO___
_O_____
_O_OO__
_O__O__
__OO___
_______
*/
class LetterG extends Letter{
	constructor(){
		super("G");
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[2][1].init();
		this.pixels[3][1].init();
		this.pixels[3][3].init();
		this.pixels[3][4].init();
		this.pixels[4][1].init();
		this.pixels[4][4].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
	}
}
/*
_______
_O__O__
_O__O__
_OOOO__
_O__O__
_O__O__
_______
*/
class LetterH extends Letter{
	constructor(){
		super("H");
		this.pixels[1][1].init();
		this.pixels[1][4].init();
		this.pixels[2][1].init();
		this.pixels[2][4].init();
		this.pixels[3][1].init();
		this.pixels[3][2].init();
		this.pixels[3][3].init();
		this.pixels[3][4].init();
		this.pixels[4][1].init();
		this.pixels[4][4].init();
		this.pixels[5][1].init();
		this.pixels[5][4].init();
	}
}
/*
_______
__OOO__
___O___
___O___
___O___
__OOO__
_______
*/
class LetterI extends Letter{
	constructor(){
		super("I");
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[1][4].init();
		this.pixels[2][3].init();
		this.pixels[3][3].init();
		this.pixels[4][3].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
		this.pixels[5][4].init();
	}
}
/*
_______
___OO__
____O__
____O__
_O__O__
__OO___
_______
*/
class LetterJ extends Letter{
	constructor(){
		super("J");
		this.pixels[1][3].init();
		this.pixels[1][4].init();
		this.pixels[2][4].init();
		this.pixels[3][4].init();
		this.pixels[4][1].init();
		this.pixels[4][4].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
	}
}
/*
_______
_O__O__
_O_O___
_OO____
_O_O___
_O__O__
_______
*/
class LetterK extends Letter{
	constructor(){
		super("K");
		this.pixels[1][1].init();
		this.pixels[1][4].init();
		this.pixels[2][1].init();
		this.pixels[2][3].init();
		this.pixels[3][1].init();
		this.pixels[3][2].init();
		this.pixels[4][1].init();
		this.pixels[4][3].init();
		this.pixels[5][1].init();
		this.pixels[5][4].init();
	}
}
/*
_______
_O_____
_O_____
_O_____
_O_____
_OOOO__
_______
*/
class LetterL extends Letter{
	constructor(){
		super("L");
		this.pixels[1][1].init();
		this.pixels[2][1].init();
		this.pixels[3][1].init();
		this.pixels[4][1].init();
		this.pixels[5][1].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
		this.pixels[5][4].init();
	}
}
/*
_______
_O___O_
_OO_OO_
_O_O_O_
_O___O_
_O___O_
_______
*/
class LetterM extends Letter{
	constructor(){
		super("M");
		this.pixels[1][1].init();
		this.pixels[1][5].init();
		this.pixels[2][1].init();
		this.pixels[2][2].init();
		this.pixels[2][4].init();
		this.pixels[2][5].init();
		this.pixels[3][1].init();
		this.pixels[3][3].init();
		this.pixels[3][5].init();
		this.pixels[4][1].init();
		this.pixels[4][5].init();
		this.pixels[5][1].init();
		this.pixels[5][5].init();
	}
}
/*
_______
_O__O__
_OO_O__
_O_OO__
_O__O__
_O__O__
_______
*/
class LetterN extends Letter{
	constructor(){
		super("N");
		this.pixels[1][1].init();
		this.pixels[1][4].init();
		this.pixels[2][1].init();
		this.pixels[2][2].init();
		this.pixels[2][4].init();
		this.pixels[3][1].init();
		this.pixels[3][3].init();
		this.pixels[3][4].init();
		this.pixels[4][1].init();
		this.pixels[4][4].init();
		this.pixels[5][1].init();
		this.pixels[5][4].init();
	}
}
/*_______
__OO___
_O__O__
_O__O__
_O__O__
__OO___
_______
*/
class LetterO extends Letter{
	constructor(){
		super("O");
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[2][1].init();
		this.pixels[2][4].init();
		this.pixels[3][1].init();
		this.pixels[3][4].init();
		this.pixels[4][1].init();
		this.pixels[4][4].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
	}
}
/*
_______
_OOO___
_O__O__
_OOO___
_O_____
_O_____
_______
*/
class LetterP extends Letter{
	constructor(){
		super("P");
		this.pixels[1][1].init();
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[2][1].init();
		this.pixels[2][4].init();
		this.pixels[3][1].init();
		this.pixels[3][2].init();
		this.pixels[3][3].init();
		this.pixels[4][1].init();
		this.pixels[5][1].init();
	}
}
/*
_______
__OO___
_O__O__
_O__O__
_O_OO__
__OO_O_
_______
*/
class LetterQ extends Letter{
	constructor(){
		super("Q");
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[2][1].init();
		this.pixels[2][4].init();
		this.pixels[3][1].init();
		this.pixels[3][4].init();
		this.pixels[4][1].init();
		this.pixels[4][3].init();
		this.pixels[4][4].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
		this.pixels[5][5].init();
	}
}
/*
_______
_OOO___
_O__O__
_OOO___
_O__O__
_O__O__
_______
*/
class LetterR extends Letter{
	constructor(){
		super("R");
		this.pixels[1][1].init();
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[2][1].init();
		this.pixels[2][4].init();
		this.pixels[3][1].init();
		this.pixels[3][2].init();
		this.pixels[3][3].init();
		this.pixels[4][1].init();
		this.pixels[4][4].init();
		this.pixels[5][1].init();
		this.pixels[5][4].init();
	}
}
/*
_______
__OOO__
_O_____
__OO___
____O__
_OOO___
_______
*/
class LetterS extends Letter{
	constructor(){
		super("S");
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[1][4].init();
		this.pixels[2][1].init();
		this.pixels[3][2].init();
		this.pixels[3][3].init();
		this.pixels[4][4].init();
		this.pixels[5][1].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
	}
}
/*
_______
_OOOOO_
___O___
___O___
___O___
___O___
_______
*/
class LetterT extends Letter{
	constructor(){
		super("T");
		this.pixels[1][1].init();
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[1][4].init();
		this.pixels[1][5].init();
		this.pixels[2][3].init();
		this.pixels[3][3].init();
		this.pixels[4][3].init();
		this.pixels[5][3].init();
	}
}
/*
_______
_O__O__
_O__O__
_O__O__
_O__O__
__OO___
_______
*/
class LetterU extends Letter{
	constructor(){
		super("U");
		this.pixels[1][1].init();
		this.pixels[1][4].init();
		this.pixels[2][1].init();
		this.pixels[2][4].init();
		this.pixels[3][1].init();
		this.pixels[3][4].init();
		this.pixels[4][1].init();
		this.pixels[4][4].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
	}
}
/*
_______
_O___O_
_O___O_
_O___O_
__O_O__
___O___
_______
*/
class LetterV extends Letter{
	constructor(){
		super("V");
		this.pixels[1][1].init();
		this.pixels[1][5].init();
		this.pixels[2][1].init();
		this.pixels[2][5].init();
		this.pixels[3][1].init();
		this.pixels[3][5].init();
		this.pixels[4][2].init();
		this.pixels[4][4].init();
		this.pixels[5][3].init();
	}
}
/*
_______
_O___O_
_O___O_
_O_O_O_
_O_O_O_
__O_O__
_______
*/
class LetterW extends Letter{
	constructor(){
		super("W");
		this.pixels[1][1].init();
		this.pixels[1][5].init();
		this.pixels[2][1].init();
		this.pixels[2][5].init();
		this.pixels[3][1].init();
		this.pixels[3][3].init();
		this.pixels[3][5].init();
		this.pixels[4][1].init();
		this.pixels[4][3].init();
		this.pixels[4][5].init();
		this.pixels[5][2].init();
		this.pixels[5][4].init();
	}
}
/*
_______
_O___O_
__O_O__
___O___
__O_O__
_O___O_
_______
*/
class LetterX extends Letter{
	constructor(){
		super("X");
		this.pixels[1][1].init();
		this.pixels[1][5].init();
		this.pixels[2][2].init();
		this.pixels[2][4].init();
		this.pixels[3][3].init();
		this.pixels[4][2].init();
		this.pixels[4][4].init();
		this.pixels[5][1].init();
		this.pixels[5][5].init();
	}
}
/*
_______
_O___O_
__O_O__
___O___
___O___
___O___
_______
*/
class LetterY extends Letter{
	constructor(){
		super("Y");
		this.pixels[1][1].init();
		this.pixels[1][5].init();
		this.pixels[2][2].init();
		this.pixels[2][4].init();
		this.pixels[3][3].init();
		this.pixels[4][3].init();
		this.pixels[5][3].init();
	}
}
/*
_______
_OOOO__
____O__
__OO___
_O_____
_OOOO__
_______
*/
class LetterZ extends Letter{
	constructor(){
		super("Z");
		this.pixels[1][1].init();
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[1][4].init();
		this.pixels[2][4].init();
		this.pixels[3][2].init();
		this.pixels[3][3].init();
		this.pixels[4][1].init();
		this.pixels[5][1].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
		this.pixels[5][4].init();
	}
}

class Letter0 extends Letter{
	constructor(){
		super("0");
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[2][1].init();
		this.pixels[2][4].init();
		this.pixels[3][1].init();
		this.pixels[3][3].init();
		this.pixels[3][4].init();
		this.pixels[4][1].init();
		this.pixels[4][2].init();
		this.pixels[4][4].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
	}
}

class Letter1 extends Letter{
	constructor(){
		super("1");
		this.pixels[1][3].init();
		this.pixels[2][2].init();
		this.pixels[2][3].init();
		this.pixels[3][3].init();
		this.pixels[4][3].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
		this.pixels[5][4].init();
	}
}

class Letter2 extends Letter{
	constructor(){
		super("2");
		this.pixels[1][1].init();
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[2][4].init();
		this.pixels[3][3].init();
		this.pixels[4][2].init();
		this.pixels[5][1].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
		this.pixels[5][4].init();
	}
}

class Letter3 extends Letter{
	constructor(){
		super("3");
		this.pixels[1][1].init();
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[2][4].init();
		this.pixels[3][3].init();
		this.pixels[3][2].init();
		this.pixels[4][4].init();
		this.pixels[5][1].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
	}
}

class Letter4 extends Letter{
	constructor(){
		super("4");
		this.pixels[1][3].init();
		this.pixels[2][3].init();
		this.pixels[2][2].init();
		this.pixels[3][3].init();
		this.pixels[3][1].init();
		this.pixels[4][1].init();
		this.pixels[4][2].init();
		this.pixels[4][3].init();
		this.pixels[4][4].init();
		this.pixels[5][3].init();
	}
}

class Letter5 extends Letter{
	constructor(){
		super("5");
		this.pixels[1][1].init();
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[1][4].init();
		this.pixels[2][1].init();
		this.pixels[3][1].init();
		this.pixels[3][2].init();
		this.pixels[3][3].init();
		this.pixels[4][4].init();
		this.pixels[5][1].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
	}
}

class Letter6 extends Letter{
	constructor(){
		super("6");
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[2][1].init();
		this.pixels[3][1].init();
		this.pixels[3][2].init();
		this.pixels[3][3].init();
		this.pixels[4][1].init();
		this.pixels[4][4].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
	}
}

class Letter7 extends Letter{
	constructor(){
		super("7");
		this.pixels[1][1].init();
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[1][4].init();
		this.pixels[2][4].init();
		this.pixels[3][3].init();
		this.pixels[4][2].init();
		this.pixels[5][2].init();
	}
}

class Letter8 extends Letter{
	constructor(){
		super("8");
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[2][1].init();
		this.pixels[2][4].init();
		this.pixels[3][2].init();
		this.pixels[3][3].init();
		this.pixels[4][1].init();
		this.pixels[4][4].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
	}
}


class Letter9 extends Letter{
	constructor(){
		super("9");
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[2][1].init();
		this.pixels[2][4].init();
		this.pixels[3][4].init();
		this.pixels[3][2].init();
		this.pixels[3][3].init();
		this.pixels[4][4].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
	}
}


class LetterApostrophe extends Letter{
	constructor(){
		super("'");
		this.specialChar = true;
		this.pixels[1][2].init();
		this.pixels[2][2].init();
	}
}

class LetterDot extends Letter{
	constructor(){
		super(".");
		this.specialChar = true;
		this.pixels[5][2].init();
	}
}

class LetterExclamation extends Letter{
	constructor(){
		super("!");
		this.specialChar = true;
		this.pixels[1][2].init();
		this.pixels[2][2].init();
		this.pixels[3][2].init();
		this.pixels[5][2].init();
	}
}

class LetterQuestion extends Letter{
	constructor(){
		super("?");
		this.specialChar = true;
		this.pixels[1][1].init();
		this.pixels[1][2].init();
		this.pixels[2][3].init();
		this.pixels[2][3].init();
		this.pixels[3][2].init();
		this.pixels[5][2].init();
	}
}

class LetterTriangle extends Letter{
	constructor(){
		super("^");
		this.specialChar = true;
		this.pixels[1][3].init();
		this.pixels[2][2].init();
		this.pixels[2][4].init();
	}
}

class LetterParentLeft extends Letter{
	constructor(){
		super("(");
		this.specialChar = true;
		this.pixels[1][2].init();
		this.pixels[2][1].init();
		this.pixels[3][1].init();
		this.pixels[4][1].init();
		this.pixels[5][2].init();
	}
}

class LetterParentRight extends Letter{
	constructor(){
		super(")");
		this.specialChar = true;
		this.pixels[1][4].init();
		this.pixels[2][5].init();
		this.pixels[3][5].init();
		this.pixels[4][5].init();
		this.pixels[5][4].init();
	}
}

class LetterBracesLeft extends Letter{
	constructor(){
		super("{");
		this.specialChar = true;
		this.pixels[0][2].init();
		this.pixels[1][1].init();
		this.pixels[2][2].init();
		this.pixels[3][1].init();
		this.pixels[3][2].init();
		this.pixels[4][2].init();
		this.pixels[5][1].init();
		this.pixels[6][2].init();
	}
}

class LetterBracesRight extends Letter{
	constructor(){
		super("}");
		this.specialChar = true;
		this.pixels[0][4].init();
		this.pixels[1][5].init();
		this.pixels[2][4].init();
		this.pixels[3][5].init();
		this.pixels[3][4].init();
		this.pixels[4][4].init();
		this.pixels[5][5].init();
		this.pixels[6][4].init();
	}
}

class LetterBracketLeft extends Letter{
	constructor(){
		super("[");
		this.specialChar = true;
		this.pixels[1][1].init();
		this.pixels[1][2].init();
		this.pixels[2][1].init();
		this.pixels[3][1].init();
		this.pixels[4][1].init();
		this.pixels[5][2].init();
		this.pixels[5][1].init();
	}
}

class LetterBracketRight extends Letter{
	constructor(){
		super("]");
		this.specialChar = true;
		this.pixels[1][4].init();
		this.pixels[1][5].init();
		this.pixels[2][5].init();
		this.pixels[3][5].init();
		this.pixels[4][5].init();
		this.pixels[5][4].init();
		this.pixels[5][5].init();
	}
}

class LetterEquals extends Letter{
	constructor(){
		super("=");
		this.specialChar = true;
		this.pixels[2][2].init();
		this.pixels[2][3].init();
		this.pixels[2][4].init();
		this.pixels[4][2].init();
		this.pixels[4][3].init();
		this.pixels[4][4].init();
	}
}

class LetterPlus extends Letter{
	constructor(){
		super("+");
		this.specialChar = true;
		this.pixels[2][3].init();
		this.pixels[3][2].init();
		this.pixels[3][3].init();
		this.pixels[3][4].init();
		this.pixels[4][3].init();
	}
}

class LetterMinus extends Letter{
	constructor(){
		super("-");
		this.specialChar = true;
		this.pixels[3][2].init();
		this.pixels[3][3].init();
		this.pixels[3][4].init();
	}
}

class LetterPound extends Letter{
	constructor(){
		super("#");
		this.specialChar = true;
		this.pixels[1][2].init();
		this.pixels[1][4].init();
		this.pixels[2][1].init();
		this.pixels[2][2].init();
		this.pixels[2][3].init();
		this.pixels[2][4].init();
		this.pixels[2][5].init();
		this.pixels[3][2].init();
		this.pixels[3][4].init();
		this.pixels[4][1].init();
		this.pixels[4][2].init();
		this.pixels[4][3].init();
		this.pixels[4][4].init();
		this.pixels[4][5].init();
		this.pixels[5][2].init();
		this.pixels[5][4].init();
	}
}

class LetterComma extends Letter{
	constructor(){
		super(",");
		this.specialChar = true;
		this.pixels[5][2].init();
		this.pixels[6][1].init();
	}
}

class LetterPipe extends Letter{
	constructor(){
		super("|");
		this.specialChar = true;
		this.pixels[0][3].init();
		this.pixels[1][3].init();
		this.pixels[2][3].init();
		this.pixels[3][3].init();
		this.pixels[4][3].init();
		this.pixels[5][3].init();
		this.pixels[6][3].init();
		this.pixels[7][3].init();
	}
}

class LetterUnder extends Letter{
	constructor(){
		super("_");
		this.specialChar = true;
		this.pixels[5][1].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
		this.pixels[5][4].init();
		this.pixels[5][5].init();
	}
}

class LetterSlash extends Letter{
	constructor(){
		super("/");
		this.specialChar = true;
		this.pixels[1][5].init();
		this.pixels[2][4].init();
		this.pixels[3][3].init();
		this.pixels[4][2].init();
		this.pixels[5][1].init();
	}
}

class LetterBackSlash extends Letter{
	constructor(){
		super("\\");
		this.specialChar = true;
		this.pixels[1][1].init();
		this.pixels[2][2].init();
		this.pixels[3][3].init();
		this.pixels[4][4].init();
		this.pixels[5][5].init();
	}
}

class LetterEllipsis extends Letter{
	constructor(){
		super("*");
		this.specialChar = true;
		this.pixels[1][2].init();
		this.pixels[1][4].init();
		this.pixels[2][3].init();
		this.pixels[3][2].init();
		this.pixels[3][4].init();
	}
}

class LetterColon extends Letter{
	constructor(){
		super(":");
		this.specialChar = true;
		this.pixels[2][3].init();
		this.pixels[4][3].init();
	}
}

class LetterSemiColon extends Letter{
	constructor(){
		super(";");
		this.specialChar = true;
		this.pixels[2][2].init();
		this.pixels[5][2].init();
		this.pixels[6][1].init();
	}
}

class LetterAnd extends Letter{
	constructor(){
		super("&");
		this.specialChar = true;
		this.pixels[1][2].init();
		this.pixels[1][3].init();
		this.pixels[1][3].init();
		this.pixels[2][1].init();
		this.pixels[2][4].init();
		this.pixels[3][2].init();
		this.pixels[3][3].init();
		this.pixels[4][1].init();
		this.pixels[4][4].init();
		this.pixels[5][2].init();
		this.pixels[5][3].init();
		this.pixels[5][5].init();
	}
}

class LetterPercent extends Letter{
	constructor(){
		super("%");
		this.specialChar = true;
		this.pixels[1][5].init();
		this.pixels[1][1].init();
		this.pixels[2][4].init();
		this.pixels[3][3].init();
		this.pixels[4][2].init();
		this.pixels[5][1].init();
		this.pixels[5][5].init();
	}
}
