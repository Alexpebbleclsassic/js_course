const arr1 = [64, 46, 35, -101];
var sum = 0;

for (var x = 0; x < arr1.length; x++) {
  sum += arr1[x];
  average = (arr1.length);
  maximum = Math.max.apply(Math,arr1);
  minimum = Math.min.apply(Math,arr1);  
}

console.log(sum);
console.log(sum / average);
console.log(maximum);
console.log(minimum);