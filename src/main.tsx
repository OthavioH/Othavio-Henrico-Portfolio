import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./styles/global.style.ts";
import { IntlProvider } from "react-intl";

import BrazilianPortuguese from "./lang/pt_br.json";
import English from "./lang/en_us.json";

export const locale = navigator.language;
export const messages = locale === "pt-BR" ? BrazilianPortuguese : English;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages}>
      <GlobalStyles />
      <App />
    </IntlProvider>
  </React.StrictMode>
);
