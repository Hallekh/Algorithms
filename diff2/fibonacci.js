



let one = 0;
let two = 1;

for (let i = 1; i <= 29; i++) {
	let current = one + two;
	
	one = two;
	two = current;
	
	console.log(current);
}
