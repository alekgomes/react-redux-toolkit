import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect } from "vitest";
import { Provider } from "react-redux";

import Home from "../pages/Home";
import { store } from "../app/store";

describe("Home", () => {
  it("Should render correctly", async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
      { wrapper: BrowserRouter },
    );

    expect(screen.getByText(/Pesquisa sobre filmes favoritos/i)).toBeTruthy();
  });
});
