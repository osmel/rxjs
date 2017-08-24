var count = 0;
var rate = 1000;
var lastClick = Date.now() - rate;
var button = document.getElementById('JSButton');
button.addEventListener('click', (event) => {
  if (Date.now() - lastClick >= rate) {
    count += event.clientX;
    console.log(count)
    lastClick = Date.now();
  }
});

var button = document.getElementById('RxJSButton');
Rx.Observable.fromEvent(button, 'click')
  .throttleTime(1000)
  .map(event => event.clientX)
  //recibe argumento de la funcion anterior más proxima
  .scan((count, argRecibido) => count + argRecibido, 0)
  //recibe argumento de la funcion anterior más proxima
  .subscribe(count => console.log(count)); 