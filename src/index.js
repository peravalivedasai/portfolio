import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Render your React app
ReactDOM.render(<App />, document.getElementById("root"));

// Optional: register for PWA (offline)
serviceWorker.unregister();
