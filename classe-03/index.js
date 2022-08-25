const lojaAbre = new Date(2015, 1, 1, 8);
const lojaFecha = new Date(2015, 1, 1, 18);

function verificaHorario(chegadaDoCliente) {
  if (chegadaDoCliente >= lojaAbre && chegadaDoCliente <= lojaFecha) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaHorario(new Date(2015, 1, 1, 12)));
console.log(verificaHorario(new Date(2015, 1, 1, 2)));