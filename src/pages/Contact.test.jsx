import Contact from "./Contact";
import { render, screen } from "@testing-library/react";

describe("Contact", () => {
  test("render Contact", () => {
    render(<Contact />);
    console.log(screen.getByRole("heading"));
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
