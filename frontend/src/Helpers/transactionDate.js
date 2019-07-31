function formatTransactionDate(date) {
  const splitDate = date.split('-');
  const year = splitDate[0].slice(-2);
  const month = splitDate[1];
  const day = splitDate[2].slice(0, 2);

  return `Transaction Date: ${month}-${day}-${year}`
}

export { formatTransactionDate };