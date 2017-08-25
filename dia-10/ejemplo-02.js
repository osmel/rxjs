var source = Rx.Observable.interval(500);
var subject = new Rx.Subject();

// RECORDAR QUE "source.multicast(subject)" DEVUELVE UN "ConnectableObservable"
//retorna un Observable, no otro ConnectableObservable.
//retorna un Observable que registra cuántos suscriptores tiene.
var refCounted = source.multicast(subject).refCount();

var subscription1, subscription2, subscriptionConnect;

//nOTA: "refCount" Hace que el Multicasted Observable comience(start) automáticamente a ejecutarse cuando llegue el primer subscribe
// y para(STOP) la ejecución cuando el último subscribe se vaya.


console.log('ObserverA subscribed');
subscription1 = refCounted.subscribe({
    next: (v) => console.log('ObserverA: ' + v)
});

setTimeout(()=>{
    console.log('ObserverB subscribe');
    subscription2 = refCounted.subscribe({
        next: (v) => console.log('ObserverB: '+ v)
    })
}, 600);

setTimeout(()=>{
    console.log('Observer a unsubscribed');
    subscription1.unsubscribe();
}, 1200);

setTimeout(()=>{
    console.log('observerB unsubscribed');
    subscription2.unsubscribe();
},2000);



