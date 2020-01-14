//¿Que son los callbacks o llamadas de vuelta? un callback es una funcion que recibe como parametro otra funcion y la ejecuta.

alert = () => {
  console.log('funcion argumento');
}


callback_func = (parametro) => {
  console.log('luego de esta linea...');
  alert();
}

callback_func(alert);