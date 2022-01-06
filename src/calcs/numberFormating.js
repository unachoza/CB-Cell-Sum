const getTotal = (values) => values.reduce((prevTotal, currentTotal) => prevTotal + currentTotal);

const formatValueTo3 = (value) => {
  if (value.toString().length < 4) return value
  var suffixes = ["", "K", "M", "B", "T", "Q"];
  var suffixNum = Math.floor(("" + value).length / 3);
  var shortValue = parseFloat((suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(3));
  if (shortValue % 1 !== 0) {
    shortValue = shortValue.toFixed(2);
  }
  return shortValue + suffixes[suffixNum];
};


export { formatValueTo3 , getTotal};

