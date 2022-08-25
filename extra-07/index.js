const differenceInDays = require('date-fns/differenceInDays')

function conferirPromo(inicio, cliente) {
  const tempoDecorrido = differenceInDays(cliente, inicio);

  if (tempoDecorrido > 30) {
    return false;
  } else {
    return true;
  }
}

console.log(conferirPromo(new Date(2022, 4, 1), new Date(2022, 4, 31)));
console.log(conferirPromo(new Date(2022, 4, 1), new Date(2022, 5, 1)));