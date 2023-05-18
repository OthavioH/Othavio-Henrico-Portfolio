import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import App from "./App.tsx";
import GlobalStyles from "./styles/global.style.ts";

import { Provider } from "react-redux";
import English from "./lang/en_us.json";
import BrazilianPortuguese from "./lang/pt_br.json";
import store from "./redux/store.ts";

export const locale = navigator.language;
export const messages = locale === "pt-BR" ? BrazilianPortuguese : English;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider locale={locale} messages={messages}>
        <GlobalStyles />
        <App />
      </IntlProvider>
    </Provider>
  </React.StrictMode>
);
