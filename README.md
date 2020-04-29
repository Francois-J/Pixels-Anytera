# Pixels-Anytera

Transform your text into pixel text made out of html elements.

## Installation

Just download the js files to your directory and import them tou your html like a regular script. 

## Usage

There a few function you can use : 
  - pixelize : directly transforms a string into pixel objets and creates html elements to add to the target container 

```javascript
function pixelize(divSize, defaultColor, text, outputFieldID)

- divSize : size of a signle pixel block (default : 5px)
- defaultColor : color the pixels (defaul : black)
- text : string that has to be transforme into pixel text
- outputFieldId : id of the target element which will contain the pixel text 

```
  - loadText : take pixel text and transforms it into html element 

```javascript
function loadText(element, text, divSize, defaultColor)

- element in which to insert the code
- text : Text object to transform
- divSize : size of a pixel
- defaultColor : color of a pixel

```

- spray : does the same as pixelize only you can give it a probability to not show a pixel

```javascript
function spray(divSize, color, text, prob, elementID)

- divSize : size of a pixel
- color : color of the pixel
- text : text being sprayed
- prob : probability for a pixel to not appear colored
- elementId : id of the html element in which to load the result

```

*Spray* is contained in the *spray.js* file and isn't necessary to run the rest of the project. I just addes it as it's part of the game I created where you have to guess slogans or idoms that are pixelized and are missing some pixels (self promo : [pixels.anytera.com](http://pixels.anytera.com))

If you're only interested in the pixel object just follow the comments in *text.js*. To add more valid character cahnge the regex in *pixelize.js*, add it to *letter.js* and to ths switch in *text.js*

## License
[The Unlicense](https://unlicense.org/) 
