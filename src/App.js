import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const LayoutDashboard = lazy(() => import("./layouts/LayoutDashboard"));
function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/sign-up" exact element={<SignUpPage />}></Route>
        <Route path="/sign-in" exact element={<SignInPage />}></Route>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route
            path="/"
            exact
            element={<DashboardPage></DashboardPage>}
          ></Route>
          <Route
            path="/campaign"
            exact
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="*"
            exact
            element={<DashboardPage></DashboardPage>}
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
