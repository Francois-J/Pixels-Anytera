/**
	Class representing the full text
*/
class Text{
	constructor(txt){
		this.letters = [];
		for(let c of txt){
			this.letters.push(this.getLetter(c.toUpperCase()));
		}
	}

	/*
		Methode that transforms the typed letters into pixel letters
	*/
	getLetter(c){
		switch(c){
			case "A":
			return new LetterA(); break;
			case "B":
			return new LetterB(); break;
			case "C":
			return new LetterC(); break;
			case "D":
			return new LetterD(); break;
			case "E":
			return new LetterE(); break;
			case "F":
			return new LetterF(); break;
			case "G":
			return new LetterG(); break;
			case "H":
			return new LetterH(); break;
			case "I":
			return new LetterI(); break;
			case "J":
			return new LetterJ(); break;
			case "K":
			return new LetterK(); break;
			case "L":
			return new LetterL(); break;
			case "M":
			return new LetterM(); break;
			case "N":
			return new LetterN(); break;
			case "O":
			return new LetterO(); break;
			case "P":
			return new LetterP(); break;
			case "Q":
			return new LetterQ(); break;
			case "R":
			return new LetterR(); break;
			case "S":
			return new LetterS(); break;
			case "T":
			return new LetterT(); break;
			case "U":
			return new LetterU(); break;
			case "V":
			return new LetterV(); break;
			case "W":
			return new LetterW(); break;
			case "X":
			return new LetterX(); break;
			case "Y":
			return new LetterY(); break;
			case "Z":
			return new LetterZ(); break;
			case "0":
			return new Letter0(); break;
			case "1":
			return new Letter1(); break;
			case "2":
			return new Letter2(); break;
			case "3":
			return new Letter3(); break;
			case "4":
			return new Letter4(); break;
			case "5":
			return new Letter5(); break;
			case "6":
			return new Letter6(); break;
			case "7":
			return new Letter7(); break;
			case "8":
			return new Letter8(); break;
			case "9":
			return new Letter9(); break;
			case " ":
			return new Letter(" "); break;
			case "’":
			return new LetterApostrophe(); break;
			case "’":
			return new LetterApostrophe(); break;
			case ".":
			return new LetterDot(); break;
			case "!":
			return new LetterExclamation (); break;
			case "?":
			return new LetterQuestion(); break;
			case "^":
			return new LetterTriangle(); break;
			case "(":
			return new LetterParentLeft(); break;
			case ")":
			return new LetterParentRight(); break;
			case "{":
			return new LetterBracesLeft(); break;
			case "}":
			return new LetterBracesRight(); break;
			case "[":
			return new LetterBracketLeft(); break;
			case "]":
			return new LetterBracketRight(); break;
			case "+":
			return new LetterPlus(); break;
			case "-":
			return new LetterMinus(); break;
			case "=":
			return new LetterEquals(); break;
			case "#":
			return new LetterPound(); break;
			case ",":
			return new LetterComma(); break;
			case "|":
			return new LetterPipe(); break;
			case "_":
			return new LetterUnder(); break;
			case "/":
			return new LetterSlash(); break;
			case "\\":
			return new LetterBackSlash(); break;
			case "*":
			return new LetterEllipsis(); break;
			case ":":
			return new LetterColon(); break;
			case ";":
			return new LetterSemiColon(); break;
			case "&":
			return new LetterAnd(); break;
			case "%":
			return new LetterPercent(); break;
			default:
			return null; break;
		}
		return null;
	}
}