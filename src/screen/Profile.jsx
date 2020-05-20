import React from "react";
import Navbar from "../components/Navbar";
import Leftbar from "../components/LeftBarSelection";
import "./styleScreen.css";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { createLeftBarProfile } from "../functionalities/mocks";

const Profile = () => {
  const { section } = useParams();
  const path = useLocation();
  const history = useHistory();
  console.log(section);
  console.log(path);
  console.log(history);
  return (
    <>
      <Navbar option="profile"/>
      <div className="componentScreen">
        <Leftbar render={createLeftBarProfile} />
        <h3>Profile</h3>
        <h4>{section}</h4>
      </div>
    </>
  );
};

export default Profile;
 