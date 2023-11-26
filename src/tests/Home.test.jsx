import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect } from "vitest";
import { Provider } from "react-redux";

import Home from "@pages/Home";
import { store } from "@app/store";

describe("Home page", () => {
  it("Should render correctly", async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
      { wrapper: BrowserRouter },
    );

    expect(screen.getByText(/Pesquisa sobre filmes favoritos/i)).toBeTruthy();
  });

  it("Should focus the name input when user try to submit with no name", async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
      { wrapper: BrowserRouter },
    );

    const submitBtn = screen.getByText(/enviar/i);
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByRole("textbox")).toBe(document.activeElement);
    });
  });
});
