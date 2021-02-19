const deepCopyObject = objToCopy => {
  if (typeof objToCopy !== 'object' || !objToCopy) {
    return objToCopy;
  }
  const copyObject = {};
  Object.keys(objToCopy).map((item) => {
    copyObject[item] = deepCopyObject(objToCopy[item]);
    return copyObject[item];
  });
  return copyObject;
};

export { deepCopyObject };
