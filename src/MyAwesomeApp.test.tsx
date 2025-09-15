import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("Should render first and lastname", () => {
    const { container } = render(<MyAwesomeApp />);

    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");

    expect(h1?.innerHTML).toContain("Fernando");
    expect(h3?.innerHTML).toContain("Herrera");
  });

  test("Should render first and lastname - screen", () => {
    render(<MyAwesomeApp />);
    // screen.debug();

    const h1 = screen.getByTestId("first-name-title");
    expect(h1.innerHTML).toContain("Fernando");
  });

  test("Should match snapsnot", () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });

  test("Should match snapsnot", () => {
    render(<MyAwesomeApp />);
    expect(screen.getByTestId("div-app")).toMatchSnapshot();
  });
});
