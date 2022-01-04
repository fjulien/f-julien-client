import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import dayjs from "dayjs";
import { ConfigProvider } from "antd";
import frFR from "antd/lib/locale/fr_FR";
import "antd/dist/antd.css";
import "./index.scss";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { BrowserRouter } from "react-router-dom";

dayjs.extend(customParseFormat);
dayjs.locale("fr");

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={frFR}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
