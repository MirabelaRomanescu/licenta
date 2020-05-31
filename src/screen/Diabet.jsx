import React from "react";
import Navbar from "../components/Navbar";
import { createLeftBarDiabet } from "../functionalities/mocks";
import { useParams } from "react-router-dom";
import Leftbar from "../components/LeftBarSelection";
import InformatiiGenerale from "./diabet/InformatiiGenerale";
import Complicatii from "./diabet/Complicatii";
import Monitorizare from "./diabet/Monitorizare";
import DespreAlimentatie from "./diabet/DespreAlimentatie";
import TerapiiAlternative from "./diabet/TerapiiAlternative";
import Insulinoterapia from "./diabet/Insulinoterapia";
import Ado from "./diabet/Ado";
import Footer from "../components/Footer";

const Diabet = () => {
  const { section } = useParams();
  const _renderFetchSection = () => {
    switch (section) {
      case "informatiiGenerale":
        return <InformatiiGenerale isLoading={true} />;
      case "complicatii":
        return <Complicatii isLoading={true} />;
      case "monitorizare":
        return <Monitorizare isLoading={true} />;
      case "despreAlimentatie":
        return <DespreAlimentatie isLoading={true} />;
      case "insulinoterapia":
        return <Insulinoterapia isLoading={true} />;
        case "ado":
          return <Ado isLoading={true} />;
      case "terapiiAlternative":
        return <TerapiiAlternative isLoading={true} />;
      default:
        return "";
    }
  };
  return (
    <>
      <div className="fixNav">
        <Navbar option="diabet" />
      </div>
      <div className="componentScreen">
        <div className="lateralNavbar">
          <Leftbar render={createLeftBarDiabet} />
        </div>
        <div className="lateralContent">
          <div className="text">
          {_renderFetchSection()}
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Diabet;
