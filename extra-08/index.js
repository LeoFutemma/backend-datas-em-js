const format = require('date-fns/format');
const { ptBR } = require('date-fns/locale');

const data = new Date(2020, 9, 5);

//A)
function dataCompleta(data) {
  return format(data, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
}

//B)
function dataReduzida(data) {
  return format(data, 'dd/MM/yyyy')
}

//C)
function diaMes(data) {
  return format(data, 'd MMM', { locale: ptBR })
}

//D)
function diaMesAno(data) {
  return format(data, 'd MMM yyyy', { locale: ptBR })
}

//E)
function dataCompletaMesReduzido(data) {
  return format(data, "dd 'de' MMM 'de' yyyy", { locale: ptBR });
}

//F)
function diaMesComBarra(data) {
  return format(data, 'dd/MMM', { locale: ptBR });
}

console.log(dataCompleta(data)); //A)
console.log(dataReduzida(data)); //B)
console.log(diaMes(data)); //C)
console.log(diaMesAno(data)); //D)
console.log(dataCompletaMesReduzido(data)); //E)
console.log(diaMesComBarra(data)); //F)
