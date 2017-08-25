var subject = new Rx.ReplaySubject(100, 500);  //buffer=100, tiempo=500

subject.subscribe({
    next: (v) => console.log('observerA' + v)
});

var i = 1;
setInterval(() => subject.next(i++), 200);

setTimeout(()=>{
    subject.subscribe({
        next : (v) => console.log('ObserverB: ' + v)
    });
}, 1000);