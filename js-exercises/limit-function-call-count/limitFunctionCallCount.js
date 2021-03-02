const limitFunctionCallCount = (func, count) => {
  let callCount = count || 0;
  return (...args) => {
    if (callCount > 0) {
      callCount -= 1;
      return func.apply(this, args);
    }
    callCount -= 1;
    return null;
  };
};

export {
  limitFunctionCallCount,
};
