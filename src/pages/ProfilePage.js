import React from "react";
import ComingSoon from "../components/common/ComingSoon";
import RequiredAuthPage from "./RequiredAuthPage";

const ProfilePage = () => {
  return (
    <RequiredAuthPage>
      <ComingSoon></ComingSoon>
    </RequiredAuthPage>
  );
};

export default ProfilePage;
