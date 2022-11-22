import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import errorImage from "../images/error.png";
const RequiredAuthPage = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  return !user ? (
    <div className="flex items-center justify-center gap-8 font-semibold">
      <div className="flex-1">
        <img src={errorImage} className="w-full" alt="" />
      </div>
      <div className="flex-1 text-center">
        You need to sign in to access this page. <br />
        <Link to="/sign-in" className="text-primary">
          Sign in Here
        </Link>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default RequiredAuthPage;
