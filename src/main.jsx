import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/Store.jsx";
import { AuthContextProvider } from "./authContext/Auth.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </AuthContextProvider>
    </Provider>
  </StrictMode>,
);
