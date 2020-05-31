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
  handleGlicemieDataForParametrii,
} from "../../functionalities/helper";
import Myloader from "../../components/Myloader";
import ListaParametrii from "../../components/ListaParametrii";
import "./styleParametrii.css";

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
        console.log(raspuns);
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
    await handleGlicemieDataForParametrii();
    setIsUpdateParam(Math.random());
    setLoading(true);
    setshowForm(false);
  };

  if (isLoading) return <Myloader />;
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente
        quaerat dicta, tempora consectetur libero reprehenderit fuga repellat
        nulla? Optio debitis, nam dolore quasi placeat quos aliquid earum porro
        commodi ducimus voluptatibus, error vitae quis sequi. Ea ducimus
        laudantium delectus quasi ex cum veniam, mollitia maiores a dolore quia
        eos ut laboriosam eveniet itaque fugit saepe ratione odio porro autem
        distinctio adipisci pariatur.
      </p>
      <div className="divParametrii">
        <span className="divValori">
          <ListaParametrii data={localState} />
          <Button
            action={() => {
              setshowForm(!showForm);
            }}
            buttonName={
              !showForm ? "Editeaza parametrii" : "Inchide Formularul"
            }
          />
        </span>
        <span className="divEditare">
          {showForm ? (
            <Form
              initialValue={editeazaParametrii}
              buttonName={"Salveaza"}
              onSubmit={handleSubmit}
            />
          ) : (
            ""
          )}
        </span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente
        quaerat dicta, tempora consectetur libero reprehenderit fuga repellat
        nulla? Optio debitis, nam dolore quasi placeat quos aliquid earum porro
        commodi ducimus voluptatibus, error vitae quis sequi. Ea ducimus
        laudantium delectus quasi ex cum veniam, mollitia maiores a dolore quia
        eos ut laboriosam eveniet itaque fugit saepe ratione odio porro autem
        distinctio adipisci pariatur.
      </p>
    </>
  );
};

export default Parametrii;
