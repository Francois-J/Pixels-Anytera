function spray(divSize, color, text, prob, elementID){
	let txt = new Text(text);
	txt.letters.forEach((obj)=>{
		obj.pixels.forEach((line)=>{
			line.forEach((pixel)=>{
				if(pixel.used == true){
					let rand = Math.random() *100;
					if(prob > rand && obj.specialChar == false){
						Pixel.turnOff(pixel)
					}
				}
			});
		});
	});
	loadText(document.getElementById(elementID), txt, divSize, color);
}
