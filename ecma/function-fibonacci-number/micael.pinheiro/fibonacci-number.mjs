function fibonacci(n) {
  if (n == 1)
  return 0

  n--
  let primeiro = 1, segundo = 0, terceiro;
  for (let i = 1; i <= n; i++) {
    terceiro = primeiro + segundo
    primeiro = segundo
    segundo = terceiro
  }

  return terceiro
  }


export { fibonacci };
