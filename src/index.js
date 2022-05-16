import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import  {AuthenticationProvider}  from "./context";

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthenticationProvider>
      <App />
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
