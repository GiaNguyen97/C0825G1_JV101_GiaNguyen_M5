export const sumFibonacci = (n) => {
    if (n<= 0) return 0;

    let a =0;
    let b = 1;
    let sum = a+b;

    for (let i = 2; i < n; i++) {
        let nextFibonacci = a + b;
        sum += nextFibonacci;
        a = b;
        b = nextFibonacci;
    }

    return n === 1 ? 0 : sum;
};