//javascript puro
/*
	JS “puro” agregamos un “eventListener” por medio de la función addEventListener, 
	y le decimos el tipo es click y que va a hacer cada vez que se ejecuta un click,
	 por lo tanto lo que estamos haciendo es REGISTRAR un evento.
*/
var button = document.querySelector('button');
button.addEventListener('click', () => console.log('Clicked!'));

//RxJS
/*En el caso de RxJS lo que hacemos es crear un “Observable” sobre el evento click del boton

Rx.Observable.fromEvent(button, ‘click’): Lo que significa es que ahora “agregamos a nuestra colección de eventos futuros” 
              (observable) un posible evento futuro en button del tipo click .

.subscribe(() => console.log(‘Clicked!’)): Al subscribirnos estamos “ejecutando” ese evento, y 
											también podremos cancelarlo (en un futuro).              
*/
var button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click')
	// subscribe (y no recibo argumento porq no habia ninguna funcion antes, como scan, count, etc) e imprimo un msg)
    .subscribe(() => console.log('Clicked RxJS!'));


/*
Resumen:
Por lo tanto la principal diferencia en nuestro primer ejemplo es que uno genera un evento directamente (event listener)
 que se ejecuta y el otro (RxJS) lo que tiene es que va a agregar un “posible evento futuro” en un “array” para luego 
 poder “subscribirse” al mismo y poder ejecutarlo.
*/    