// run `node index.js` in the terminal
let valorBoleto = 3_000;
let diasAtrasados = 10;
const taxa = 0.03;

function calcularBoleto(valorBoleto, diasAtrasados, taxa, total) {
  const total = valorBoleto * diasAtrasados * taxa;
  return total;
}

const resultado = calcularBoleto(valorBoleto, diasAtrasados, taxa, taxa);
console.log(resultado);
