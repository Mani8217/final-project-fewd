import Home from "./Contact";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  test("render Contact", () => {
    render(<Home />);
    console.log(screen.getByRole("heading"));
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
