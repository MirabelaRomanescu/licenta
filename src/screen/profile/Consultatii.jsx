import React, { useState, useEffect } from "react";
import "./styleConsultatii.css";
import {
  readProfileData,
  addProfileData,
} from "../../functionalities/firebase/request";
import Loader from "react-loader-spinner";
import Button from "../../components/Button";
import Form from "../../components/Form";
import { editeazaConsultaii, textareaConsultatii } from "../../functionalities/mocks";
import { formatConsultatiiUser } from "../../functionalities/helper";

const Consultatii = () => {
  const [data, setData] = useState([]);
  const [showContainTable, setShowContainTable] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const onMount = async () => {
      const res = await readProfileData("consultatii");
      if (!!res) {
        setShowContainTable(true);
        const raspuns = formatConsultatiiUser(res);
        setData(raspuns);
      } else {
        setShowContainTable(false);
      }
      setIsLoading(false);
    };
    onMount();
  }, []);
  const handleSubmit = (valAdd) => {
    const newData = [...data];
    newData.push(valAdd);
    setData(newData);
    setShowContainTable(true); 
    addProfileData(valAdd, "consultatii");
  };
  if (isLoading) return <Loader />;
  return (
    <div>
      {console.log(data)}<h3>Consultatii</h3>
      <ul className="tableConsultatii">
        <li>
          <ul className="rowTableConsultatii">
            <li className="dataConsultatie">Data</li>
            <li className="medicConsultatie">Medic</li>
            <li className="recomandariConsultatie">Recomandari</li>
          </ul>
        </li>
        {!showContainTable && <li>
          <ul className="rowTableConsultatii">
            <li className="dataConsultatie">nu exista</li>
            <li className="medicConsultatie">nu exista</li>
            <li className="recomandariConsultatie">nu exista</li>
          </ul>
        </li>}
        {showContainTable &&
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
        {!!showForm ? (
          <Form
            valueTextarea={textareaConsultatii}
            initialValue={editeazaConsultaii}
            buttonName={"Adauga Consultatii"}
            onSubmit={handleSubmit}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Consultatii;
