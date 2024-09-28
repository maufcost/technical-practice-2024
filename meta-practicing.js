// Find all permutations of an array of numbers
// [1, 2, 3]
const getAllPermutations = arr => {
  const permutations = [];

  const generatePermutations = (arr, m = []) => {

    if (arr.length === 0) {
      permutations.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {

        // Shallow copy array
        const curr = arr.slice();

        // Remove element at index i
        const nextNum = curr.splice(i, 1);

        generatePermutations(curr, m.concat(nextNum));
      }
    }
  }

  return permutations;
}

// Rotate array: https://leetcode.com/problems/rotate-array/ - ok

// Find all elements in common on both of these arrays
const a = [1, 2, 3, 4, 5]
const b = [5, 9, 2, 0, 1, 7, 14]

const map = {}

for (let i = 0; i < a.length; i++) {
  const num = a[i];
  if (!map[num]) map[num] = 1;
}

for (let i = 0; i < b.length; i++) {
  const num = b[i];
  if (map[num]) map[num]++;
}

 for (const p in map) {
  if (map[p] >= 1) {
    // Common number!
  }
 }


// or....
const set = new Set();
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (a[i] === b[j]) set.add(a[i]);
  }
}

// Binary search (sort array first!)
const binarySearch = (arr, target) => {
  let min = 0;
  let max = arr.length - 1;

  while(max > min) {
    const mid = Math.floor((max + min) / 2);

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      max = mid - 1;
    } else if (arr[mid] < target) {
      min = mid + 1;
    }
  }

  return false;
}

// Given an array, find all pairs of values that sum to the median value.
const getMedian = arr => {
  const sortedArray = [...arr].sort((a, b) => a - b);
  const midIndex = Math.floor(sortedArray.length / 2);

  // Has a middle element
  if (arr % 2 !== 0) return sortedArray[midIndex];
  
  // No middle element. The median is going to be the average
  // of the elements in the middle.
  // 0 1 2 3, length = 4
  return Math.floor((sortedArray[midIndex] + sortedArray[midIndex - 1]) / 2);
}

const medianSum = arr => {
  const median = getMedian(arr);

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === median) result.push([arr[i], arr[j]]);
    }
  }

  return result;
}

// [1, 5, 7, 2, 3, 4, 6], median = 3
// set = [1, 5, 7, ]
const medianSum2 = arr => {
    const median = getMedian(arr);
    const pairs = [];
    const seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        const complement = median - arr[i];

        if (seen.has(complement)) pairs.push([arr[i], complement]);

        seen.add(arr[i]);
    }

    return pairs;
}

// Given two strings, S and B, find all permutations of S in B.
// I came up with this solution at first...
const findStringPermutations = (s, b) => {

  // The smaller string cannot be bigger than the bigger string.
  if (s.length > b.length) return [];

  // string <- b
  // in <- s (or ni)
  const set = new Set();

  for (let i = 0; i < (b.length - s.length); i++) {
    const substring = b.substring(i, i + s.length);

    if (areSubstringsEqual(s, substring)) set.add(substring);
  }

  return set;
}

const areSubstringsEqual = (s1, s2) => {
  const arr1 = s1.split(" ");
  const arr2 = s2.split(" ");

  // arr, a: 1, r: 2
  // ara, a: 2, r: 1

  const map1 = {};
  const map2 = {};
  
  for (let i = 0; i < arr1.length; i++) {

    if (map1[arr1[i]]) {
      map1[arr1[i]]++;
    }else {
      map1[arr1[i]] = 1;
    }

    if (map2[arr2[i]]) {
      map2[arr2[i]]++;
    }else {
      map2[arr2[i]] = 1;
    }
  }

  if (Object.keys(map1).length !== Object.keys(map2).length) return false;

  for (const [key, value] of map1) {
    if (map1[key] !== map2[key]) return false;
  }

  return true;
}

// Ransom problem: given a note, N, and a magazine, M,
// determine if you can build N from the letters in M.
const makeTable = s => {
  const map = {};

  for (let i = 0; i < magazine.length; i++) {
    const character = s.charAt(i);

    if (map[character]) {
      map[character]++;
    } else {
      map[character] = 1;
    }
  }
  
  return map;
}

const compareTables = (map1, map2) => {}

const canWriteRansomLetter = (note, magazine) => {
  const magazineMap = {};

  // Create map from magazine letters.
  for (let i = 0; i < magazine.length; i++) {
    const character = magazine.charAt(i);

    if (magazineMap[character]) {
      magazineMap[character]++;
    } else {
      magazineMap[character] = 1;
    }
  }

  // Check if there is enough letters in the map
  // to build the note.
  for (let i = 0; i < note.length; i++) {
    const character = note.charAt(i);

    if (magazineMap[character] && magazineMap[character] > 0) {
      magazineMap[character]--;
    } else if (magazineMap[character] <= 0) {
      return false;
    }
  }

  return true;
}

// const x of y ---> STRINGS
// const x in y ---> OBJECTS
const canBuildNoteFromMagazine = (note, magazine) => {
  const noteFreq = {}; // Just a map
  const magazineFreq = {}; // Same here

  // Count the frequency of each letter in the note
  for (const char of note) {
    if (char !== '') { // Ignore spaces
      noteFreq[char] = (noteFreq[char] || 0) + 1;
    }
  }

  for (const char of magazine) {
    if (char !== '') { // Ignore spaces
      magazineFreq[char] = (magazineFreq[char] || 0) + 1;
    }
  }

  for (const char in noteFreq) {
    if (!magazineFreq[char] || (magazineFreq[char] < noteFreq[char])) {
      return false;
    }
  }

  return true;
}

// Or we can sort and convert these arrays to string and compare the strings.
const areArraysEqual = (arr1, arr2) => {
  if (!arr1 || !arr2) return false;
  
  if (arr1.length !== arr2.length) return false;
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  
  return true;
}

// Reverse to Make Equal
// Given two arrays A and B of length N, determine
// if there is a way to make A equal to B by reversing 
// any subarrays from array B any number of times.
// A = [1, 2, 3, 4]
// B = [1, 4, 3, 2]

// 1, 4, 3, 2
// 1, 4, 2, 3 
// 1, 2, 4, 3
// 1, 2, 3, 4
function areTheyEqual(array_a, array_b){
  // Write your code here
  
  // Checking if the arrays are already equal
  if (areArraysEqual(array_a, array_b)) return true;
  if (areArraysEqual(array_a, array_b.slice().reverse())) return true;
  
  // If not, keep checking
  const len = array_a.length;
  
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      
      // Part 1, Part 2 and Part 3 of array b
      // This is the part before the reversed slice
      const part1 = array_b.slice(0, i);

      // This is the reversed slice
      const part2 = array_b.slice(i, j + 1).reverse();
      
      // This is the part after the reversed slice.
      const part3 = array_b.slice(j + 1);
      
      const fullArray = (part1.concat(part2)).concat(part3);
      
      if (areArraysEqual(fullArray, array_a)) return true;
    }
  }
  
  return false;
}

// I'm stupid... we can do multiple reversals!!!!!
// That's why they say "any number of times..."
const areTheyEqual2 = (array_a, array_b) => {
  const arr1 = array_a.sort((a, b) => a - b).toString();
  const arr2 = array_b.sort((a, b) => a - b).toString();
  return arr1 === arr2;
}

// Rotational Cipher
// One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount. 
// Rotating a character means replacing it with another character that is a certain number of steps away 
// in normal alphabetic or numerical order.
// For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?". 
// Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), 
// and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). 
// Note that the non-alphanumeric characters remain unchanged.
// Given a string and a rotation factor, return an encrypted string.
function rotationalCipher(input, rotationFactor) {
  // Write your code here
  let result = "";
  
  for (let i = 0; i < input.length; i++) {
    
    let char = input[i];
    
    if (char >= 'a' && char <= 'z') {
      
      let newCharCode = char.charCodeAt(0) - 'a'.charCodeAt(0) + rotationFactor;
      newCharCode = newCharCode % 26;
      const rotatedChar = String.fromCharCode(newCharCode + 'a'.charCodeAt(0));
      
      result += rotatedChar;
      
    } else if (char >= 'A' && char <= 'Z') {
      
      // 'B' -> 'D'
      let newCharCode = char.charCodeAt(0) - 'A'.charCodeAt(0) + rotationFactor;
      newCharCode = newCharCode % 26;
      const rotatedChar = String.fromCharCode(newCharCode + 'A'.charCodeAt(0));
      
      result += rotatedChar;
      
    } else if (char >= '0' && char <= '9') {
      // let newCharCode = char.charCodeAt(0) - '0'.charCodeAt(0) + rotationFactor;
      // newCharCode = newCharCode % 10;
      // const rotatedChar = String.fromCharCode(newCharCode + '0'.charCodeAt(0));

      // 7 -> +3 -> 10
      // 8 -> +3 -> 11
      let num = parseInt(char);
      num += rotationFactor;
      
      if (num >= 10) num %= 10;
      
      result += num.toString();
      
    } else {
      result += char;
    }
  }
  
  return result;
}

// Pair Sums
// Given a list of n integers arr[0..(n-1)], 
// determine the number of different pairs of elements within it which sum to k.
// If an integer appears in the list multiple times, 
// each copy is considered to be different; that is, 
// two pairs are considered different if one pair includes 
// at least one array index which the other doesn't, even if they include the same values.
function numberOfWaysBruteForce(arr, k) {
  // Write your code here
  const len = arr.length;
  let output = 0;
  
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      
      if (arr[i] + arr[j] === k) output++;
    }
  }
  
  return output;
}

// k = 6
// arr = [1, 2, 3, 3, 4]
// output = 2
// The valid pairs are 2+4 and 3+3
function numberOfWays(arr, k) {
  const map = {}
  const len = arr.length;
  let count = 0;
  
  // Create frequency map
  for (let i = 0; i < len; i++) {
    const num = arr[i];
    map[num] = (map[num] || 0) + 1;
  }
  
  // Iterate through array to count the pairs
  for (let i = 0; i < len; i++) {
    let num = arr[i];
    let complement = k - num;
    
    if (map[complement]) count ++;
    
    // If complement and element are the same, we should decrement the count
    // When the array has, for example, 2 3's.
    if (complement === num) count--;
  }
  
  // Since each pair is counted twice, divide the result by 2
  return count / 2;
}

// Binary search approach to finding the square root of a number
const squareRoot = x => {

  // Square root of a negative number is not real
  if (x < 0) return NaN;

  // sqrt(0) is 0 and sqrt(1) is 1.
  if (x === 0 || x === 1) return x;

  let low = 0;
  let high = x;
  let precision = 1e-6; // Define the precision level you need

  while (high - low > precision) {
    // Languages with integer overflow should do: left + (right - left) / 2
    let mid = (low + high) / 2;
    let midSquared = mid * mid;

    if (midSquared === x) {
      return mid;
    }else if (midSquared < x) {
      low = mid;
    } else if (midSquared > x) {
      high = mid;
    }
  }

  // Return the approximate square root within the precision
  return (low + high) / 2
}

// 1 Billion Users
// We have N different apps with different user growth rates. 
// At a given time t, measured in days, the number of users using an 
// app is g^t (for simplicity we'll allow fractional users), where g is the 
// growth rate for that app. These apps will all be launched at the same time 
// and no user ever uses more than one of the apps. We want to know how many 
// total users there are when you add together the number of users from each app.
// After how many full days will we have 1 billion total users across the N apps?
const totalUsers = (growthRates, t) => {
  let total = 0;
  
  for (let g of growthRates) {
    total += Math.pow(growthRates, t);
  }
  
  return total;
}

// For each app with growth rate, g, the number of users at day, t, is g^t.
const getBillionUsersDay = growthRates => {
  
  // 0 days
  let low = 0; 
  // 1000 days (Start with a reasonably high number of days to avoid infinite loop)
  let high = 1000;
  
  let target = 1e9;
  
  while (low < high) {
    let mid = Math.floor((low + high) / 2); // 500
    let users = totalUsers(growthRates, mid);
    
    if (users >= target) {
      high = mid;
    } else {
      // users < target
      low = mid + 1;
    }
  }
  
  return low;
}

// Fibonacci
const fib = n => {
  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Recursive steps
  return fib(n - 1) + fib(n - 2);
}

// Factorial (can also be implemented iteratively,
// which is a lot better)
// 3 --> 3 * 2 * 1;
const factorial = n => {
  // Base cases
  if (n === 0) return 1;

  // Recursive steps
  return n * factorial(n - 1);
}

// Transform binary search tree into a linked list
class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

const transformBSTToLL = root => {
  let head = null; // Head of the linked list
  let tail = null; // Tail of the linked list

  const inOrderTraversal = node => {
    if (!node) return;

    inOrderTraversal(node.left);

    // Create a new list node for the current BST node
    let listNode = new ListNode(node.value);

    if (!head) {
      // This is the first node in the linked list
      head = listNode
      tail = listNode
    } else {
      // There are some nodes in the list already
      tail.next = listNode;
      tail = listNode;
    }

    inOrderTraversal(node.right);
  }

  inOrderTraversal(root);

  return head;
}

// Inorder traversal of a tree
// We can just print the traversal, but here
// I'm also adding the values in this traversal's order
// to an array (arrays, just like objects, are passed by reference in JS).
const inOrderTraversal = (node, result = []) => {
  if (!node) return; // or if (node === null)

  inOrderTraversal(node.left);

  result.push(node.value);

  inOrderTraversal(node.right);

  return result;
}

// Preorder traversal of a tree
const preOrderTraversal = node => {
  if (!node) return;

  console.log(node.value);
  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
}

// Postorder traversal of a tree
const postOrderTraversal = node => {
  if (!node) return;

  postOrderTraversal(node.left);
  postOrderTraversal(node.right);
  console.log(node.value)
}

// .reduce example
// Returns the sum of all items in this array
const euros = [29.76, 41.85, 46.5]; 

const sum = euros.reduce((total, element) => {
  return total + element;
})

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const tally = fruitBasket.reduce((map, element) => {
  map[element] = (map[element] || 0) + 1;
  return map;
})

// Balanced Split
// Given an array of integers (which may include repeated integers), determine if 
// there's a way to split the array into two subsequences A and B such that the sum 
// of the integers in both arrays is the same, and all of the integers in A are strictly smaller than all of the integers in B.
// Note: Strictly smaller denotes that every integer in A must be less than, and 
// not equal to, every integer in B.
// [3, 6, 3, 4, 4]
// [3, 3, 4, 4, 6]
function balancedSplitExists(arr) {
  arr.sort((a, b) => a - b);
  
  const totalSum = arr.reduce((total, element) => total + element)
  let currSum = 0;
  
  for (let i = 0; i < arr.length - 1; i++) {
    
    currSum += arr[i];
    const remainingSum = totalSum - currSum;
    
    // Check if sums are equal and current element is strictly less than the next one
    // We sorted the array; therefore, this arr[i] < arr[i + 1] works
    if (remainingSum === currSum && arr[i] < arr[i + 1]) return true;
  }
  
  return false;
}

// Counting Triangles
// Given a list of N triangles with integer side lengths, determine 
// how many different triangles there are. Two triangles are considered 
// to be the same if they can both be placed on the plane such that 
// their vertices occupy exactly the same three points.
const getFreqMap = arr => {
  let map = {}; // new Map();
  
  for (el of arr) {
    map[el] = (map[el] || 0) + 1;
  }
  
  return map;
}

const areMapsEqual = (map1, map2) => {
   for (const key in map1) {
      if (map1[key] !== map2[key]) return false;
   }
  
  return true;
}

// { 2: 2, 3: 1}
// { 2: 2, 3: 1}
// { 2: 1, 5: 1, 6: 1}
const includes = (arr, map) => {
  for (let i = 0; i < arr.length; i++) {
    
    const currMap = arr[i];
    
    if (Object.entries(currMap).length !== Object.entries(map).length) continue;
    
    if (areMapsEqual(currMap, map)) return true;
  }
  
  return false;
}

function countDistinctTriangles(arr) {
  let uniqueArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    
      const map = getFreqMap(arr[i]);

      if (!includes(uniqueArr, map)) uniqueArr.push(map);
  }
  
  return uniqueArr.length;
}

const countDistinctTriangles2 = arr => {
  const uniqueTriangles = new Set();
  
  for (let triangle of arr) {
    // Sort the sides to normalize the triangle
    triangle.sort((a, b) => a - b);
    
    // Convert the sorted sides into a string and add to the set
    uniqueTriangles.push(triangle.join(','));
  }
  
  // The size of the set represents the number of unique triangles
  return uniqueTriangles.size;
}

// Balance Brackets
function isBalanced(s) {
  const stack = [];
  const bracketMap = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  
  for (let char of s) {
    if (char === '{' || char === '(' || char === '[') {
      // It's an opening bracket!
      stack.push(char);
    } else if (char === '}' || char === ')' || char === ']') {
      
      // It's a closing bracket!
      if (stack.length === 0) return false;
      
      const top = stack.pop();
      
      if (top !== bracketMap[char]) return false;
    }
  }
  
  return stack.length === 0;
}

// Number of Visible Nodes
// There is a binary tree with N nodes. You are viewing the tree 
// from its left side and can see only the leftmost nodes at each level. 
// Return the number of visible nodes.
// Note: You can see only the leftmost nodes, but that doesn't mean 
// they have to be left nodes. The leftmost node at a level could be a right node.
function visibleNodes(root) {
  if (root === null) return 0;
  
  let visibleNodes = 0;
  const queue = [];
  
  queue.push(root);
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    
    // Count the first node of each level
    visibleNodes++;
    
    for (let i = 0; i < levelSize; i++) {
      // The catch here is that we're not removing
      // a node from the tree in every iteration
      // of the while loop. We remove all nodes here itself
      // and then go to the next level down.
      const currNode = queue.shift();
    
      if (currNode.left !== null) queue.push(currNode.left);
      if (currNode.right !== null) queue.push(currNode.right);
    }
  }
  
  return visibleNodes;
}

// Encrypted words
function findEncryptedWord(s) {
  // Base cases
  if (s.length <= 1) return s;
  
  const middleIndex = Math.floor((s.length - 1) / 2);
  const middleChar = s[middleIndex];
  
  // Recursive steps
  const leftPart = findEncryptedWord(s.substring(0, middleIndex));
  const rightPart = findEncryptedWord(s.substring(middleIndex + 1));
  
  return middleChar + leftPart + rightPart;
}

// Exact change
// 75, [4, 17, 29]
// 94, [5, 10, 25, 100, 200]
// 7,  [3, 5]
function canGetExactChange(targetMoney, denominations) {
  while (targetMoney > 0) {
    
    let currMin = targetMoney;
    
    // Deciding which denomination subtracts more
    // from the target money.
    let found = false;
    for (let i = 0; i < denominations.length; i++) {
      const change = targetMoney - denominations[i];
      
      if (change >= 0 && change < currMin) {
        currMin = change;
        // Set the flag to true as we found a valid subtraction
        found = true;
      }
      
      // If we can get exact change, return true immediately
      if (change === 0) return true;
    }
    
    if (!found) return false;
    
    targetMoney = currMin;
  }
  
  return targetMoney === 0;
}

const canGetExactChangeRecursively = (targetMoney, denominations) => {
  // Base cases
  
  // Best case: when exact change is achieved
  if (targetMoney === 0) return true;
  
  // If targetMoney goes negative, it's not possible
  if (targetMoney < 0) return false;
  
  // Trying every denomination
  for (let i = 0; i < denominations.length; i++) {
    if (canGetExactChangeRecursively(targetMoney - denominations[i], denominations)) {
      return true;
    }
  }
  
  // If no combination was found, return false
  return false;
}

// Given a set of digits, rearrange them so the final number is the highest
const rearrange = arr => parseInt(arr.sort((a, b) => a - b).reverse().join(''));

// Slow Sums
// Suppose we have a list of N numbers, and repeat the following 
// operation until we're left with only a single number: Choose any 
// two numbers and replace them with their sum. Moreover, we associate 
// a penalty with each operation equal to the value of the new number, and 
// call the penalty for the entire list as the sum of the penalties of each operation.
// For example, given the list [1, 2, 3, 4, 5], we could choose 2 and 3 for the first operation, 
// which would transform the list into [1, 5, 4, 5] and incur a penalty of 5. The goal in this problem is 
// to find the highest possible penalty for a given input.
// arr = [4, 2, 1, 3]
// output = 26
// First, add 4 + 3 for a penalty of 7. Now the array is [7, 2, 1]
// Add 7 + 2 for a penalty of 9. Now the array is [9, 1]
// Add 9 + 1 for a penalty of 10. The penalties sum to 26.
function getTotalTime(arr) {
  
  // Suppose we have this class, and it's implemented
  const heap = new MaxHeap();
  
  // Adding all numbers to the heap
  for (const num of arr) {
    heap.push(num);
  }
  
  let totalPenalty = 0;
  
  while (heap.size() > 1) {
    const first = heap.pop();
    const second = heap.pop();
    
    const newNumber = first + second;
    totalPenalty += newNumber;
    
    maxHeap.push(newNumber);
  }
  
  return totalPenalty;
}

// Largest Triple Products
// You're given a list of n integers arr[0..(n-1)]. You must 
// compute a list output[0..(n-1)] such that, for each index i (between 0 and n-1, inclusive), 
// output[i] is equal to the product of the three largest elements 
// out of arr[0..i] (or equal to -1 if i < 2, as arr[0..i] then includes fewer than three elements).
// Note that the three largest elements used to form any product may have the 
// same values as one another, but they must be at different indices in arr.
// n = 5
// arr = [1, 2, 3, 4, 5]
// output = [-1, -1, 6, 24, 60]
function findMaxProduct(arr) {
  const len = arr.length;
  const output = [];
  
  // Initialize the three largest values
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;
  
  for (let i = 0; i < len; i++) {
    if (arr[i] > max1) {
      [max1, max2, max3] = [arr[i], max1, max2]
    } else if (arr[i] > max2) {
      [max2, max3] = [arr[i], max2];
    } else if (arr[i] > max3) {
      max3 = arr[i];
    }
    
    // If there are fewer than 3 elements, append -1 to the output
    if (i < 2) {
      output.push(-1);
    } else {
      output.push(max1 * max2 * max3);
    }
  }
  
  return output;
}

// Using a heap (to solve the problem above)
function findMaxTripleProduct(arr) {
  const n = arr.length;
  const output = [];
  const minHeap = new MinHeap();
  
  for (let i = 0; i < n; i++) {
      // Insert current element into the heap
      minHeap.insert(arr[i]);
      
      // Ensure heap size doesn't exceed 3
      if (minHeap.size() > 3) {
          minHeap.extractMin();
      }
      
      if (i < 2) {
          output.push(-1);
      } else {
          // Get the product of the three largest elements
          const heapCopy = minHeap.getHeap(); // Get a copy of the heap elements
          const product = heapCopy.reduce((total, el) => total * el, 1);
          output.push(product);
      }
  }
  
  return output;
}

function maxCandies(arr, k) {
  const maxHeap = new MaxHeap();
  let totalCandies = 0;
  
  // Initialize the max heap with all the candy bags
  for (let i = 0; i < arr.length; i++) { // or (for const candies of arr) {}
    maxHeap.add(arr[i]);
  }
  
  // Perform k operations
  for (let i = 0; i < k; i++) {
    // Get the bag with the most candies
    const max = maxHeap.extract();
    totalCandies += max;
    
    maxHeap.insert(Math.floor(max / 2));
  }
  
  return totalCandies;
}

// Median Stream
// You're given a list of n integers arr[0..(n-1)]. You must compute a list output[0..(n-1)] such that, 
// for each index i (between 0 and n-1, inclusive), output[i] is equal to the median of the elements arr[0..i] (rounded down to the nearest integer).
// The median of a list of integers is defined as follows. If the integers were to be sorted, then:
// If there are an odd number of integers, then the median is equal to the middle integer in the sorted order.
// Otherwise, if there are an even number of integers, then the median is equal to the average of the two middle-most integers in the sorted order.
const getCurrMedian = arr => {
  // Sort it since we're talking about medians
  arr.sort((a, b) => a - b);
  
  if (arr.length % 2 === 0) {
    
    const num1 = list[Math.floor(arr.length / 2) - 1];
    const num2 = list[Math.floor(arr.length / 2)];
    
    return Math.floor((num1 + num2) / 2);
  } else {
    return arr[Math.floor(arr.length / 2)];
  }
}

function findMedian(arr) {
  const len = arr.length;
  const output = [];
  
  for (let i = 0; i < len; i++) {
                                  // shallow copy
    const currMedian = getCurrMedian(arr.slice(0, i + 1));
    output.push(currMedian);
  }
  
  return output;
}
