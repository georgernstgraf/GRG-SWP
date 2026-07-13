const input = [7,2,6,3,8,0];

const output = input.filter((number_to_be_examined) => {
	console.log(`wurde gefragt nach ${number_to_be_examined}`);
	return number_to_be_examined % 2 == 0;
	});
console.log(output);
