import { render, screen } from "@testing-library/react";
import App from "./App";

test("question 1", () => {
  render(<App />);
  const response1 = screen.getByText("default1");
  expect(response1).toBeInTheDocument;
});
