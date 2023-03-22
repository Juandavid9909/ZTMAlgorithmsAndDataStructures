// Write two functions that finds the factorial of any number. One should use revursive, the other should just use a for loop
// O(n)
function findFactorialRecursive(number) {
    if (number <= 1) {
        return number;
    }

    return number * findFactorialRecursive(number - 1);
}

// O(n)
function findFactorialIterative(number) {
    let answer = 1;

    if (number === 2) {
        answer = 2;
    }

    for (let i = 2; i <= number; i++) {
        answer *= i;
    }

    return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));