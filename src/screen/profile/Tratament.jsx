import React, { useState, useEffect } from "react";
import "./styleTratament.css";
import {
  readProfileData,
  addProfileData,
} from "../../functionalities/firebase/request";
import Loader from "react-loader-spinner";
import Button from "../../components/Button";
import Form from "../../components/Form";
import {
  textareaAddMedicament,
  adaugaMedicamentNou,
  valueSelectMomentulAdministrarii,
} from "../../functionalities/mocks";
import { formatConsultatiiUser } from "../../functionalities/helper";

const Tratament = () => {
  const [localdata, setLocalData] = useState(null);
  const [showContentTable, setShowContentTable] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const onMount = async () => {
      const res = await readProfileData("tratament");
      if (!!res) {
        const resp = formatConsultatiiUser(res);
        setLocalData(resp);
        setIsLoading(false);
        setShowContentTable(true);
      } else {
        setShowContentTable(false);
      }
      setIsLoading(false);
    };
    onMount();
  }, []);

  const handleSubmit = (data) => {
    console.log(data);
    addProfileData(data, "tratament");
    ////problem here nu randeaza rapid 
    ///nu inteleg de ce
    const newState = (!!localdata) ? [...localdata] : [];
    newState.push(data);
    setLocalData(newState);
  };
  if (isLoading) return <Loader />;
  return (
    <>
      <h3>Tratament</h3>
      <ul className="tableTratament">
        <li>
          <ul className="rowTableTratament">
            <li className="denMedTratament">Denumire Medicament</li>
            <li className="fmFarmaTratament">FormaFarmaceutica</li>
            <li className="dz24hTratament">Doza pe 24 ore</li>
            <li className="dzUnitTratament">Doza unitara</li>
            <li className="momentAdmTratament">Momentul Administrarii</li>
            <li className="observatiiTratament">Observatii</li>
          </ul>
        </li>
        {!showContentTable && (
          <li>
            <ul className="rowTableTratament">
              <li className="denMedTratament">nu exista valori</li>
              <li className="fmFarmaTratament">nu exista valori</li>
              <li className="dz24hTratament">nu exista valori</li>
              <li className="dzUnitTratament">nu exista valori</li>
              <li className="momentAdmTratament">nu exista valori</li>
              <li className="observatiiTratament">nu exista valori</li>
            </ul>
          </li>
        )}
        {showContentTable &&
          localdata.map((item, index) => (
            <li key={index}>
              <ul className="rowTableTratament">
                <li className="denMedTratament">{item.denumire}</li>
                <li className="fmFarmaTratament">{item.FMfarma}</li>
                <li className="dz24hTratament">{item.doza24}</li>
                <li className="dzUnitTratament">{item.dozaUnit}</li>
                <li className="momentAdmTratament">
                  {item.moment.map((itm) => (
                    <p className={"momentp"} key={itm}>
                      {itm}
                    </p>
                  ))}
                </li>
                <li className="observatiiTratament">{item.observatii}</li>
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
            valueTextarea={textareaAddMedicament}
            initialValue={adaugaMedicamentNou}
            selectValue={valueSelectMomentulAdministrarii}
            selectIsMultiple={true}
            buttonName={"Adauga Medicament"}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </>
  );
};

export default Tratament;
