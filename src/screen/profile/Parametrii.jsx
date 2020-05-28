import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import { editeazaParametrii } from "../../functionalities/mocks";
import {
  updateProfileData,
  readProfileData,
} from "../../functionalities/firebase/request";
import {
  formatPrametriiUser,
  handleGlicemieData,
} from "../../functionalities/helper";
import Loader from "react-loader-spinner";

const Parametrii = () => {
  const [showForm, setshowForm] = useState(false);
  const [localState, setLocalState] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isUpadateParam, setIsUpdateParam] = useState(true);

  useEffect(() => {
    const onMount = async () => {
      const res = await readProfileData("parametrii");
      if (!!res) {
        const raspuns = [...formatPrametriiUser(res)];
        setLocalState([...raspuns]);
        setLoading(false);
        console.log("Effect true");
      } else {
        setLoading(false);
        console.log("Effect else");
      }
    };
    onMount();
  }, [isUpadateParam]);

  const handleSubmit = async (e) => {
    await updateProfileData(e, "parametrii");
    await handleGlicemieData();
    setIsUpdateParam(Math.random());
    setLoading(true);
    setshowForm(false);
  };

  if (isLoading) return <Loader />;
  return (
    <>
      {console.log(localState)}
      <ul>
        {!!localState ? (
          localState.map((item) => (
            <li key={item.name}>
              <span>{item.name}</span> - <span>{item.value}</span>
            </li>
          ))
        ) : (
          <>
            <li>
              <span>Glicemie</span> - <span>val</span>
            </li>
            <li>
              <span>Varsa</span> - <span>val</span>
            </li>
            <li>
              <span>Greutate</span> - <span>val</span>
            </li>
            <li>
              <span>Inaltime</span> - <span>val</span>
            </li>
            <li>
              <span>IMC</span> - <span>val</span>
            </li>
            <li>
              <span>HBA1C</span> - <span>val</span>
            </li>
            <li>
              <span>Colesterol</span> - <span>val</span>
            </li>
            <li>
              <span>TA</span> - <span>val</span>
            </li>
            <li>
              <span>TG</span> - <span>val</span>
            </li>
          </>
        )}
      </ul>
      <Button
        action={() => {
          setshowForm(!showForm);
        }}
        buttonName={!showForm ? "Editeaza parametrii" : "Inchide Formularul"}
      />
      {showForm ? (
        <Form
          initialValue={editeazaParametrii}
          buttonName={"Editeaza"}
          onSubmit={handleSubmit}
          displayLabel={true}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Parametrii;
