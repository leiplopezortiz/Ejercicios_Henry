function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if (Math.sign(a < 0) && Math.sign (b < 0) && a === b) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}


module.exports = esIgualYNegativo;
