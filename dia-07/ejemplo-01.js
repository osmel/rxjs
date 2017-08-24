/*var observable = Rx.Observable.interval(1000);
var subscription = observable.subscribe(x=>console.log(x));
subscription.unsubscribe();
*/

var observable1 = Rx.Observable.interval(400); //cada 0.4segundo va a ejecutar 
var observable2 = Rx.Observable.interval(300);

var subscription = observable1.subscribe(x => console.log('primero: ' + x));
var hijo = observable2.subscribe(x => console.log('segundo: ' + x));
var otroHijo = observable2.subscribe(x => console.log('tercero: ' + x));

// Las suscripciones también pueden ser agrupadas(usando método add), 
subscription.add(hijo);
subscription.add(otroHijo);

// De modo que una llamada a un "unsubscribe() del padre" puede anular todas las suscripciones hijos
/*
setTimeout(() => {
  subscription.unsubscribe();
}, 1000);
*/

//Puedo quitar de un grupo a una suscripcion usando el método remove(suscripcionHijo), con el fin de deshacer la adición(add) de una suscripción hijo.
setTimeout(()=>{
    subscription.remove(hijo);
    subscription.unsubscribe();
}, 1000);



