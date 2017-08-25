//AsyncSubject espera a que la notificación "complete" con el fin de entregar un único valor.

var subject = new Rx.AsyncSubject();

subject.subscribe({
    next: (v) => console.log('ObserverA' + v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
    next: (v) => console.log('ObserverB' + v)
});

subject.next(5);
subject.complete();


/*por tanto: todos los observadores mostraran el 5 que es el ultimo valor*/

