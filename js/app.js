'use strict';

let counter = 0;

let userName = prompt('What is your name?');

alert(userName + ', welcome to my website!');

let hasExcitement = prompt('Are you excited for learning?').toLowerCase();

console.log(hasExcitement);

inputValidator(hasExcitement);
console.log(counter);

let hasRest = prompt('Are you getting enough rest?').toLowerCase();

inputValidator(hasRest);
console.log(counter);

let hasWater = prompt('Do you have your water bottle?').toLowerCase();

inputValidator(hasWater);
console.log(counter);

let hasStretched = prompt('Do you get a stretch in during breaks?').toLowerCase();

inputValidator(hasStretched);
console.log(counter);

let hasCoffee = prompt('Have you had or currently having coffee?').toLowerCase();

inputValidator(hasCoffee);
console.log(counter);


if (counter > 1){
  alert(userName +', sounds like your ready!');
} else {
  alert(userName + ', I am sure you will be fine.');
}

function inputValidator(input){

  if(input === 'yes' || input === 'yeah' || input === 'y'){
    alert('Nice!');
    counter += 1;
  } else if (input === 'no' || input === 'nope' || input === 'n'){
    alert('It will probably be fine.');
  } else {
    alert('Please stick to "Yes" or "No" answers.');
  }
}
