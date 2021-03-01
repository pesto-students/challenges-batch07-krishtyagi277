const allPromises = args => {
  if (args.length === 0) {
    return Promise.resolve([]);
  }
  const firstPromise = args.unshift();
  // eslint-disable-next-line max-len
  return Promise.resolve(firstPromise).then(firstPromiseResult => allPromises(args).then(restPromiseResults => [firstPromiseResult, ...restPromiseResults]));
};

export { allPromises };
