const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('fish bash');
    } else if (i % 5 === 0) {
      console.log('bash');
    } else if (i % 3 === 0) {
      console.log('fish');
    } else {
      console.log(i);
    }
  }
}

function displayInput() {
  rl.question('Masukkan angka (lebih besar dari 0): ', (input) => {
    const jumlah = parseInt(input);
    if (isNaN(jumlah) || jumlah <= 0) {
      displayInput();
    } else {
      displayNumbers(jumlah);
      rl.close();
    }
  });
}

displayInput();
