const salary = 1000;
let tax;
//tax = salary * taxRate - deduction

switch (salary > 0) {
    case salary < 1903.99:
        tax = 0;
        break;
    case salary < 2826.66:
        tax = 0.075 * salary - 142.8;
        break;
    case salary < 3751.06:
        tax = 0.15 * salary - 354.8;
        break;
    case salary < 4664.68:
        tax = 0.225 * salary - 636.13;
        break;
    default:
        tax = 0.275 * salary - 869.36;
}

console.log(tax);