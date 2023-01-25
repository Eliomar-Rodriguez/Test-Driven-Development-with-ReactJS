import { afterAll, afterEach, describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
const operations = ["+", "-", "*", "/"];
const equalSign = "=";

const Calculator = () => {
  return (
    <section>
      <h1>Calculator</h1>
      <input/>
      <div role="grid">
        {rows.map((row, idx) => (
          <div key={idx} role="row">
            {row.map((number) => (
              <span key={number}>{number}</span>
            ))}
          </div>
        ))}
        {operations.map((operation) => (
          <span key={operation}>{operation}</span>
        ))}
        <span>{equalSign}</span>
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
  });

  it("should render 4 rows", () => {
    render(<Calculator />);
    const rows = screen.getAllByRole("row");

    expect(rows.length).toBe(4);
  });

  it("should render operations", () => {
    render(<Calculator />);
    operations.forEach((operation) => {
      screen.getByText(operation);
    });
  });

  it("should render equal sign", () => {
    render(<Calculator />);
    screen.getByText('=');
  });

  it("should render an input", () => {
    render(<Calculator />);
    screen.getByRole('textbox');
  });
});
