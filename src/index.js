import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthenticationProvider, WatchLaterProvider, PlaylistProvider, LikedVideoContextProvider } from "./context";

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationProvider>
        <WatchLaterProvider>
          <PlaylistProvider>
            <LikedVideoContextProvider>
              <App />
            </LikedVideoContextProvider>
          </PlaylistProvider>
        </WatchLaterProvider>
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
