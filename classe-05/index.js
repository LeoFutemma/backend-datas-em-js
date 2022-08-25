const format = require('date-fns/format');

function verificaHorario(chegadaDoCliente, diaDaSemana) {
  if (diaDaSemana === 'Su') {
    return false;
  }
  else if (diaDaSemana === 'Sa' && Number(chegadaDoCliente) >= 8 && Number(chegadaDoCliente) <= 12) {
    return true;
  }
  else if (diaDaSemana !== 'Su' && diaDaSemana !== 'Sa' && Number(chegadaDoCliente) >= 8 && Number(chegadaDoCliente) <= 18) {
    return true;
  }
  else {
    return false;
  }
}

console.log(verificaHorario(format(new Date(2021, 3, 25, 12), 'H'), format(new Date(2021, 3, 25, 12), 'EEEEEE')));

console.log(verificaHorario(format(new Date(2021, 3, 26, 12), 'H'), format(new Date(2021, 3, 26, 12), 'EEEEEE')));

console.log(verificaHorario(format(new Date(2021, 3, 26, 7, 59), 'H'), format(new Date(2021, 3, 26, 7, 59), 'EEEEEE')));

console.log(verificaHorario(format(new Date(2021, 3, 24, 9, 30), 'H'), format(new Date(2021, 3, 24, 9, 30), 'EEEEEE')));