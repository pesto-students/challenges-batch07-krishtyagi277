function balancedBraces(args) {
  const stack = [];
  const bracesMap = {
    '(': ')', '[': ']', '{': '}',
  };
  for (const currentChar of args) {
    if (currentChar === '{' || currentChar === '[' || currentChar === '(') {
      stack.push(currentChar);
    } else if (currentChar === '}' || currentChar === ']' || currentChar === ')') {
      const lastBracket = stack.pop();
      if (currentChar !== bracesMap[lastBracket]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}

export {
  balancedBraces,
};
