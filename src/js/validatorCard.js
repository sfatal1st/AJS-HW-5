export default function validateCard(setValue) {
  const num = String(setValue).replace(/\D/g, "");
  if ("" === num) return false;
  let n = parseInt(num[0], 10);
  switch (n) {
    case 2:
      return ".mir";
    case 3:
      return ".americanExpress";
    case 4:
      return ".visa";
    case 5:
      return ".masterCard";
    case 6:
      return ".discover";
  }
  return false;
}
