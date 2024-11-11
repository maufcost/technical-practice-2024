const binarySearchIterative = (arr, target) => {
    let min = 0;
    let max = arr.length - 1;

    // Sort array! (ascending)
    arr.sort((a, b) => a - b);

    while (min < max) {
        
        const mid = Math.floor((max + min) / 2);

        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] > target) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return false;
}

const binarySearchRecursive = () => {

}