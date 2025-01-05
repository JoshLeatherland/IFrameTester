import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initI18n } from "./utils/index.js";
import en from "./locals/en.json";
import es from "./locals/es.json";
import fr from "./locals/fr.json";
import de from "./locals/de.json";

initI18n({
  en,
  es,
  fr,
  de,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={{ width: "100vw" }}>
      <App />
    </div>
  </StrictMode>
);
