function getCountOfMultiples(numbers) {
  const multiples = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    for (let multiple in multiples) {
      if (num % multiple === 0) {
        multiples[multiple]++;
      }
    }
  }

  return multiples;
}


const input = prompt("Enter the numbers (comma-separated):");
const numbers = input.split(",").map(Number);
const result = getCountOfMultiples(numbers);

console.log(result);
