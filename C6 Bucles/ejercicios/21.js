function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let cont = numero;
  let res = false;
  while (cont > 1){
    if(numero <= 0){
      res =false;
      break;
    }
    if ( cont % 2 != 0){
      return false;
      break;
    } 
    res= true;
    cont /= 2
  }
  console.log(res);
  return res;
}

module.exports = esPotenciaDeDos;
