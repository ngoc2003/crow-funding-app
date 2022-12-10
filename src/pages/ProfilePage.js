import React from "react";
import ComingSoon from "../components/common/ComingSoon";
import RequiredAuthPage from '../layouts/RequiredAuthPage'
const ProfilePage = () => {
  return (
    <RequiredAuthPage>
      <ComingSoon></ComingSoon>
    </RequiredAuthPage>
  );
};

export default ProfilePage;
