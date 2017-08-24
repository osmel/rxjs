function* prueba(){
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	return 5
}

var a = prueba();

//https://www.youtube.com/watch?v=OUwSxXwaK5M

console.log(a.next());
console.log(a.next());

console.log(a.next());
console.log(a.next());
console.log(a.next());

console.log(a.next());