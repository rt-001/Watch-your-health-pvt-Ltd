exports.getValueFromPath = (obj, path) => {
  return path.split(".").reduce((acc, part) => {
    const arrayMatch = part.match(/(\\w+)\\[(\\d+)\\]/);
    if (arrayMatch) {
      const [, arr, idx] = arrayMatch;
      return acc && acc[arr] ? acc[arr][parseInt(idx)] : undefined;
    }
    return acc ? acc[part] : undefined;
  }, obj);
};
