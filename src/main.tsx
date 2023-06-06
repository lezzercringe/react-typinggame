import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "apifirebase/config.ts";
import "./index.css";
import { getFirestore } from "firebase/firestore";

export const firebaseapp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseapp);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
