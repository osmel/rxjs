//ReplaySubject: hace un buffer de n-esimo cantidad de valores antiguos que se los entregará al nuevo observador
// la n cantidad es especificada cuando se crea el subject   "var subject = new Rx.ReplaySubject(N);"
//envia "n cantidad" de valores antiguos(old) a los nuevos suscriptores
var subject = new Rx.ReplaySubject(3,3000);  //Cantidad de n valores(buffer de valores que podra reproducir)

// cuando se crea un nuevo observador. Les reproduce esos (n ultimos) valores
subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

//luego de creado el observador continua su proceso de envios a multiples observadores
subject.next(5);



