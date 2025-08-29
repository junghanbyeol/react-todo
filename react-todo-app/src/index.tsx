import React from "react";
import ReactDOM from "react-dom/client"; // ✅ 중요!
import { RecoilRoot } from "recoil";
import App from "./App";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
