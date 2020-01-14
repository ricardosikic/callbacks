//¿Que son los callbacks o llamadas de vuelta? un callback es una funcion que recibe como parametro otra funcion y la ejecuta.

alert = () => {
  console.log('funcion argumento');
}


callback_func = (parametro) => {
  console.log('luego de esta linea...');
  alert();
}

callback_func(alert);

// otro callback seria ejemplo.
suma = (a, b) => {
  console.log(`la suma es: ${a + b}`);
}

proceso_suma = (value) => {
  console.log('...ejecutando');
  setTimeout(() => {
    suma(5, 4);
  }, 10000);
} 

proceso_suma(suma);
