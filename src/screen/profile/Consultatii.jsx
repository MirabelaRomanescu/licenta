import React, { useState, useEffect } from "react";
import "./styleProfile.css";
import {
  readProfileData,
  addProfileData,
} from "../../functionalities/firebase/request";
import Button from "../../components/Button";
import Form from "../../components/Form";
import {
  editeazaConsultaii,
  textareaConsultatii,
} from "../../functionalities/mocks";
import { formatConsultatiiUser } from "../../functionalities/helper";
import Myloader from "../../components/Myloader";
import imagine from "../../assets/consultatii.png";

const Consultatii = () => {
  const [data, setData] = useState([]);
  const [showContentTable, setShowContentTable] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const onMount = async () => {
      const res = await readProfileData("consultatii");
      if (!!res) {
        setShowContentTable(true);
        const raspuns = formatConsultatiiUser(res);
        setData(raspuns);
      } else {
        setShowContentTable(false);
      }
      setIsLoading(false);
    };
    onMount();
  }, []);
  const handleSubmit = (valAdd) => {
    const newData = [...data];
    newData.push(valAdd);
    setData(newData);
    setShowContentTable(true);
    addProfileData(valAdd, "consultatii");
  };
  if (isLoading) return <Myloader />;
  return (
    <div>
      <img className="imagineHeader" src={imagine} alt="" />
      <div className="titleSeparationLine"></div>
      <div className="subtitlu">Consultatii</div>
      <ul className="tableConsultatii">
        <li>
          <ul className="rowTableConsultatii headerConsultatii">
            <li className="dataConsultatie">Data</li>
            <li className="medicConsultatie">Medic</li>
            <li className="recomandariConsultatie">Recomandari</li>
          </ul>
        </li>
        {!showContentTable && (
          <li>
            <ul className="rowTableConsultatii">
              <li className="dataConsultatie">nu exista</li>
              <li className="medicConsultatie">nu exista</li>
              <li className="recomandariConsultatie">nu exista</li>
            </ul>
          </li>
        )}
        {showContentTable &&
          data.map((item, index) => (
            <li key={index}>
              <ul className="rowTableConsultatii">
                <li className="dataConsultatie">{item.data}</li>
                <li className="medicConsultatie">{item.medic}</li>
                <li className="recomandariConsultatie">{item.recomandari}</li>
              </ul>
            </li>
          ))}
      </ul>
      <div className="actionConsultatii">
        <Button
          action={() => setShowForm(!showForm)}
          buttonName={!!showForm ? "Inchide formularul" : "Adauga Consultatii"}
        />
        {!!showForm && (
          <Form
            valueTextarea={textareaConsultatii}
            initialValue={editeazaConsultaii}
            buttonName={"Adauga Consultatii"}
            onSubmit={handleSubmit}
          />
        )}
      </div>
      <p>
        Scopul înregistrării consulațiilor trecute sau viitoare este de a
        observa evoluția ta în timp, de la un consult la altul. Aruncă o privire
        în calendarul din secțiunea "Monitorizarea diabetului" și află ce și
        când ar trebui să faci pentru a te asigura că nu ratezi vreun consult
        important. Dacă mergi la medic fără să depășești perioadele stabilite,
        șansele tale de a dezvolta complicații fără ca medicul să observe sunt
        minime.
      </p>
      <p>
        Întreabă-ți medicul dacă nu ești sigur de ce ți se întâmplă anumite
        lucruri. Cu cât întelegi mai bine anumite noțiuni, cu atât te vei simți
        mai confortabil și liniștit, și vei putea să îți gestionezi mai bine
        boala. Așa că ar trebui să profiți de timpul petrecut cu medicul, să
        lași temerile acasă și să te bucuri de beneficiile fiecărui consult.
      </p>
    </div>
  );
};

export default Consultatii;
