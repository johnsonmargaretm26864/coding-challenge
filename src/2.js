function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = [];
for (let i = 0; i < 5; i++) {
  let num = getRandomNumber(1, 10);
  arr.push(num);
}
console.log(arr);
