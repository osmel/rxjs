
var subject = new Rx.BehaviorSubject(0); // valor inicial

//Almacena el último valor emitido a sus consumidores, como el valor inicial del BehaviorSubject es 0, pues es su ultimo valor actual

subject.subscribe({
    next: (v) => console.log('ObserverA' + v)
});

subject.next(1);
subject.next(2);

//cada vez que un nuevo observador se suscriba, recibirá inmediatamente el “valor actual” del BehaviorSubject
//OJO en este caso solo el nuevo observador recibe el valor, no envia simultaneamente el ultimo valor, porque
//acaba de suscribirse. Luego que ya esta suscrito pues si envia simultaneamente los proximos valores
subject.subscribe({
    next: (v) => console.log('ObserverB' + v)
});

subject.next(3);