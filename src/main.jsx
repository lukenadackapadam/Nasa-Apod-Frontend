import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";

// import App from "./App.jsx";
// import "./index.css";

// const rootElement = document.getElementById("root");

// if (rootElement) {
//   const root = createRoot(rootElement);

//   root.render(
//     <Router>
//       <App />
//     </Router>
//   );
// }
