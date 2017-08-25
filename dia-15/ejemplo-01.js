//operadores de instancia, usando prototype reflejamos el nombre del método "Rx.Observable.prototype.multiplyByTen = function multiplyByTen(){"
//y el argumento lo recibimos con el contexto "this"
//"this" que será el observable que se pasa de la forma siguiente 
  //  var observable = Rx.Observable.from([1, 2, 3, 4]).multiplyByTen();

//esta es similar a la del ejemplo del día 14 pero ahora usando prototype
/*
Rx.Observable.prototype.multiplyByTen = function multiplyByTen() {
    var input = this;  //este será el contexto pasado
    return Rx.Observable.create(function subscribe(observer) {
        input.subscribe({
            next: (v) => observer.next(10 * v),
            error: (err) => observer.error(err),
            complete: () => observer.complete()
        });
    });
}

var observable = Rx.Observable.from([1, 2, 3, 4]).multiplyByTen();
//var observable = Rx.Observable.interval(1000).multiplyByTen();  //-->interval() --> va generardo numeros desde 0 hasta infinito en el intervalo indicado en este caso cada 1 seg
observable.subscribe(x => console.log(x));
*/




// No utiliza esta palabra this, sino que se basa en su totalidad en sus argumentos.
//Son funciones puras unidas a la clase Observable, y usualmente se usan para crear observables desde cero.
//operador estático: Toma un número (no un Observable) como argumento de entrada, y produce un Observable como salida:

//var observable1 = Rx.Observable.interval(5000);
//var observable2 = Rx.Observable.interval(1000);

var observable1 = Rx.Observable.from([1, 2, 3, 4]);
var observable2 = Rx.Observable.from([5,6,7,8]);

var merged = Rx.Observable.merge(observable1, observable2);

merged.subscribe( x => console.log(x));

