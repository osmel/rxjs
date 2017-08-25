
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