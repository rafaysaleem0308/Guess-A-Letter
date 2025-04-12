// //.wordDisplay where word will be shown
// //.letterinput where letter will be written
// //.submitBtn button to submit
// //.resultMessage will show the result correct on incorrect

let letter;
let scoring = 0;
let highscore = 0;
let gameplay = 0;
let check = false;
let word_store = '';
let display_word = '';

function game_begin() {
  let words = [
    'apple',
    'bear',
    'cat',
    'dog',
    'elephant',
    'frog',
    'grape',
    'house',
    'ice',
    'jelly',
    'kite',
    'lion',
    'monkey',
    'nose',
    'orange',
    'pencil',
    'queen',
    'rabbit',
    'sun',
    'tree',
    'admire',
    'bright',
    'courage',
    'diligent',
    'eager',
    'flourish',
    'gentle',
    'harmony',
    'inspire',
    'jovial',
    'kind',
    'lively',
    'modest',
    'nurture',
    'optimistic',
    'patient',
    'quaint',
    'reliable',
    'sincere',
    'trustworthy',
    'serendipity',
    'ephemeral',
    'mellifluous',
    'effervescent',
    'luminous',
    'eloquent',
    'tranquil',
    'obfuscate',
    'labyrinth',
    'euphoria',
    'quintessential',
    'resilient',
    'nebulous',
    'zenith',
    'ineffable',
    'solitude',
    'ameliorate',
    'ethereal',
    'felicity',
    'inequity',
  ];

  let randomindex_word = Math.floor(Math.random() * words.length);
  word_store = words[randomindex_word];
  display_word = '';
  random_displayindex = Math.floor(Math.random() * word_store.length);
  check = false;

  for (let i = 0; i < word_store.length; i++) {
    if (i === random_displayindex) {
      display_word += '_';
    } else {
      display_word += word_store[i];
    }
  }
  document.querySelector('.wordDisplay').textContent = display_word;
  document.querySelector('.resultMessage').textContent = '';
  document.querySelector('.letterInput').value = '';
}

document.querySelector('.submitBtn').addEventListener('click', function () {
  let letter = document.querySelector('.letterInput').value.toLowerCase();
  check = false;

  // Convert display_word to an array to modify it
  let displayWordArray = display_word.split('');

  for (let j = 0; j < word_store.length; j++) {
    if (displayWordArray[j] === '_' && word_store[j] === letter) {
      displayWordArray[j] = letter; // replace with the guessed letter
      check = true; // found a correct guess
    }
  }

  if (check) {
    display_word = displayWordArray.join('');
    document.querySelector('.wordDisplay').textContent = display_word;
  }

  // Check if the display_word matches the word_store
  if (display_word === word_store) {
    document.querySelector('.resultMessage').textContent = 'CORRECT!';
    scoring++;
    document.querySelector('.scoreValue').textContent = scoring;

    // Update highscore if necessary
    if (scoring > highscore) {
      highscore = scoring;
      document.querySelector('.highScoreValue').textContent = highscore;
    }
  } else {
    document.querySelector('.resultMessage').textContent = 'INCORRECT!';
    document.querySelector('.wordDisplay').textContent = word_store;
  }

  // Start a new game after 2 seconds
  if (gameplay < 10) {
    gameplay++;
    setTimeout(game_begin, 2000);
  } else {
    document.querySelector('.resultMessage').textContent = 'GAME FINISHED';
  }
});

document.querySelector('.btn2').addEventListener('click', function () {
  scoring = 0;
  document.querySelector('.resultMessage').textContent = '';
  document.querySelector('.scoreValue').textContent = 0;
  Start_game();
});

function Start_game() {
  let start = prompt('WELCOME TO THIS GAME');
  let start2 = prompt(
    `GAME LEVEL IS MIX, IN WHICH INCLUDES BEGINNER, AMATEUR AND PROFESSIONAL
SCORE WILL BE GIVEN ACCORDING TO THE LETTERS YOU PROVIDED CORRECT (^-^)`
  );
  if (start2 == '') game_begin();
}

Start_game();
