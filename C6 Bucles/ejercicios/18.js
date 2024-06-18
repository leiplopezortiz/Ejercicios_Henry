function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let res = 1;
  for (i =a; i <= b; i++){
    res *= i;
  }
  if (res === -0){
    res = 0;
  }
  return res;
}

module.exports = productoEntreNúmeros;