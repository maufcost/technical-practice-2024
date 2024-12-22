// EXERCISE #1) Sliding Window
// Problem 1: Maximum Sum Subarray (Contiguous) of Size K
//
// Description: Given an array of integers, find the maximum sum of a subarray (contiguous) of size k.
// Example:
// Input: [2, 1, 5, 1, 3, 2], k = 3
// Output: 9 (subarray [5, 1, 3])
//
// Time complexity of my solution: O(n * k)
// Time complexity explanation:
// * The outer loop runs (n - k) times.
// * For each iteration of the outer loop, the inner loop runs k times.
// * Therefore, the total number of iterations is approximately (n - k) * k. 
// * For large arrays, this simplifies to O(n * k), because n - k is approximately n when n is much larger than k.
const maxContiguousSubArraySumNaive = (arr, k) => {
    const len = arr.length;
    let currSum = -Infinity;
    let maxSum = 0;

    // [2, 1, 5, 1, 3, 2], len is 6, k = 3
    for (let i = 0; i < (len - k); i++) {

        currSum = 0;

        for (let j = i; j < (i + k); j++) {

            currSum += arr[j];
        }

        maxSum = Math.max(currSum, maxSum);
    }

    return maxSum;
}

// Example:
// Input: [2, 1, 5, 1, 3, 2], k = 3
// Output: 9 (subarray [5, 1, 3])
// More efficient: O(n)
const maxContiguousSubArray = (arr, k) => {
    const len = arr.length;

    // Edge case
    if (k > len) return -1;

    let maxSum = 0;
    let currSum = 0;

    // Step 1: Calculate the sum of the first window (the sum of the first k elements)
    for (let i = 0; i < k; i++) currSum += arr[i];

    // Step 2: Set the maximum sum to be the current sum.
    maxSum = currSum;

    // Step 3: Slide the window
    for (let i = k; i < len; i++) {
        // We slide the window by subtracting the element that is leaving and adding the element that is entering
        currSum += arr[i] - arr[i - k];
        // currSum is 8 (2 + 1 + 5)
        //      currSum += 1 - 2
        //      currSum += 3 - 1
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

// EXERCISE #2) I came up with: Maximum Sum Subarray (NON-Contiguous) of Size K
// An exercise I thought of:
// Similar to above, but without contiguous subarrays (so, clearly sliding window is not an option).
// Just the max sum of any k items in an array.
const maxSubArraySum = (arr, k) => {
    if (k > arr.length) return -1;

    // Sort in descending order.
    arr = arr.sort((a, b) => b - a);
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }

    // [1, 2, 3, 4, 5] // or, if it were in ascending order.
    // for (let i = len - 1; i >= len - k; i--) {
    //     sum += arr[i];
    // }

    return sum;
}

// EXERCISE #3) Two Pointers
// Problem 3.1: Container With Most Water
// Description: Given an array of non-negative integers, where each integer represents the height of a vertical line at that position, 
// find two lines that together with the x-axis form a container, such that the container contains the most water.
// Example:
// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49
// Time complexity: O(n^2)
// Not using the two pointers approach here.
const containerWithMostWater = arr => {
    const len = arr.length;
    let max = 0;

    for (let i = 0; i < len - 1; i++) {

        for (let j = i + 1; j < len; j++) {

            const height = Math.min(arr[i], arr[j]); // Shortest post/shortest side of the container
            const currentContainerArea = height * (j - i);
            max = Math.max(max, currentContainerArea);
        }
    }

    return max;
}

// EXERCISE #4) Remove Duplicates from Sorted Array
// Description: Given a SORTED array, remove the duplicates IN-PLACE such that each element appears only once and RETURN THE NEW LENGTH.
// Example:
// Input: [1,1,2]
// Output: 2 (Array becomes [1, 2])
//
// Another example: [1,2,3,3]
// i = 0, j = 1     [1,2,3,3]
// i = 1, j = 2     [1,2,3,3]
// i = 2, j = 3     [1,2,3,3]
//
// Another example: [1,2,2,3]  or  [1, 2, 2, 2, 2, 2, 2, 3]
// i = 0, j = 1     [1,2,2,3]
// i = 1, j = 2     [1,2,2,3]
// i = 2, j = 3     [1,2,3,3]
//
// Another example: [1, 2, 2, 2, 2, 2, 3] --> [1, 2, 3, 2, 2, 2, 2]
// Let's use the two pointers approach here.
const removeDuplicates = arr => {
    // To solve this in a way that modifies the array in place, you can use a two-pointer technique:
    //
    // Start with a pointer (i) that will keep track of the unique elements. This is also called the slow pointer.
    // Use another pointer (j) to scan through the array, comparing each element to the last unique one.
    // If j finds a new unique element, move it to the next position in the array.

    if (arr.length === 0) return 0;

    let i = 0; // <-- this is the slow pointer

    for (let j = 1; j < arr.length; j++) { // <-- j is the fast pointer
        if (arr[i] !== arr[j]) { // aka did we find a new unique number?
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

// EXERCISE #5) Depth-First Search (DFS) / Breadth-First Search (BFS)
// Problem 4.1: Number of Islands (DFS or BFS)
// Description: Given a 2D grid representing a map of '1's (land) and '0's (water), count the number of islands. An island is surrounded 
// by water and is formed by connecting adjacent lands horizontally or vertically.
// Example:
// Input: [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
const countIslands = grid => {

}

// EXERCISE #6) Word Ladder (Also, DFS/BFS)
// Description: Given two words (beginWord and endWord), and a dictionary of words, find the length of the shortest transformation sequence 
// from beginWord to endWord. You can change only one letter at a time, and each transformed word must exist in the word list.
// Example:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5 (hit -> hot -> dot -> dog -> cog)
const findLenShortestTransformation = (str1, str2) => {

}

// EXERCISE #7) Greedy Algorithms
// Problem 5.1: Activity Selection Problem
// Description: Given n activities with start and finish times, select the maximum number of activities that don’t overlap. The solution is to 
// always pick the activity with the earliest finish time.
// Example:
// Input: start[] = {1, 3, 0, 5, 8, 5}, finish[] = {2, 4, 6, 7, 9, 9}
// Output: 4 (activities selected are {1, 2}, {3, 4}, {5, 7}, {8, 9})
// Time complexity: O(nlogn) due to sorting
const getMaxNumOfActivities = (start, finish) => {

    const len = start.length;

    // Combine start and finish times into a single array of activities.
    // [[1, 2], [3, 4], [0, 6], [5, 7], [8, 9], [5, 9]]
    const activities = start.map((s, i) => [s, finish[i]]);

    // Sort the activities by their finish times (ascending order).
    activities.sort((a, b) => a[1] - b[1]);

    // We can ALWAYS pick the first activity (because we sorted above)
    let count = 1;

    // Finish time of the last selected activity;
    let lastFinish = activities[0][1];

    for (let i = 1; i < n; i++) {
        // No overlap condition
        if (activities[i][0] >= lastFinish) {
            count++;
            lastFinish = activities[i][1];
        }
    }

    return count;
}

// EXERCISE #8) Find the shortest root-to-leaf path in a binary tree.
// Intuition: The first time a leaf node is found, its depth is returned, giving the minimum depth.
// Use BFS
class TreeNode {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const findShortestPathInTree = root => {
    if (root === null) return 0;

    const queue = [];
    queue.push([root, 1]); // <- depth is 1 (root of the three)

    while (queue > 0) {
        const [currentNode, depth] = queue.shift();

        if (!currentNode.left && !currentNode.right) return depth;

        if (currentNode.left !== null) {
            queue.push([currentNode.left, depth + 1]);
        }

        if (currentNode.right !== null) {
            queue.push([currentNode.right, depth + 1]);
        }
    }

    // If the tree has at least ONE node, this should never be reached,
    // so let's just return 0 (instead of undefined)
    return 0;
}

// EXERCISE #9) Find the maximum n-digit number whose sum is equals to k
// Examples:
// maxNumberWithDigitSum(3, 20); // Output: 992
// maxNumberWithDigitSum(2, 18); // Output: 99
// maxNumberWithDigitSum(3, 5);  // Output: 500
const findMaxNDigitSum = (n, k) => {
    // Edge case: 
    // What's the max sum we can get with an n-digit number? (let's say n is 3? 27 (9 + 9 + 9))
    if (k > 9 * n) return -1;

    let result = [];

    // Building each digit of the final number from left to right
    for (let i = 0; i < n; i++) {
        // The most significant digit of a number is on the left, so that's why we start there.

        // Start by choosing the maximum digit for this place (which is 9).
        let digit = Math.min(k, 9);
        result.push(digit);
        k -= digit;
    }

    return result.join('');
}

// EXERCISE #10)
// In a game, there is an array of cells, each with an integer value. 
// In one move, merge any two cells to obtain a new cell that contains 
// the sum of the two cells. The power needed in each move is the sum of the 
// values of the two merged cells. The goal is to merge the cells until only 
// one cell remains. Find the minimum possible power required to do so.
//
// Example:
// cells = [20, 30, 40]
// Select cells with values 20 and 30 and merge them to obtain [50, 40]. The power needed for this move is 20+30=50
// Select cells with values 50 and 40 and merge them to obtain [90]. The power needed for thismove is 50+40 = 90
// The total power required is 50 + 90 = 140. This is the minimum possible power.
// Runtime: O(n^2logn)
const minPower = cells => {
    // Edge case: if there's only one cell, no merging is needed.
    if (cells.length <= 1) return 0;

    // Initialize a min-heap to store the cells in ascending order.
    const minHeap = [...cells].sort((a, b) => a - b);

    let totalPower = 0;

    // While there is more than one cell, keep on mergin'!
    while (minHeap.length > 1) {
        // Pop the two smallest cells
        const first = minHeap.shift();
        const second = minHeap.shift();

        // Calculate the power needed for this merge
        const mergeCost = first + second;
        totalPower += mergeCost;

        // Insert the merged cell back into the heap in sorted order
        minHeap.push(mergeCost);
        minHeap.sort((a, b) => a - b);
    }

    return totalPower;
}