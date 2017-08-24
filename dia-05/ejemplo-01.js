var observable = Rx.Observable.create(function subscribe(observer) {
  var id = setInterval(() => {
    observer.next('hola');
  }, 1000);
  return function unsubscribe() {
    clearInterval(id);
  };
});


function subscribe(observer){
    var id = setInterval(() => {
        observer.next('hola');
    }, 1000);
    return function unsubscribe(){
        clearInterval(id);
    }
}

var unsubcribe  = subscribe( { next : (x) => console.log(x)});

unsubcribe();



var i=0;
var observable = Rx.Observable.create(function subscribe(observer) {
  
  var id= setInterval(() => {   
        try {
          observer.next(i);
          i++;
        } catch (err) {
            observer.error(err); // Entrega una notificación de “error” si sucede uno
        }
   }, 3000); 

    return function unsubscribe(){  // define un subscribe aqui adentro para poder hacer otras operaciones cuando cancela
        console.log("osmel");
        clearInterval(id);
    }


});



//Cuando se llama a "observable.subscribe", el observer se une a la ejecución recién creada del observable, 
//pero también esta llamada devuelve un "objeto de suscripción":
var observador1 = observable.subscribe(x => console.log("obs1: "+x)); 
var observador2 = observable.subscribe(x => console.log("obs2: "+x)); 
//La suscripción representa la ejecución en curso y tiene una API mínima que le permite cancelar esa ejecución.
// Con subscription.unsubscribe() puede cancelar la ejecución en curso:

observador1.unsubscribe();  //ejecuta el suscribe que esta dentro del observable

//observador2.unsubscribe();
