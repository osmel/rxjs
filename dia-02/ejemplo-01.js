//javascript puro "funcion impura"
// creamos el contador
var countJs = 0;
// obtengo el boton
var button = document.getElementById('JSButton');
button.addEventListener('click', () => console.log(`JS Clicked ${++countJs} times`));

//RxJS
// obtengo el boton
var button = document.getElementById('RxJSButton');
// creo el observable
Rx.Observable.fromEvent(button, 'click')
// funcion pura (sumar al contador). Cada vez que haga click cuenta 1
  .scan(contador => contador + 1, 0)  //es un contador, q comienza en 0 e incrementa en 1
// subscribe (recibo el contador(tengo 1 argumento que recibo de la funcion scan) y lo imprime)
  .subscribe(arg1 => console.log(`RxJS Clicked ${arg1} times`));