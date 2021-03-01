function allSettled(arr = []) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    const result = [];
    arr.forEach((item) => {
      if (typeof item === 'number') {
        result.push({ status: 'fulfilled', value: item });
      } else {
        item
          .then((value) => {
            result.push({ status: 'fulfilled', value });
            if (arr.length === result.length) resolve(result);
          })
          .catch((err) => {
            result.push({ status: 'rejected', reason: `${err}` });
            if (arr.length === result.length) resolve(result);
          });
      }
    });
  });
}

export { allSettled };
