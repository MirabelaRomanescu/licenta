import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Leftbar from "../components/LeftBarSelection";
import Parametrii from "./profile/Parametrii";
import Consultatii from "./profile/Consultatii";
import Tratament from "./profile/Tratament";
import Glicemie from "./profile/Glicemie";
import IMC from "./profile/IMC";
import "./styleScreen.css";
import { createLeftBarProfile } from "../functionalities/mocks";
import AltiParametrii from "./profile/AltiParmetrii";
import Footer from "../components/Footer";

const Profile = () => {
  const { section } = useParams();
  const _renderFetchSection = () => {
    switch (section) {
      case "parametrii":
        return <Parametrii isLoading={true} />;
      case "consultatii":
        return <Consultatii />;
      case "tratament":
        return <Tratament />;
      case "glicemie":
        return <Glicemie />;
      case "imc":
        return <IMC />;
      case "altiparametrii":
        return <AltiParametrii />;
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
          <div className="text">
            <h1>
              Profilul meu <span className="submenuStyle">>> {section} </span>
            </h1>
            <div className="titleSeparationLine"></div>
            {_renderFetchSection()}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Profile;
