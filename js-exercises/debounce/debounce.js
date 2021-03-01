function debounce(fn, timeInMs) {
  let timeout;
  const functionToExecute = (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(context, args);
    }, timeInMs);
  };
  functionToExecute.cancel = () => {
    clearTimeout(timeout);
  };
  return functionToExecute;
}

export { debounce };
