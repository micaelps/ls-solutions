function harmonicSeries(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / i
    }
    return sum;
}

console.log(harmonicSeries(1))