import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Remove the no-js class so the static SEO fallback collapses out of view
document.documentElement.classList.remove("no-js");

createRoot(document.getElementById("root")!).render(<App />);
