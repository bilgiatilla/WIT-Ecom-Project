export const maskCardNumber = (cardNo) => {
  if (!cardNo) return "";

  const clean = String(cardNo).replace(/\s/g, "");

  if (clean.length < 4) return clean;

  return `${clean.slice(0, 4)} **** **** ${clean.slice(-4)}`;
};