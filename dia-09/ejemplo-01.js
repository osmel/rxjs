//un simple “Unicast Observable” sólo envía notificaciones a un simple Observer
var source = Rx.Observable.from([1,2,3,4,5,6]);

var subject = new Rx.Subject();

//Un "multicast Observable” pasa las notificaciones a través de un "Subject" que puede tener multiples observadores
//utiliza un Subject “bajo el capó” para hacer que varios Observadores vean la misma ejecución de un Observable.
//Multicast retorna un Observable que se parece a un Observable simple, pero funciona como un Subject cuando 
//se trata de suscribirse
var multicasted = source.multicast(subject);

//los observadores se suscriben a un subject subyacente y el Subject se suscribe a la fuente(source) Observable
multicasted.subscribe({
    next: (v)=> console.log("observerA: " + v)
});

multicasted.subscribe({
    next: (v)=> console.log("observerb: " + v)
});

//Multicast retorna un ConnectableObservable, que es simplemente un "Observable con el método connect()".
// El método connect() es importante para determinar exactamente cuándo se iniciará la ejecución observable compartida.
// Debido a que connect() hace "source.subscribe(subject) debajo del capo", connect() retorna una Suscripción, 
//   de la que puede darse de baja para cancelar(unsubscribe) la ejecución observable compartida.
multicasted.connect();
