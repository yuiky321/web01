import { render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");

  expect(counterElement).toHaveTextContent(0);
});

test("마이너스버튼", () => {
  render(<App />);
  const buttonElements = screen.getByTestId("minus-button");
  expect(buttonElements).toHaveTextContent("-");
});

test("플러스 버튼", () => {
  render(<App />);
  const buttonElements = screen.getByTestId("plus-button");
  expect(buttonElements).toHaveTextContent("+");
});
