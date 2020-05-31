import React, { useState, useEffect } from "react";
import Grafic from "../../components/Grafic";
import MyLoader from "../../components/Myloader";
import Form from "../../components/Form";
import {
  readProfileData,
  readFromDatabase,
} from "../../functionalities/firebase/request";
import {
  formatGlicemieUser,
  handleGlicemieData,
} from "../../functionalities/helper";
import { addGlicemieToDatabase } from "../../functionalities/mocks";

const Glicemie = () => {
  const [data, setData] = useState(null);
  const [HBA1C, setHBA1C] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const onMount = async () => {
      const res = await readProfileData(`glicemie`);
      if (!!res) {
        const respond = formatGlicemieUser(res);
        setData(respond);
      }
      const id = localStorage.getItem("id");
      const hba1c = await readFromDatabase(`profile/parametrii/${id}/hba1c`);
      setHBA1C(parseInt(hba1c));
      setIsLoading(false);
    };
    onMount();
  }, []);

  const updateGrafic = (newData) => {
    const newValue = !!data ? [...data] : [];
    if (newValue.length < 20) {
      newValue.push(parseInt(newData));
      setData(newValue);
    } else {
      newValue.shift();
      newValue.push(parseInt(newData));
      setData(newValue);
    }
  };

  const handleSubmit = async (value) => {
    console.log(value);
    await handleGlicemieData(data, value.glicemie);
    updateGrafic(value.glicemie);
  };

  if (isloading) return <MyLoader />;

  return (
    <>
      <h2>Glicemie</h2>
      <div style={{ height: 500, width: "60%" }}>
        <Grafic data={data} />
      </div>
      <p className="glicemieHBA1C">
        {!!HBA1C
          ? HBA1C
          : "Valoare neadaugata inca ! Te rog sa o adaugi la parametrii tai ! "}
      </p>
      <div className="actionGlicemie">
        <Form
          initialValue={addGlicemieToDatabase}
          displayLabel={true}
          buttonName={"Adauga glicemie"}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default Glicemie;
