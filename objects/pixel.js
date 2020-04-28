
/**
	Object representing a pixel
	l : line
	c : column
	on : pixel is colored or not
	used : pixel is used in char or not
*/
class Pixel{
	constructor(l, c, on) {
		this.l = l? l : null;
		this.c = c? c : null;
		this.on = on? on : false;
		this.used = false;
	}

	turnOn(){
		this.on= true;
	}

	turnOff(){
		this.on= false;
	}
	switch(){
		this.on= !this.on;
	}

	used(){
		this.used = true;
	}

	init(){
		this.used = true;
		this.on = true;
	}

	static turnOff(pix){
		pix.on = false;
	}

	static turnOn(pix){
		pix.on = true;
	}
}