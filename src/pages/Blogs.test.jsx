import Blogs from "./Blogs";
import { render, screen } from "@testing-library/react";

describe("Blogs", () => {
  test("render Blogs", () => {
    render(<Blogs />);
    console.log(screen.getByRole("heading"));
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
