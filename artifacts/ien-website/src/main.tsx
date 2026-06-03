import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// In development, run axe-core after every render and log accessibility
// violations to the browser console. Stripped from production builds by Vite's
// dead-code elimination (import.meta.env.DEV is statically false on build).
if (import.meta.env.DEV) {
  void import("react-dom").then((ReactDOM) =>
    import("@axe-core/react").then((axe) => {
      axe.default(React, ReactDOM.default, 1000);
    }),
  );
}

createRoot(document.getElementById("root")!).render(<App />);
