import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const LayoutDashboard = lazy(() => import("./layouts/LayoutDashboard"));
function App() {
  return (
    <Routes>
      <Route element={<LayoutDashboard />}>
        <Route path="/"  element={<DashboardPage />}></Route>
      </Route>
      <Route path="/sign-up" exact element={<SignUpPage />}></Route>
      <Route path="/sign-in" exact element={<SignInPage />}></Route>
    </Routes>
  );
}

export default App;
