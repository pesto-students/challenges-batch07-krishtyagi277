function removeFalsyValues(array) {
  const filteredArray = array.filter((item) => {
    if (item) {
      return true;
    }
    return false;
  });
  return filteredArray;
}

export {
  removeFalsyValues,
};
