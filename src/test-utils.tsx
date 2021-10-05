import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: { user: userReducer },
  preloadedState: { user: {} },
});
const AllTheProviders: FC = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
