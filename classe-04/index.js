const format = require('date-fns/format');

const lojaAbre = Number(format(new Date(2021, 3, 25, 8), 'H'));
const lojaFecha = Number(format(new Date(2021, 3, 25, 18), 'H'));

function verificaHorario(chegadaDoCliente, diaDaSemana) {
  if (Number(chegadaDoCliente) >= lojaAbre && Number(chegadaDoCliente) <= lojaFecha && diaDaSemana !== 'S') {
    return true;
  } else {
    return false;
  }
}

console.log(verificaHorario(format(new Date(2021, 3, 25, 12), 'H'), format(new Date(2021, 3, 25, 12), 'EEEEE')));
console.log(verificaHorario(format(new Date(2021, 3, 26, 12), 'H'), format(new Date(2021, 3, 26, 12), 'EEEEE')));
console.log(verificaHorario(format(new Date(2021, 3, 26, 7, 59), 'H'), format(new Date(2021, 3, 26, 7, 59), 'EEEEE')));