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
      <Navbar option="profile" />
      <div className="componentScreen">
        <div className="lateralNavbar">
          <Leftbar render={createLeftBarProfile} />
        </div>
        <div className="lateralContent">
          <h1>
            Profilul meu <span className="submenuStyle">>> {section} </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Profile;
