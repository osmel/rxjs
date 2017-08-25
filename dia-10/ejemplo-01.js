var source = Rx.Observable.interval(500);
var subject = new Rx.Subject();
var multicasted = source.multicast(subject);
var subscription1, subscription2, subscriptionConnect;

//1- El primer Observador: se suscribe a la Multicaster Observable
subscription1 = multicasted.subscribe({
  //3-El siguiente(next) valor: 0 (cero) se entrega al primer Observer
  //5- El siguiente(next) valor 1: se entrega al primer Observer
  next: (v) => console.log('observerA: ' + v)
});

//2- El Observable multicasted: está conectado
//Debemos llamar a “connect ()” aquí, porque la primera
// suscripcion a `multicasted` está interesado en consumir valores
subscriptionConnect = multicasted.connect();


//4- El segundo Observer: se suscribe al Multicaster Observable
setTimeout(() => {
  subscription2 = multicasted.subscribe({
    //5- El siguiente(next) valor 1: se entrega al segundo Observer
    //8- El siguiente(next) valor 2: se entrega al segundo Observer
    next: (v) => console.log('observerB: ' + v)
  });
}, 600);

//7- El primer Observer: cancela(unsubscribe) la suscripción del multicasted Observable
setTimeout(() => {
  subscription1.unsubscribe();
}, 1200);

//9- EL segundo Observer: cancela(unsubscribe) la suscripción del multicasted Observable
setTimeout(() => {
  subscription2.unsubscribe();
//10- La conexión con el Observable multicasted no está mas suscrita(es cancelada unsubscribe )
// Debemos cancelar(unsubscribe) la suscripción de la ejecución observable compartida aquí,
// porque `multicasted` no tendría más suscriptores después de esto. Con esto libero tambien memoria
  subscriptionConnect.unsubscribe(); // Para la ejecución observable compartida
}, 2000);