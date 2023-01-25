import { afterAll, afterEach, describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
const Calculator = () => {
  return (
    <section>
      <h1>Calculator</h1>
      <div role="grid">
        {rows.map((row, idx) => (
          <div key={idx} role="row">
            {row.map((number) => (
              <span key={number}>{number}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

describe("Calculator", () => {
  afterEach(cleanup);

  it("should render", () => {
    render(<Calculator />);
  });

  it("should render title correctly", () => {
    render(<Calculator />);
    screen.getByText("Calculator");
  });

  it("should render numbers", () => {
    render(<Calculator />);
    numbers.forEach((number) => {
      screen.getByText(number);
    });
    screen.getByText("Calculator");
  });

  it("should render 4 rows", () => {
    render(<Calculator />);
    const rows = screen.getAllByRole("row");

    expect(rows.length).toBe(4);
  });
});
