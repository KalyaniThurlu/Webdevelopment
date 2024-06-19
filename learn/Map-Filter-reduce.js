  const arr = [1, 2, 3, 4, 5];
      const newarr = arr.map(function (num) {
        return num * num;
      });
      console.log(arr);
      console.log(newarr);
      const numbers = [10, 20, 30, 40, 50, 60];
      const num = numbers.filter(function (score) {
        return score >= 50;
      });
      console.log(numbers);
      console.log(num);
      let nums = [10, 20, 30, 40, 50, 60];
      function sumArray() {
        return nums.reduce((accumalator, currentvalue) => {
          return accumalator + currentvalue;
        }, 0);
      }
      console.log(sumArray(nums));