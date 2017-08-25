//OBSERVABLE SIMPLE. Este es unicast
//Envía información desde un Productor a cada consumidor de forma individual(no simultaneamente)
//primero envia el 1 al observador1, el 2 al observador1, el 3 al observador1,
//Luego  envia el 1 al observador2, el 2 al observador2, el 3 al observador2, 
//y asi sucesivamente con los otros observadores
//Pensar en este como una llamada de telefono donde hay un Receptor y un emisor

console.log('====================OBSERVABLE SIMPLE - UNICAST  =========================================');
var observable = Rx.Observable.from([1,2,3]);
observable.subscribe({ 
  next: (v) => console.log('observadorA: ' + v) 
}); 
observable.subscribe({ 
  next: (v) => console.log('observadorB: ' + v) 
}); 
observable.subscribe({ 
  next: (v) => console.log('observadorC: ' + v) 
}); 



console.log('====================SUBJECT SOLO COMO PRODUCTOR - MULTICAST  =========================================');

////////////////////////Subject/////////////////////////////////////////////////////////
//Un Subject de RxJS es un tipo especial de Observable que permite que los valores sean, “multicasted”
//Multicast (multidifusión): Para mi es una relacion de MUCHO - MUCHO
//Generalmente hace función de PRODUCTOR Y al mismo tiempo de CONSUMIDOR
//Como PRODUCTOR envía información a múltiples consumidores(u observadores) de forma simultanea.
//Como CONSUMIDOR puede RECIBIR información de múltiples PRODUCTORES(u OBSERVABLES).

// EJEMPLO de un subject solo como PRODUCTOR, donde envia(.next) cada información a los observadores que los estan siguiendo
//Pensar en este como el TV donde muchos al mismo tiempo estan consumiendo.
var sujeto = new Rx.Subject();

// Cada Subject es un Observador. Es un objeto con los métodos next(v), error (e), y complete(). 
sujeto.subscribe({
    next: (v) => console.log('ObserverA '+ v)
});
sujeto.subscribe({
    next: (v) => console.log('ObserverB '+ v)
});


// Para alimentar un nuevo valor del Subject, simplemente hay que llamar a next(valor), 
// y se multidifundirá a los Observadores registrados para escuchar el Subject.
// Ver que en este ejemplo envia el 1 a todos los observadores, luego el 2 a todos los observadores, y luego el 3 a todos los observadores
// Exactamente esta es la diferencia con el unicast(el observable simple)
sujeto.next(1);
sujeto.next(2);
sujeto.next(3);


//En este caso subject hace función de PRODUCTOR Y al mismo tiempo de CONSUMIDOR
//Pensar en este como un profesor(SUBJECT) que esta en un aula y que le esta transmitiendo a muchos alumnos(consumidores u observadores), 
//Lo que esta escrito en un libro(en este caso OBSERVABLE).

console.log('====================SUBJECT COMO PRODUCTOR Y CONSUMIDOR - MULTICAST  =========================================');

var sujeto = new Rx.Subject(); //devuelve un objeto 
sujeto.subscribe({ 
  next: (v) => console.log('obA: ' + v) 
}); 
sujeto.subscribe({ 
  next: (v) => console.log('obsB: ' + v) 
}); 

var observable = Rx.Observable.from([1, 2, 3]); 
//aqui es donde hace función de Observable y Observador al mismo instante
//Como consumidor recibio información del Observable
//Y como OBSERVABLE especial(subject) entrega cada dato que recibio a los observadores
observable.subscribe(sujeto); // Puede suscribirse proporcionando un  Subject
