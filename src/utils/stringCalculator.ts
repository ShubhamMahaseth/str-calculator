export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiter: RegExp = /,|\n/; // default delimiter: comma or newline

  if (numbers.startsWith("//")) {
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (delimiterMatch) {
      delimiter = new RegExp(delimiterMatch[1]);
      numbers = numbers.substring(delimiterMatch[0].length);
    }
  }

  const numArray = numbers.split(delimiter).map(Number);
  const negatives = numArray.filter((num) => num < 0);

  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
