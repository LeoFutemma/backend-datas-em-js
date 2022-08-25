const differenceInHours = require('date-fns/differenceInHours');

function conferirPromo(inicio, cliente) {
  const tempoDecorrido = differenceInHours(cliente, inicio);

  if (tempoDecorrido > 24) {
    return false;
  } else {
    return true;
  }
}

console.log(conferirPromo(new Date(2022, 4, 1), new Date(2022, 4, 2, 1)));