import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const CampaignAddNew = lazy(() => import("./modules/campaign/parts/CampaignAddNew"))
const SignInPage = lazy(() => import("./pages/SignInPage"));
// import SignUpPage from "./pages/SignUpPage";
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const LayoutDashboard = lazy(() => import("./layouts/LayoutDashboard"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
function App() {
  return (
    <Suspense>
      <Routes>
        <Route
          path="/sign-up"
          exact
          element={<SignUpPage></SignUpPage>}
        ></Route>
        <Route
          path="/sign-in"
          exact
          element={<SignInPage></SignInPage>}
        ></Route>
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
            path="/start-campaign"
            exact
            element={<CampaignAddNew></CampaignAddNew>}
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
