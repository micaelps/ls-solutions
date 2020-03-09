/**
 * operator: '+', '-', '*', '/'
 */
function calc(a, b, operador) {
  switch (true) {
    case operador == "+":
        return a + b;
    case operador == "-":
        return a - b;
    case operador == "*":
        return a * b;
    case operador == "/":
        return a / b;
}
}

export { calc };
