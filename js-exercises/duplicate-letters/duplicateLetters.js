function duplicateLetters(...args) {
  const str = args[0].trim().split('');
  const hash = new Map();
  for (let i = 0; i < str.length; i += 1) {
    if (hash.get(str[i]) === undefined) {
      hash.set(str[i], 1);
    } else {
      const value = hash.get(str[i]) + 1;
      hash.set(str[i], value);
    }
  }
  let maxDuplicates = 0;
  const noDuplicates = false;
  hash.forEach((val) => {
    if (maxDuplicates < val) {
      maxDuplicates = val;
    }
  });
  if (maxDuplicates === 1) {
    return noDuplicates;
  }
  return maxDuplicates;
}

export {
  duplicateLetters,
};
