function addTo80(n) {
    console.log("long time");
    return n + 80;
}

function memoizedAddTo80() {
    let cache = {};

    return function(n) {
        if (n in cache) {
            return cache[n];
        }

        console.log("long time");

        cache[n] = n + 80;

        return cache[n];
    }
}

const memoized = memoizedAddTo80();

console.log(memoized(5));
console.log(memoized(5));