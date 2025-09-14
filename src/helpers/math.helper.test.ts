import { describe, expect, test } from "vitest";
import { add, multiply, substract } from "./math.helper";

describe("add", () => {
  test("should add two positives numbers", () => {
    const a = 1;
    const b = 2;

    const result = add(a, b);

    expect(result).toBe(a + b);
  });

  test("should add two negative numbers", () => {
    const a = -2;
    const b = -4;

    const result = add(a, b);

    expect(result).toBe(a + b);
  });
});

describe("substract", () => {
  test("should substract two positives numbers", () => {
    const a = 3;
    const b = 2;

    const result = substract(a, b);

    expect(result).toBe(a - b);
  });

  test("should substract two negative numbers", () => {
    const a = -7;
    const b = -2;

    const result = substract(a, b);

    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("should multiply two positives numbers", () => {
    const a = 4;
    const b = 5;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });

  test("should multiply two negative numbers", () => {
    const a = -2;
    const b = 8;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});
