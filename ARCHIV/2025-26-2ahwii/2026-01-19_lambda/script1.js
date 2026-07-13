const input = [7,2,6,3,8,0];

function ist_gerade(n) {
	console.log(`ist gerade?: ${n}`);
	return n%2 == 0;
}

const output = input.filter(ist_gerade);
console.log(output);
