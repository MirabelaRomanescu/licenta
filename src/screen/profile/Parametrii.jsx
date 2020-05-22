import React, { useState } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import { editeazaParametrii } from "../../functionalities/mocks";
import {
  addUserdata,
  readUserdata,
} from "../../functionalities/firebase/request";

const Parametrii = () => {
  const [showButton, setshowButton] = useState(false);
  const handleSubmit = async (e) => {
    console.log(e);
    const res = await addUserdata(e, "parametrii");
    console.log("raspuns server", res);
    const raspuns = await readUserdata("parametrii");
    console.log("ce e pe server? raspuns:", raspuns);
  };
  return (
    <>
      <ul>
        <li>
          <span>Glicemie</span> - <span>val</span>{" "}
        </li>
        <li>
          <span>Varsa</span> - <span>val</span>{" "}
        </li>
        <li>
          <span>Greutate</span> - <span>val</span>{" "}
        </li>
        <li>
          <span>Inaltime</span> - <span>val</span>{" "}
        </li>
        <li>
          <span>IMC</span> - <span>val</span>{" "}
        </li>
        <li>
          <span>HBA1C</span> - <span>val</span>{" "}
        </li>
        <li>
          <span>Colesterol</span> - <span>val</span>{" "}
        </li>
        <li>
          <span>TA</span> - <span>val</span>{" "}
        </li>
        <li>
          <span>TG</span> - <span>val</span>{" "}
        </li>
      </ul>
      <Button
        action={() => {
          setshowButton(!showButton);
        }}
        buttonName={"Editeaza parametrii"}
      />
      {showButton ? (
        <Form
          initialValue={editeazaParametrii}
          buttonName={"Editeaza"}
          onSubmit={handleSubmit}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Parametrii;
