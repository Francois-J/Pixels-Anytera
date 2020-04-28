/**
	Spray function generates the text given but with missing pixel (= none colored pixels)
	@divSize : size of a single pixel (in px)
	@color : color of the pixel
	@text : text being sprayed
	@prob : probability for a pixel to not appear colored
	@elementId : id of the html element in which to load the result
*/
function spray(divSize, color, text, prob, elementID){
	// transformation of the text in pixel text object
	let txt = new Text(text);
	txt.letters.forEach((obj)=>{
		obj.pixels.forEach((line)=>{
			line.forEach((pixel)=>{
				// once we reach a pixel that is used (should be colored) we generate a random number
				if(pixel.used == true){
					let rand = Math.random() *100;
					// I put an exception for special characters to not get spray
					if(prob > rand && obj.specialChar == false){
						Pixel.turnOff(pixel)
					}
				}
			});
		});
	});
	// finnaly loading the result into html with the loadText
	loadText(document.getElementById(elementID), txt, divSize, color);
}
