import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import { HashRouter } from "react-router-dom";

import Routes from "@routes/index";
import store from "@store/index";

import "@styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <HashRouter>
      <Routes />
    </HashRouter>
  </Provider>
);
