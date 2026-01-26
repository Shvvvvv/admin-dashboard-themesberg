import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard.tsx";
import UserSetting from "./pages/UserSetting.tsx";
import { ROUTES } from "./routes/routes.ts";
import Messages from "./pages/Messages.tsx";
import DetailMessages from "./pages/DetailMessages.tsx";
import Users from "./pages/Users.tsx";
import Profile from "./pages/Profile.tsx";
import Products from "./pages/Products.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}>
          <Route index element={<Dashboard/>} />
          <Route path={ROUTES.USER_SETTING.relative} element={<UserSetting/>} />
          <Route path={ROUTES.MESSAGES.relative} element={<Messages/>} />
          <Route path={ROUTES.MESSAGES_DETAIL.relative} element={<DetailMessages/>} />
          <Route path={ROUTES.USERS.relative} element={<Users/>} />
          <Route path={ROUTES.PROFILE.relative} element={<Profile/>} />
          <Route path={ROUTES.PRODUCTS.relative} element={<Products/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
