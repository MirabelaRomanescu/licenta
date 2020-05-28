import React from "react";
import Navbar from "../components/Navbar";
import InformatiiGenerale from "./diabet/InformatiiGenerale";
import Complicatii from "./diabet/Complicatii";
import Monitorizare from "./diabet/Monitorizare";
import { useParams } from "react-router-dom";
import Leftbar from "../components/LeftBarSelection";
import { createLeftBarDiabet } from "../functionalities/mocks";

const Diabet = () => {  
  const { section } = useParams();
  const _renderFetchSection = () => {
    switch (section) {
      case "informatiiGenerale":
        return <InformatiiGenerale isLoading={true}/>;
      case "complicatii":
          return <Complicatii isLoading={true}/>;
      case "monitorizare":
          return <Monitorizare isLoading={true}/>;
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
          <h1>
           Despre diabet <span className="submenuStyle">>> {section} </span>
          </h1>
          <div className="titleSeparationLine"></div>
          {_renderFetchSection()}
        </div>
      </div>
    </>
  );
};

export default Diabet;
