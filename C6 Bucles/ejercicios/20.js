function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   let contador = 1;
   let res = 0;
   while(contador <= n){
      res += contador;
      contador += 1;
      if(res > 100) break;
   }
   console.log(res);
   return res;
}

module.exports = sumarHastaNConBreak;
