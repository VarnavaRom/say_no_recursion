var arrayOfEl = [[1, 6, 7], [3, 10]];
var indexOfArray = new Array(arrayOfEl.length);
var i = 0;
var j = 0;

for(; i < arrayOfEl.length; i++) {
   indexOfArray[i] = 0;
}

i = 0;

var sum = 0;
var level = 0;
var count = 0;

while (level < arrayOfEl.length) {

   for (i = 0; i < arrayOfEl.length; i++) {
      sum += arrayOfEl[i][indexOfArray[i]];
  }

   console.log(sum);
   count++;
   sum = 0;

   if (indexOfArray[level] < arrayOfEl[level].length - 1) {

      indexOfArray[level]++;

      if (level != 0) {
         level--;
      }

   } else {
      indexOfArray[level] = 0;
      level++;
   }

}

console.log('\n' + count);
