import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
<<<<<<< HEAD
import { SearchProvider } from "./context/search";
=======
>>>>>>> a4793c23298a417d0d1f2aaf0a0245a2347ab8c7
import "antd/dist/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
<<<<<<< HEAD
    <SearchProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchProvider>
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> a4793c23298a417d0d1f2aaf0a0245a2347ab8c7
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
<<<<<<< HEAD
reportWebVitals();
=======
reportWebVitals();
>>>>>>> a4793c23298a417d0d1f2aaf0a0245a2347ab8c7
