import React, { useState, useEffect } from "react";
import { readFromDatabase } from "../../functionalities/firebase/request";
import Myloader from "../../components/Myloader";

const AltiParametrii = () => {
  const [data, setData] = useState(null);
  const [eroare, setError] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    const onMount = async () => {
      const id = localStorage.getItem("id");
      const tensiuneArteriala = await readFromDatabase(
        `profile/parametrii/${id}/tensiune arteriala`
      );
      const colesterol = await readFromDatabase(
        `profile/parametrii/${id}/colesterol`
      );
      const trigliceride = await readFromDatabase(
        `profile/parametrii/${id}/trigliceride`
      );
      if (!tensiuneArteriala && !colesterol && !trigliceride) {
        setError(
          "Nu ai adaugat datele tale. Te rugam sa verifici in pagina de parametrii ai profilului tau!"
        );
      } else {
        setData({
          tensiuneArteriala: tensiuneArteriala,
          colesterol: colesterol,
          trigliceride: trigliceride,
        });
      }
      setIsLoading(false);
    };
    onMount();
  }, []);
  if (isloading) return <Myloader />;
  return (
    <div>
      <h3>Alti Parametrii</h3>
      {!!data ? (
        <ul>
          <li>colesterol : {data.colesterol}</li>
          <li>trigliceride : {data.trigliceride}</li>
          <li>tensiune arteriala : {data.tensiuneArteriala}</li>
        </ul>
      ) : (
        <p>{eroare}</p>
      )}
    </div>
  );
};

export default AltiParametrii;
