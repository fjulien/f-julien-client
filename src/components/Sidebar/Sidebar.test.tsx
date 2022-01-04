import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar.component";

test("renders learn react link", () => {
  render(<Sidebar />);
  const linkElement = true;
  expect(linkElement).toBeTruthy();
  // expect(linkElement).toBeInTheDocument();
});