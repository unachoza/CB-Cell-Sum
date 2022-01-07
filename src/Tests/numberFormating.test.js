import { formatValueTo3, getTotal } from "../calcs/numberFormating";

describe("Calculations to format the number to the nearest 3-digit number", () => {
  test("if 200000 will format less than 0 ", () => {
    expect(formatValueTo3(200000)).toBe("0.20M");
  });
  test("if less than 3 digits will not format", () => {
    expect(formatValueTo3(200)).toBe(200);
    expect(formatValueTo3(340)).toBe(340);
    expect(formatValueTo3(40)).toBe(40);
  });
  test("if given 3 Billion will format with B", () => {
    expect(formatValueTo3(3000000000)).toBe("3B");
  });
  test("if given 1 Trillion will format with B", () => {
    expect(formatValueTo3(1000000000000)).toBe("1T");
  });
  test("if given 9 Quadrillion will format with B", () => {
    expect(formatValueTo3(9000000000000000)).toBe("9Q");
  });
});

describe("sum all values", () => {
  test("if 3 values 2, 4, and 5 will equal 11", () => {
    expect(getTotal([2,4,5])).toBe(11);
  });
  test("if 10 values of 1 will equal 10", () => {
    expect(getTotal([1,1,1,1,1,1,1,1,1,1])).toBe(10);
  });
  test("if 3 large values 30000, 40000, 300000 will equal 370000", () => {
    expect(getTotal([30000, 40000, 300000])).toBe(370000);
  });
  test("if using two functions to sum 3 large values 30000, 40000, 300000 will equal 370000 formated to 0.37M", () => {
    expect(formatValueTo3(getTotal([30000, 40000, 300000]))).toBe("0.37M");
  });
    
});
