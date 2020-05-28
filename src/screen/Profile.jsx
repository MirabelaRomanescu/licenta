import React from "react";
import Navbar from "../components/Navbar";
import Leftbar from "../components/LeftBarSelection";
import "./styleScreen.css";
import { useParams } from "react-router-dom";
import { createLeftBarProfile } from "../functionalities/mocks";
import Parametrii from "./profile/Parametrii";
import Consultatii from "./profile/Consultatii";

const Profile = () => {
  const { section } = useParams();
  const _renderFetchSection = () => {
    switch (section) {
      case "parametrii":
        return <Parametrii isLoading={true} />;
      case "consultatii":
        return <Consultatii />;
      default:
        return "";
    }
  };
  return (
    <>
      <div className="fixNav">
        <Navbar option="profile" />
      </div>
      <div className="componentScreen">
        <div className="lateralNavbar">
          <Leftbar render={createLeftBarProfile} />
        </div>
        <div className="lateralContent">
          <h1>
            Profilul meu <span className="submenuStyle">>> {section} </span>
          </h1>
          <div className="titleSeparationLine"></div>
          {_renderFetchSection()}
        </div>
      </div>
    </>
  );
};

export default Profile;
