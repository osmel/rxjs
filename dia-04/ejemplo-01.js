//funcion nativa de javascript
function foo(){
    console.log('Hello');
    return 42;
}


var x = foo.call();
console.log(x);
var y = foo.call();
console.log(y);


//rxjs 
//esta funcion es equivalente a la de arriba
var fooRxjs = Rx.Observable.create(function (observer){
    console.log('Hello');
    observer.next(42);  //un push de forma sincronica
});

fooRxjs.subscribe(function(x){
    console.log(x);
});
fooRxjs.subscribe(function(y){
    console.log(y);
});