import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./assets/styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <App />
    <GlobalStyle />
  </>
);
