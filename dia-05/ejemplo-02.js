var i=0;


//ejemplo de la creación de un observable. Cada 1seg nos va a ejecutar
var observable = Rx.Observable.create(function subscribe(observer) {
  //setTimeout(()=>{  a los 1seg va a correr el observer (1sola vez)
  // setInterval cada 1 segundo va a correr el observer (Infinitas veces)    
  var id = setInterval(() => { 
    i++;
    observer.next('Hola'+i)
  }, 1000);
});


//El observable “observable” en el ejemplo se puede suscribir, como esto:

//Suscribirse a un Observable es como llamar a una función, proporcionando devoluciones de llamada donde se entregarán los datos.
//Cada llamada a observable.subscribe desencadena su propia configuración independiente para cada Observers. Para este observador hay toda una configuración diferente que para otro observador que este suscrito al mismo sujeto
//Una llamada al subscribe es simplemente una forma de iniciar una “ejecución observable” y entregar valores o eventos a un observer de esa ejecución.
observable.subscribe(x => console.log(x)); //cada suscripcion es independiente a los otros en la ejecución
observable.subscribe(x => console.log(x));
observable.subscribe(x => console.log(x));




var observable = Rx.Observable.create(function subscribe(observer) {
  setTimeout(function() {
        try {
          //throw "Error2"; // genera una excepción con un valor cadena 
          observer.next(1);
          observer.next(2);
          observer.next(3);
          observer.complete();  //Una vez que aparece "Complete" o "Error" no muestra nada de lo que esta debajo
                               //“error” y “complete” pueden ocurrir sólo una vez durante la ejecución observable, y sólo puede haber uno de ellos("o esta complete, o esta error").
          observer.next(4); // No se entrega porque violaría el contrato. Ya tuvo complete
        } catch (err) {
            observer.error(err); // Entrega una notificación de “error” si sucede uno
        }
   }, 1000); 

});


//aqui se demuestra que cada observador tiene una configuracion diferente, e independiente de los otros observadores
observable.subscribe(x => console.log("obs1: "+x)); 
observable.subscribe(x => console.log("obs2: "+x)); 

//observable.subscribe(x => console.log(x));






var observable = Rx.Observable.from([10, 20, 30]);
var subscription = observable.subscribe(x => console.log(x));
//subscription.unsubscribe();


var observable = Rx.Observable.create(function subscribe(observer) {
  
  //setInterval(() => {   
        try {
          observer.next(i);
          i++;
        } catch (err) {
            observer.error(err); // Entrega una notificación de “error” si sucede uno
        }
   //}, 0); 

});



//Cuando se llama a "observable.subscribe", el observer se une a la ejecución recién creada del observable, 
//pero también esta llamada devuelve un "objeto de suscripción":
var observador1 = observable.subscribe(x => console.log("obs1: "+x)); 
var observador2 = observable.subscribe(x => console.log("obs2: "+x)); 
//La suscripción representa la ejecución en curso y tiene una API mínima que le permite cancelar esa ejecución.
// Con subscription.unsubscribe() puede cancelar la ejecución en curso:
observador1.unsubscribe();

