function factorial(n) {
  let fat = n;
  for (let i = n - 1; i >= 1; i--) {
      fat *= i
  }
  return fat;
}

export { factorial };
