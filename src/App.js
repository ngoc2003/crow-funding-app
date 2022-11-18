import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import CampaignView from "./modules/campaign/parts/CampaignView";
import Modal from "react-modal";

const customStyles = {
  content: {
    // top: '50%',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement("#root");
Modal.defaultStyles = {};
const CampaignAddNew = lazy(() =>
  import("./modules/campaign/parts/CampaignAddNew")
);
const SignInPage = lazy(() => import("./pages/SignInPage"));
// import SignUpPage from "./pages/SignUpPage";
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const ShippingPage = lazy(() => import("./pages/ShippingPage"));
const LayoutDashboard = lazy(() => import("./layouts/LayoutDashboard"));
const LayoutPayment = lazy(() => import("./layouts/LayoutPayment"));
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
            path="/campaign/:slug"
            exact
            element={<CampaignView></CampaignView>}
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
        <Route element={<LayoutPayment/>}>
        <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path="/shipping-address"
            element={<ShippingPage></ShippingPage>}
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
