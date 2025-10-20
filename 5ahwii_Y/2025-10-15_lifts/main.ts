const arr = [-13, 7, 4, -99, 108, 42];

const res = arr.reduce((accu, v) => {
  return (Math.abs(v) < Math.abs(accu)) ? v : accu;
}, Number.MAX_SAFE_INTEGER);
console.log(res);
