import React from "react";
import Form from "../components/Form";
import { addAlimenteToDatabase } from "../functionalities/mocks";
import {
  readFromDatabase,
  addToDatabase
} from "../functionalities/firebase/request";
import Button from "../components/Button";

const Addalimente = () => {
  const handleSubmit = async (data) => {
    const res = await addToDatabase("alimente", data);
    console.log(res);
  };
  const consoleLOG = async () => {
    const res = await readFromDatabase("alimente");
    console.table(res);
  };

  return (
    <>
      <Form
        initialValue={addAlimenteToDatabase}
        buttonName={"Add To DataBase"}
        onSubmit={handleSubmit}
      />
      <Button buttonName="Console.log(firebaseData)" action={consoleLOG} />
    </>
  );
};

export default Addalimente;
