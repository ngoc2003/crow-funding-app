import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CampaignView from "./modules/campaign/parts/CampaignView";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken, updateUser } from "./store/auth/auth-slice";
import { getToken, logOut } from "./utils/auth";

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
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const WithdrawPage = lazy(() => import("./pages/WithdrawPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const StartCampaign = lazy(() => import("./pages/StartCampaign"));
const ShippingPage = lazy(() => import("./pages/ShippingPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const LayoutDashboard = lazy(() => import("./layouts/LayoutDashboard"));
const LayoutPayment = lazy(() => import("./layouts/LayoutPayment"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
function App() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken();
      dispatch(
        updateUser({
          user: user,
          accessToken: access_token,
        })
      );
    } else {
      const { refresh_token } = getToken();
      if (refreshToken) {
        dispatch(refreshToken(refresh_token));
      } else {
        dispatch(refreshToken({}));
        logOut();
      }
    }
  }, []);

  if(user) {
    console.log("User")
  }
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
            path="/new-campaign"
            exact
            element={<StartCampaign></StartCampaign>}
          ></Route>
          <Route
            path="/withdraw"
            exact
            element={<WithdrawPage></WithdrawPage>}
          ></Route>
          <Route
            path="/payment"
            exact
            element={<PaymentPage></PaymentPage>}
          ></Route>
          <Route
            path="/profile"
            exact
            element={<ProfilePage></ProfilePage>}
          ></Route>
          <Route
            path="*"
            exact
            element={<DashboardPage></DashboardPage>}
          ></Route>
        </Route>
        <Route element={<LayoutPayment />}>
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
