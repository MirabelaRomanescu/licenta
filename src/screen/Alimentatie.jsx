import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Leftbar from "../components/LeftBarSelection";
import { createLeftBarAlimente } from "../functionalities/mocks";
import "./styleScreen.css";
import { useParams } from "react-router-dom";
import { readFromDatabase } from "../functionalities/firebase/request";
import { formatAlimentatieData } from "../functionalities/helper";
import Alimente from "./alimentatie/ShowAlimente";
import CalculatorMasa from "./alimentatie/CalculatorMasa";
import Footer from "../components/Footer";
import Myloader from "../components/Myloader";

const Alimentatie = () => {
  const { section } = useParams();
  const [alimente, setAlimente] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const onMount = async () => {
      const result = await readFromDatabase("alimente");
      const finalResult = formatAlimentatieData(result);
      setAlimente(finalResult);
      setIsLoading(false);
    };
    onMount();
  }, []);

  if (isLoading) return <Myloader />;
  return (
    <>
      <div className="fixNav">
        <Navbar option="alimentatie" />
      </div>
      <div className="componentScreen">
        <div className="lateralNavbar">
          <Leftbar render={createLeftBarAlimente} />
        </div>
        <div className="lateralContent">
        <div className="text">
          { section === "calculator"?(
            <CalculatorMasa alimente={alimente}/>
          ):(
            <Alimente alimente={alimente} categorie={section} />
          )
          }
        </div>
        <Footer/>
        </div>
      </div>
    </>
  );
};

export default Alimentatie;
