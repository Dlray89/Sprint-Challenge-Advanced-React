import React from "react";
import { render } from "@testing-library/react";
import Nav from "./Navbar";

test("render App without crashing", () => {
  render(<Nav />);
});
