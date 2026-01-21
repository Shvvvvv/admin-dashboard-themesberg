import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard.tsx";
import UserSetting from "./pages/UserSetting.tsx";
import { ROUTES } from "./routes/routes.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}>
          <Route index element={<Dashboard/>} />
          <Route path={ROUTES.USER_SETTING.relative} element={<UserSetting/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
