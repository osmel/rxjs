var observable = Rx.Observable.create(function (observer){
  observer.next(1);//valores sincronicos
  observer.next(2);
  observer.next(3);

  setTimeout(()=>{
    observer.next(4); //valores Asyncronicos en un tiempo determinado, 
    observer.complete();
  }, 1000);
});

// Los Observers son simplemente un conjunto de callbacks, uno para cada tipo de notificación entregado por el Observable: next, error, y complete.
observable.subscribe({
  next : x => console.log('x vale', x),
  error: err => console.log('algo salio mal', err),
  complete: () => console.log('se completo'),
})


//Los tres tipos de devoluciones de llamada pueden proporcionarse como argumentos:
var subscription = observable.subscribe(
     x => console.log('x vale', x),
   err => console.log('algo salio mal', err),
    () => console.log('se completo'),

 );
 

//Los tres tipos de devoluciones de llamada pueden proporcionarse como funciones:

observable.subscribe(
function (x) {
    console.log('Next: %s', x);
  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
 	}
 );
 
