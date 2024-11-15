const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkReverse(input) {
  if (input.split('').reverse().join('') === input) {
    console.log(true)
  } else {
    console.log(false)
  }
}

function displayInput() {
  rl.question('Masukkan kata / apapun: ', (input) => {
    if (input) {
      checkReverse(input);
      rl.close();
    } else {
      displayInput();
    }
  });
}

displayInput();
