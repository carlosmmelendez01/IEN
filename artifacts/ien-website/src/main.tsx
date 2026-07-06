import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

if (import.meta.env.DEV) {
  void import("react-dom").then((ReactDOM) =>
    import("@axe-core/react").then((axe) => {
      axe.default(React, ReactDOM.default, 1000);
    }),
  );
}

createRoot(document.getElementById("root")!).render(<App />);
