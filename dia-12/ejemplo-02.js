var subject = new Rx.ReplaySubject(100, 500);  //buffer=100, tiempo=500

subject.subscribe({
    next: (v) => console.log('observerA' + v)
});


var i = 1;
setInterval(() => subject.next(i++), 200);

setTimeout(()=>{
    subject.subscribe({
        next : (v) => console.log('ObserverB: ' + v)  //este observador obtiene los ultimos eventos que ocurrieron en los últimos 500 milisegundos antes de su suscripción:
    });
}, 1000);

/*
Resumen:
  se especifica que cada nuevo observador recoja los 100 ultimos valores que ocurrieron en los ultimos 0.5 segundo antes de su suscripción,
  pero como su suscripción demora 1 segundo(el doble) y el primer observador demora 0.2 en mostrar sus valores pues entonces no recogera 100 valores sino los ultimos 3 valores

observador 1 le demora  => (acumulado)
  presentar 1: 0.2seg         0.2seg
  presentar 2: 0.2seg		  0.4seg	
  presentar 3: 0.2seg		  0.6seg	
  presentar 4: 0.2seg		  0.8seg	
  presentar 5: 0.2seg		   1seg	


  por tanto 3, 4 y 5 caen dentro de los ultimos 500milisegundos(0.5seg)

  son ellos los 3 ultimos en reproducirse al observador 2
  

*/