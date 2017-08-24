//recibe una funcion anonima que va a recibir un observer
var observable = Rx.Observable.create(function (observer){
  
  observer.next(1);//valores sincronicos
  observer.next(2);
  observer.next(3);

  setTimeout(()=>{
    observer.next(4); //valores Asyncronicos en un tiempo determinado, 
    observer.complete();
  }, 1000);
});

console.log('just antes de subscribirnos');
observable.subscribe({
  next : x => console.log('x vale', x),
  error: err => console.log('algo salio mal', err),
  complete: () => console.log('done'),
});
console.log('just despues de subscribirnos'); 

 