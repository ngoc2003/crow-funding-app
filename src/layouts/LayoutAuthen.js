import React from "react";
import logo from "../images/Logo.png";
import ellipse from "../images/Ellipse.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import Error from "../components/common/Error";
import useDarkMode from "../hooks/useDarkMode";

const LayoutAuthen = (props) => {
  const { children, heading = "" } = props;
  const [darkMode, setDarkMode] = useDarkMode()
  console.log(darkMode)
  return (
    <div className="relative w-full min-h-screen p-10 bg-lite dark:bg-darkbg isolate">
      <img
        src={ellipse}
        alt="decor"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[-1]  "
      />
      <Link to="/">
        <img src={logo} alt="crowFunding-app logo" className="pb-10" />
      </Link>
      <div className="dark:bg-darkSecondary w-full max-w-[550px] bg-white rounded-xl px-5 py-7 lg:px-16 lg:py-12 mx-auto text-center ">
        <h1 className="mb-1 text-lg lg:text-xl lg:mb-3 text-text1 font-seminbold dark:text-white ">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

LayoutAuthen.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthen, { FallbackComponent: Error });
