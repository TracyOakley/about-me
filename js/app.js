'use strict';

let userName = prompt('Hello, what is your name?');

alert(userName + ', welcome to my (Tracy Oakley) website!');

let counter = 0;

question_1();
question_2();
question_3();
question_4();
question_5();
question_6();
question_7();

function question_1 () {
  let isFrom = prompt('Am I originally from LA?').toLowerCase();

  if(isFrom === 'yes' || isFrom === 'yeah' || isFrom === 'y'){
    alert('If by LA, you mean Louisiana then you are right!');
    counter++;
  } else if (isFrom === 'no' || isFrom === 'nope' || isFrom === 'n'){
    alert('Correct, I am from Louisiana (LA) haha!');
    counter++;
  } else {
    alert('Please stick to "Yes" or "No" answers.');
  }
}

function question_2(){
  let onlyChild = prompt('Am I an only child?').toLowerCase();

  if(onlyChild === 'yes' || onlyChild === 'yeah' || onlyChild === 'y'){
    alert('Nope, I am the 4th of 7 kids.');
  } else if (onlyChild === 'no' || onlyChild === 'nope' || onlyChild === 'n'){
    alert('Correct, I am the 4th of 7 kids.');
    counter++;
  } else {
    alert('Please stick to "Yes" or "No" answers.');
  }
}


function question_3() {
  let visitForeign = prompt('Have I ever been to a foreign country?').toLowerCase();

  if(visitForeign === 'yes' || visitForeign === 'yeah' || visitForeign === 'y'){
    alert('Nope, unless you say Guam is a foreign country.');
  } else if (visitForeign === 'no' || visitForeign === 'nope' || visitForeign === 'n'){
    alert('Correct, I am boring but one day...');
    counter++;
  } else {
    alert('Please stick to "Yes" or "No" answers.');
  }
}

function question_4() {
  let liveNow = prompt('Do I live in Florida currently?').toLowerCase();

  if(liveNow === 'yes' || liveNow === 'yeah' || liveNow === 'y'){
    alert('Correct, I like the beach.');
    counter++;
  } else if (liveNow === 'no' || liveNow === 'nope' || liveNow === 'n'){
    alert('Incorrect, I do live in Florida');
  } else {
    alert('Please stick to "Yes" or "No" answers.');
  }
}

function question_5() {
  let wasNavy = prompt('Was I ever in the Navy?').toLowerCase();

  if(wasNavy === 'yes' || wasNavy === 'yeah' || wasNavy === 'y'){
    alert('Correct, I was on a Boomer in Washington State.');
    counter++;
  } else if (wasNavy === 'no' || wasNavy === 'nope' || wasNavy === 'n'){
    alert('Incorrect, I was a Submarine Officer on the USS Nevada.');
  } else {
    alert('Please stick to "Yes" or "No" answers.');
  }
}

//Guessing Game - Question 6
function question_6() {
  let rightNum = 7;
  let numGuess = prompt(`${userName}, please guess a number from 1 to 10.`);
  let numAttempts = 4;
  let i = 1;
  
  numGuess = parseInt(numGuess);
  
  while(i < 5){
    if (numGuess === rightNum){
      alert(`${numGuess} is the correct answer! Well done.`);
      counter++;
      break;
    } else if(i < numAttempts){
      if(numGuess < rightNum){
        alert(`${userName}, your guess is too low. You have ${numAttempts - i} attempts left.`);  
      }
      if(numGuess > rightNum){
        alert(`${userName}, your guess is too high. You have ${numAttempts - i} attempts left`);
      }
      numGuess = prompt(`${userName}, please guess a number from 1 to 10.`);
      numGuess = parseInt(numGuess);
    } else{
      alert(`Sorry, you are out of attempts, the correct answer was ${rightNum}.`);
      break;
    }
    i++;
  }
}

//Question 7 - Guess a Favorite food of mine
function question_7() {
  let favFoods = ['sushi','brisket','pizza','tacos','icecream','steak','nutella','oreo','crepes','pancakes'];
  let guessFood = '';
  let correctFood = false;
  let guessLeft = 6;
  
  guessFood = prompt('Please try and guess one of my Favorite Foods.').toLowerCase();
  
  for(let i = 0; i < guessLeft; i++){
    for(let j = 0; j <favFoods.length; j++){
      if(favFoods[j] === guessFood){
        correctFood= true;
      }
    }
    if(correctFood === true){
      alert(`You are correct! ${guessFood} is one of my favorite foods!`);
      counter++;
      break;
    }else if(i< guessLeft-1){
      alert(`That is incorrect. You have ${guessLeft - i - 1} attempts left.`);
      guessFood = prompt('Please try and guess one of my Favorite Foods.').toLowerCase();
    }else{
      alert('Sorry, you are out of attempts.');
    }
  }
}


alert(`${userName}, you got ${counter} of 7 questions correct.`);

alert(`${userName}, thanks for playing!`);
