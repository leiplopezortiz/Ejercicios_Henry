function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let res = 0
  for(i = 1; i <= n; i++) {
    res += i;
  }
  console.log(res);
  return res;
}

module.exports = sumarHastaN
