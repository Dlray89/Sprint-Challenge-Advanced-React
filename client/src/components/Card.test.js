import React from "react";
import Card from "./Card";
import { render } from "@testing-library/react";

test("render App without crashing", () => {
  render(<Card />);
});
