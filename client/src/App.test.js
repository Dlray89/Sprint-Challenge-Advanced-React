import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

test("render App without crashing", () => {
  render(<App />);
});
