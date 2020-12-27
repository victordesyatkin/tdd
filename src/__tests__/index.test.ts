import Dollar from "../Dollar";
import Franc from "../Franc";

describe("testMultiplication", () => {
  const five: Dollar = new Dollar(5);
  test("times 2", () => {
    expect(JSON.stringify(new Dollar(10))).toEqual(
      JSON.stringify(five.times(2))
    );
  });
  test("times 3", () => {
    expect(JSON.stringify(new Dollar(15))).toEqual(
      JSON.stringify(five.times(3))
    );
  });
  test("testEquality", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(6).equals(new Dollar(5))).toBeFalsy();
  });
});

describe("testFrancMultiplication", () => {
  const five: Franc = new Franc(5);
  test("times 2", () => {
    expect(JSON.stringify(new Franc(10))).toEqual(
      JSON.stringify(five.times(2))
    );
  });
  test("times 3", () => {
    expect(JSON.stringify(new Franc(15))).toEqual(
      JSON.stringify(five.times(3))
    );
  });
  test("testEquality", () => {
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
    expect(new Franc(6).equals(new Franc(5))).toBeFalsy();
  });
});
