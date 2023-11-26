import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect } from "vitest";
import { Provider } from "react-redux";

import Details from "@pages/Details";
import { store } from "@app/store";

describe("Details page", () => {
  it("Should render correctly", async () => {
    render(
      <Provider store={store}>
        <Details />
      </Provider>,
      { wrapper: BrowserRouter },
    );

    expect(screen.getByText(/Resultados da pesquisa/i)).toBeTruthy();
  });
});
