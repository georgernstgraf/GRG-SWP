export function isPrime(num: number): boolean {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Is 2 prime?", isPrime(2));
  console.log("Is 3 prime?", isPrime(3));
  console.log("Is 4 prime?", isPrime(4));
  console.log("Is 5 prime?", isPrime(5));
  console.log("Is 6 prime?", isPrime(6));
}
