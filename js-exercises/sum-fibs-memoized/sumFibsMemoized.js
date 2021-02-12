function sumFibs(num) {
  let t1 = 0;
  let t2 = 1;
  let nextTerm = 0;
  let sum = 1;
  nextTerm = t1 + t2;
  while (nextTerm <= num) {
    if (nextTerm % 2 !== 0) {
      sum += nextTerm;
    }
    t1 = t2;
    t2 = nextTerm;
    nextTerm = t1 + t2;
  }
  return sum;
}

function cacheFunction(sumFibs) {
  const memo = {};
  const result = (n) => {
    let value;
    if (n in memo) {
      value = memo[n];
    } else {
      memo[n] = sumFibs(n);
      value = memo[n];
    }
    return value;
  };
  return result;
}

export { sumFibs, cacheFunction };
