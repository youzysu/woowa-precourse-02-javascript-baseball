const removeListDuplication = (list) => {
  return [...new Set(list)];
};

exports.removeListDuplication = removeListDuplication;
