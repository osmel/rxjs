/*
var sujeto = new Rx.Subject();

sujeto.subscribe({
    next: (v) => console.log('ObserverA '+ v)
});
sujeto.subscribe({
    next: (v) => console.log('ObserverB '+ v)
});



var observable = Rx.Observable.from([1,2,3]);

//Dado que un "Subject" es un "Observer", esto también significa 
//que puede proporcionar un Subject como argumento al subscribe de cualquier observable, como en el siguiente ejemplo:
//convertir un “unicast” de ejecución observable a “multicast”
observable.subscribe(sujeto);

//sujeto.next(1222222);

*/
/*

//Cada Subject es un Observer. Es un objeto con los métodos next(v), error (e), y complete(). 
var sujeto = new Rx.Subject(); //devuelve un objeto

//Las suscripciones son simplemente un conjunto de callbacks, uno para cada tipo de notificación entregado por el Observable o subject: next, error, y complete.

//Un observador puede suscribirse a un subject. 
//Como observador "no puede decir si la ejecución observable" proviene de un "unicast Observable" o un "multicast Subject".
sujeto.subscribe({
  next : x => console.log('x vale', x),
  error: err => console.log('algo salio mal', err),
  complete: () => console.log('se completo'),
})

sujeto.subscribe({
  next : x => console.log('x vale2: ', x),
  error: err => console.log('algo salio mal2: ', err),
  complete: () => console.log('se completo2: '),
})


//Un Subject de RxJS es un "tipo especial de Observable" que permite que los valores sean “multicasted(multiples casteos)” a muchos observadores.
//Cada Subject es una ejecución independiente del Observable
//*puede multicastear a muchos Observers
//*son como EventEmitters: mantienen un registro de muchos listeners.
//Para alimentar un nuevo valor del Subject, simplemente hay que llamar a next(valor), y se enviará a los Observers registrados para escuchar el Subject.
var i=0;
setInterval(() => {  
	sujeto.next(i);
	i++;
},1000); 

*/

var subject = new Rx.Subject();

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

//var observable = Rx.Observable.from([1, 2, 3]);

var i=0;
var observable = Rx.Observable.create(function subscribe(observer) {
  
  setInterval(() => {   
        try {
          observer.next(i);
          i++;
        } catch (err) {
            observer.error(err); // Entrega una notificación de “error” si sucede uno
        }
   }, 1000); 

});



	//https://delfirosales.blogspot.mx/2009/06/metodos-de-transmision-unicast.html

observable.subscribe(subject); // You can subscribe providing a Subject

/*
observable.subscribe({
  next : x => console.log('x valeA: ', x),
  error: err => console.log('algo salio mal: ', err),
  complete: () => console.log('se completo: '),
});


observable.subscribe({
  next : x => console.log('x valeB: ', x),
  error: err => console.log('algo salio mal: ', err),
  complete: () => console.log('se completo: '),
});
*/