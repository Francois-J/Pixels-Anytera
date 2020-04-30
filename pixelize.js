/*
	Transforms text into the pixel text
	@divSize : size of a signle pixel block
	@defaultColor : color the pixels
	@text : string that has to be transforme into pixel text
	@outputFieldId : id of the element which will contain the pixel text
*/

function pixelize(divSize = 5, defaultColor = "black", text = "text", outputFieldID = "outputFieldID"){
	//console.log(divSize, defaultColor, text, outputFieldID);
	// only launch if text is given
	if(text != null && text.length > 0){
		text = text.toUpperCase();
		// validation that text has only authorized char
		if(validateInput(text)){
			let txt = new Text(text);
			let field = document.getElementById(outputFieldID);
			field.innerHTML = "";
			let masterDiv = document.createElement("div");
			masterDiv.style ="width: auto; height: auto; display : flex;";
			field.append(masterDiv);
			loadText(masterDiv, txt, divSize, defaultColor);
			sessionStorage.setItem("text", JSON.stringify(txt));
		}
	}else{
		let field = document.getElementById(outputFieldID);
		field.innerHTML =" ";
		field.style="height : auto; width: auto; min-width:100%; min-height:4rem;";
	}
}

/*
	Validation function to ensure only allowed charaters are typed
*/
function validateInput(s){
	var letters = /^[A-Z \'\.\?!\n^(){}\[\]+-=#,\|\\/:;\*0-9_%&’]*$/;
	if(s.match(letters)){
		return true;
	}
}
/*
	this function transforms the pixel text given into html by creating divs
	@element in which to insert the code
	@txt : Text object to transform
	@divSize : size of a pixel
	@defaultColor : color of a pixel
*/
function loadText(element, txt, divSize, defaultColor){
	element.innerHTML ="";
	let passage = 0;
	let minWidth = Math.min(divSize*7*txt.letters.length, element.offsetWidth);
	let checkPoint = new createLine(minWidth, divSize*7, "display : flex; flex-wrap: wrap;");
	let lineText = new createLine(minWidth, divSize*7, "display : flex; flex-wrap: wrap;");
	
	for(c of txt.letters){
		if(c != null){
			let squareLetter = createSquare(7*divSize, false, "display : bloc;");
			pixelLetter(squareLetter,c, divSize, defaultColor);
			lineText.append(squareLetter);
		}
	}
	element.append(lineText);
	element.style = " height :" +(Math.round(divSize* 7 * txt.letters.length/minWidth)+1) * divSize* 7+"px;";
}

// creates the div containing one letter
function pixelLetter(square,pixel, divSize, defaultColor){
	for(i = 0; i < 7; i++){
		let line = createLine(divSize*7, divSize, "display : flex;");
		for(j = 0; j < 7; j++){
			let element = createSquare(divSize, pixel.pixels[i][j].on, "display : bloc;",defaultColor);
			line.append(element);
		}
		square.append(line);
	}
}

// creates the single pixel with it's color
function createSquare(size, color, display, defaultColor){
	let square = document.createElement("div");
	square.style ="width: "+size+"px; height: "+size +"px;" + (color == true ? " background-color : "+defaultColor+";" : "")+ " "+ display +";";
	return square;
}

// creates a line in which the letters will comme
function createLine(width, height, display){
	let rectangle = document.createElement("div");
	rectangle.style ="width: "+width+"px; height: "+height +"px; "+display+";";
	return rectangle;
}


