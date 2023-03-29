function fibonacciMaster() { // O(n) vs O(2^n) in the original fibonacci's algorithm
    let cache = {};

    return function fib(n) {
        if (n in cache) {
            return cache[n];
        }

        if (n < 2) {
            return n;
        }

        cache[n] = fib(n - 1) + fib(n - 2)
        return cache[n];
    }
}

// Bottom up
function fibonacciMaster2(n) {
    let answer = [0, 1];

    for (let i = 2; i < n; i++) {
        answer.push(answer[i - 1] + answer[i - 2]);
    }

    return answer.pop();
}

const fasterFib = fibonacciMaster();

console.log(fasterFib(10));