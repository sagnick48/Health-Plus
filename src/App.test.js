import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./Pages/Home", () => () => <div>Home Page</div>);
jest.mock("./Pages/Legal", () => () => <div>Legal Page</div>);
jest.mock("./Pages/Appointment", () => () => <div>Appointment Page</div>);
jest.mock("./Pages/NotFound", () => () => <div>Not Found Page</div>);

describe("App", () => {
  test("renders Home page on the default route", () => {
    window.history.pushState({}, "", "/Health-Plus/");

    render(<App />);

    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  test("renders Legal page on /legal", () => {
    window.history.pushState({}, "", "/Health-Plus/legal");

    render(<App />);

    expect(screen.getByText("Legal Page")).toBeInTheDocument();
  });

  test("renders Appointment page on /appointment", () => {
    window.history.pushState({}, "", "/Health-Plus/appointment");

    render(<App />);

    expect(screen.getByText("Appointment Page")).toBeInTheDocument();
  });

  test("renders NotFound page for an unknown route", () => {
    window.history.pushState({}, "", "/Health-Plus/unknown");

    render(<App />);

    expect(screen.getByText("Not Found Page")).toBeInTheDocument();
  });
});
