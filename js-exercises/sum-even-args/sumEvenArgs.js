const sumEvenArgs = (...args) => {
  let sum = 0;
  if (args.length === 0) {
    return sum;
  }
  for (const num of args) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
};

export { sumEvenArgs };
