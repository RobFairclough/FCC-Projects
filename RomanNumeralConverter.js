function convertToRoman(num) {
  let romanChars = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let count = num;
  let romanString = ""; //to contain result

  for (let i = 0; i < numbers.length; i++) {
    while (count >= numbers[i]) {
      romanString += romanChars[i];
      count -= numbers[i];
    }
  }
  return romanString;
}
convertToRoman(36);