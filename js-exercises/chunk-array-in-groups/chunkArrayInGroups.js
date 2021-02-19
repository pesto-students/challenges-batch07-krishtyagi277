function chunkArrayInGroups(array, chunkSize) {
  return [].concat.apply([],
    array.map(function PartitionArray(elem, i) {
      return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
    }));
}

export {
  chunkArrayInGroups,
};
