export function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  let numString = numbers;

  if (numbers.startsWith("//")) {
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (delimiterMatch) {
      delimiter = new RegExp(delimiterMatch[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      numString = numbers.slice(delimiterMatch[0].length);
    }
  }

  const numArray = numString.split(delimiter).map(num => {
    const parsed = Number(num);
    if (isNaN(parsed)) {
      throw new Error(`Invalid number: ${num}`);
    }
    return parsed;
  });

  const negatives = numArray.filter(n => n < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
