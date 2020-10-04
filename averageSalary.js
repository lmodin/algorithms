/**
 * Given an array of unique integers salary where salary[i] is the salary of the employee i.

Return the average salary of employees excluding the minimum and maximum salary.
Example 1:
Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500
Example 2:
Input: salary = [1000,2000,3000]
Output: 2000.00000
Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
Average salary excluding minimum and maximum salary is (2000)/1= 2000
Example 3:
Input: salary = [6000,5000,4000,3000,2000,1000]
Output: 3500.00000
Example 4:
Input: salary = [8000,9000,2000,3000,6000,1000]
Output: 4750.00000
Constraints:
3 <= salary.length <= 100
10^3 <= salary[i] <= 10^6
salary[i] is unique.
Answers within 10^-5 of the actual value will be accepted as correct
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  //make a copy of the list of salaries and sort the list
  var sortedSalaries = salary.slice()
  sortedSalaries.sort(function(a, b) {
      if (a < b) {
          return -1;
      } else if (a > b) {
          return 1;
      } else {
          return 0;
      }
  })
  //take the average of all but the first and last
  var salaries = sortedSalaries.slice(1, (sortedSalaries.length - 1))
  //console.log(salaries)
  var sum = salaries.reduce((a, b) => (a + b))
  let average = sum / salaries.length;
  //return number, fixed to 5 places
  return Number.parseFloat(average).toFixed(5);
};