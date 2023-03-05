import validateNumCard from "./validatorNumCard";
import validateCard from "./validatorCard";

describe("Тестируем валидность номера карты", () => {
  test.each([
    { str: "4556451663032931", expected: true },
    { str: "", expected: false },
    { str: "6011705398301430", expected: true },
  ])("validateNumCard($str)", ({ str, expected }) => {
    expect(validateNumCard(str)).toBe(expected);
  });
});

describe("Тестируем принадлежность карты платежной системе", () => {
  test.each([
    { str: "4556451663032931", expected: ".visa" },
    { str: "", expected: false },
    { str: "6011705398301430", expected: ".discover" },
  ])("validateCard($str)", ({ str, expected }) => {
    expect(validateCard(str)).toBe(expected);
  });
});