function fibonacci(n) {

  let primeiro = 1, segundo = 0, terceiro=0;
  let print = '', result = '';
 
  for (let i = 0; i<n; i++) {
    result = i == n-1? `${terceiro}` : `${terceiro}, `
    print += result

    terceiro = primeiro + segundo
    primeiro = segundo
    segundo = terceiro
  }

  return print;
}

export { fibonacci };
