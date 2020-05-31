import React, { useState, useEffect } from "react";
import { readFromDatabase } from "../../functionalities/firebase/request";
import Myloader from "../../components/Myloader";

const IMC = () => {
  const [IMC, setIMC] = useState(null);
  const [eroare, setError] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const onMount = async () => {
      const id = localStorage.getItem("id");
      const greutate = await readFromDatabase(
        `profile/parametrii/${id}/greutate`
      );
      const inaltime = await readFromDatabase(
        `profile/parametrii/${id}/inaltime`
      );
      if (!inaltime && !greutate) {
        setError(
          "Nu ai adaugat inaltimea ta sau greutatea ta. Te rugam sa verifici in pagina de parametrii ai profilului tau;"
        );
      } else {
        const imc = parseInt(greutate) / Math.pow(parseInt(inaltime) / 100, 2);
        setIMC(imc.toFixed(2));
      }
      setIsLoading(false);
    };
    onMount();
  }, []);

  if (isloading) return <Myloader />;

  return (
    <>
      <h3>IMC</h3>
      {!!IMC ? <p>{IMC}</p> : <p>{eroare}</p>}
    </>
  );
};

export default IMC;
