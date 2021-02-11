function abbreviateString(str) {
  const splitStr = str.trim().split(' ');
  if (splitStr.length > 1) {
    const firstName = splitStr[0];
    const lastChar = splitStr[splitStr.length - 1].charAt(0).toUpperCase();
    return (`${firstName} ${lastChar}.`);
  }
  return splitStr[0];
}

export { abbreviateString };
