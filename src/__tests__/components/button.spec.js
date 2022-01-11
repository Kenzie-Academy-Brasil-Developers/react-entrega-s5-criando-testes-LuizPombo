import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../../components/Search";

describe("Button component", () => {
  it("should be able to use the button", () => {
    render(<Search />);

    expect(screen.getByText("Buscar pelo CEP")).toBeTruthy();
  });
});
