'use strict';

const inputElm = document.querySelector('.container form input[type="text"]');
const currentInputElm = document.querySelector('.container form input[name="display"]');
// operator selecting start here
let allCancelElm = document.querySelector('#allCancel');
let oneCancelElm = document.querySelector('#oneCancel');
let modolusElm = document.querySelector('#modolus');
let divideElm = document.querySelector('#divide');
let entoElm = document.querySelector('#ento');
let miniseElm = document.querySelector('#minise');
let pluesElm = document.querySelector('#plues');
let dotElm = document.querySelector('#dot');
let equelElm = document.querySelector('#equel');

// number selecting start here
let num0Elm = document.querySelector('#zero')
let num1Elm = document.querySelector('#one')
let num2Elm = document.querySelector('#two')
let num3Elm = document.querySelector('#three')
let num4Elm = document.querySelector('#four')
let num5Elm = document.querySelector('#five')
let num6Elm = document.querySelector('#six')
let num7Elm = document.querySelector('#seven')
let num8Elm = document.querySelector('#eight')
let num9Elm = document.querySelector('#nine')

let numberSoundEffect = new Audio("audio/number-button.wav");
let operatorSoundEffect = new Audio("audio/operator-button.wav");
let cancelButtonSoundEffect = new Audio("audio/cancel-button.wav");
let nameCancelButtonSoundEffect = new Audio("audio/name-cancel-button.wav");
let equelButtonEffect = new Audio("audio/equal-button.wav")

// Operator Design start here
//one
allCancelElm.addEventListener('mousedown',() =>allCancelElm.style.border = '2px solid #fff')
allCancelElm.addEventListener('mouseup',() =>allCancelElm.style.border = '2px solid red')
allCancelElm.addEventListener('click',() =>cancelButtonSoundEffect.play())
//one
oneCancelElm.addEventListener('mousedown',() =>oneCancelElm.style.border = '2px solid #fff')
oneCancelElm.addEventListener('mouseup',() =>oneCancelElm.style.border = '2px solid red')
oneCancelElm.addEventListener('click',() =>nameCancelButtonSoundEffect.play())
//one
modolusElm.addEventListener('mousedown',() =>modolusElm.style.border = '2px solid #fff')
modolusElm.addEventListener('mouseup',() =>modolusElm.style.border = '2px solid #000')
modolusElm.addEventListener('click',() => operatorSoundEffect.play())
//one
divideElm.addEventListener('mousedown',() =>divideElm.style.border = '2px solid #fff')
divideElm.addEventListener('mouseup',() =>divideElm.style.border = '2px solid #000')
divideElm.addEventListener('click',() => operatorSoundEffect.play())
//one
entoElm.addEventListener('mousedown',() =>entoElm.style.border = '2px solid #fff')
entoElm.addEventListener('mouseup',() =>entoElm.style.border = '2px solid #000')
entoElm.addEventListener('click',() => operatorSoundEffect.play())
//one
miniseElm.addEventListener('mousedown',() =>miniseElm.style.border = '2px solid #fff')
miniseElm.addEventListener('mouseup',() =>miniseElm.style.border = '2px solid #000')
miniseElm.addEventListener('click',() => operatorSoundEffect.play())
//one
pluesElm.addEventListener('mousedown',() =>pluesElm.style.border = '2px solid #fff')
pluesElm.addEventListener('mouseup',() =>pluesElm.style.border = '2px solid #000')
pluesElm.addEventListener('click',() => operatorSoundEffect.play())
//one
dotElm.addEventListener('mousedown',() =>dotElm.style.border = '2px solid #fff')
dotElm.addEventListener('mouseup',() =>dotElm.style.border = '2px solid #000')
dotElm.addEventListener('click',() => operatorSoundEffect.play())
//one
equelElm.addEventListener('mousedown',() =>equelElm.style.border = '2px solid #fff')
equelElm.addEventListener('mouseup',() =>equelElm.style.border = '2px solid #000')
modolusElm.addEventListener('click',() => operatorSoundEffect.play())
//one
equelElm.addEventListener('mousedown',() =>equelElm.style.color = '#000')
equelElm.addEventListener('mouseup',() =>equelElm.style.color = ' #fff')
equelElm.addEventListener('click',() => equelButtonEffect.play())


// zero
num0Elm.addEventListener('mousedown',() =>num0Elm.style.border = '2px solid #fff')
num0Elm.addEventListener('mouseup',() =>num0Elm.style.border = '2px solid #000')
num0Elm.addEventListener('click',() => numberSoundEffect.play())
// zero
num1Elm.addEventListener('mousedown',() =>num1Elm.style.border = '2px solid #fff')
num1Elm.addEventListener('mouseup',() =>num1Elm.style.border = '2px solid #000')
num1Elm.addEventListener('click',() => numberSoundEffect.play())
// zero
num2Elm.addEventListener('mousedown',() =>num2Elm.style.border = '2px solid #fff')
num2Elm.addEventListener('mouseup',() =>num2Elm.style.border = '2px solid #000')
num2Elm.addEventListener('click',() => numberSoundEffect.play())
// zero
num3Elm.addEventListener('mousedown',() =>num3Elm.style.border = '2px solid #fff')
num3Elm.addEventListener('mouseup',() =>num3Elm.style.border = '2px solid #000')
num3Elm.addEventListener('click',() => numberSoundEffect.play())
// zero
num4Elm.addEventListener('mousedown',() =>num4Elm.style.border = '2px solid #fff')
num4Elm.addEventListener('mouseup',() =>num4Elm.style.border = '2px solid #000')
num4Elm.addEventListener('click',() => numberSoundEffect.play())
// zero
num5Elm.addEventListener('mousedown',() =>num5Elm.style.border = '2px solid #fff')
num5Elm.addEventListener('mouseup',() =>num5Elm.style.border = '2px solid #000')
num5Elm.addEventListener('click',() => numberSoundEffect.play())
// zero
num6Elm.addEventListener('mousedown',() =>num6Elm.style.border = '2px solid #fff')
num6Elm.addEventListener('mouseup',() =>num6Elm.style.border = '2px solid #000')
num6Elm.addEventListener('click',() => numberSoundEffect.play())
// zero
num7Elm.addEventListener('mousedown',() =>num7Elm.style.border = '2px solid #fff')
num7Elm.addEventListener('mouseup',() =>num7Elm.style.border = '2px solid #000')
num7Elm.addEventListener('click',() => numberSoundEffect.play())
// zero
num8Elm.addEventListener('mousedown',() =>num8Elm.style.border = '2px solid #fff')
num8Elm.addEventListener('mouseup',() =>num8Elm.style.border = '2px solid #000')
num8Elm.addEventListener('click',() => numberSoundEffect.play())
// zero
num9Elm.addEventListener('mousedown',() =>num9Elm.style.border = '2px solid #fff')
num9Elm.addEventListener('mouseup',() =>num9Elm.style.border = '2px solid #000')
num9Elm.addEventListener('click',() => numberSoundEffect.play())


// updating start here
equelElm.addEventListener('click',(evt) => 
{
	evt.preventDefault();
		
	if(Number(currentInputElm.value) !== Number(currentInputElm.value))
	{
		currentInputElm.value = '';
	}
});


