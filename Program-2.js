function generateSeries(a) {
  let output = [];
  let num = 1;

  for (let i = 0; i < a; i++) {
    output.push(num);
    num += 2;
  }

  return output;
}


const userInput = 5; // Replace this with your user input

const series = generateSeries(userInput);
console.log(series.join(', '));
