function rot13(args) {
  let encMsg = '';
  for (const ch of args.trim()) {
    let code = ch.charCodeAt(0);
    if (code >= 65 && code <= 65 + 26 - 1) {
      code -= 65;
      code = (code + 39) % 26;
      code += 65;
    }
    encMsg += String.fromCharCode(code);
  }
  return encMsg;
}

export {
  rot13,
};
