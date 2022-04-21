export const formatRent = (rent) => {
  return Intl.NumberFormat({ style: "currency", currency: "SEK" })
    .format(rent)
    .replace(",", " ");
};

export const formatAddress = (address) => {
  if (address.length < 1) {
    return ["", ""];
  }

  const REGEX = /\d{3}[ ]?\d{2}/gm;
  const splitIndex = REGEX.exec(address).index;

  return [
    address.slice(0, splitIndex).replace(", ", ""),
    address.slice(splitIndex).replace(", ", "") + ", Sverige",
  ];
};
