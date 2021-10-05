import React, { Suspense, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks";
import { login, logout } from "./userSlice";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation("abc");
  const id = useAppSelector((state) => state.user.id);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(id);
  }, [id]);
  useEffect(() => {
    dispatch(
      login({
        id: 456,
      })
    );
    setTimeout(() => {
      dispatch(logout());
    }, 1000);
  }, []);
  return (
    <Suspense fallback="load...">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{t("cde")}</p>
          <p>{t("d.e")}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Suspense>
  );
}

export default App;
