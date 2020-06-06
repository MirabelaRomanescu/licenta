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
import "./styleProfile.css";
import imagine from "../../assets/parametriiMei.png";

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
      } else {
        setLoading(false);
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
      <img className="imagineHeader" src={imagine} alt=""/>
      <div className="titleSeparationLine"></div>
      <div className="subtitlu">Parametrii tăi</div>
      <p>
        Pe lângă a-ți monitoriza glicemia cât mai des cu ajutorul glucometrului
        este esențial să mergi la medic și să îți dozezi și alți parametrii sanguini.
        De ce? Pentru a le ține evidența și a observa atunci când ei sunt ușor crescuți.
        Este important să acționezi la timp pentru a preveni complicațiile pe termen lung
        asociate cu diabetul zaharat. Este mult mai ușor să previi decât să tratezi, așa 
        că orice indiciu legat de o ușoară creștere a unui parametru te poate ajuta să
        revi la nivelurile normale fără să ajungi la măsuri mai extreme.
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
        Atunci când urmează să efectuezi anumite analize medicale ar trebui în
        primul rând să fi conștient că corectitudinea rezultatelor este extrem
        de importantă. Prin urmare, încearcă să nu urmezi altfel de regimuri alimentare în afara
        celor recomandate de medic, pentru că îți dorești ca valorile parametrilor tăi să
        reflecte mai bine ceea ce se întâmplă la tine în organism. Acest lucru
        îl va ajuta pe medic să ia o decizie corectă în ceea ce privește tratamentul 
        tău, și, de asemenea, te va ajuta și pe tine să te simți mai bine pe termen
        lung și să previ surprizele neplăcute. Concludența rezultatelor este 
        corelată direct cu îmbunătățirea tratamentului și a stării tale de sănătate! 
      </p>
    </>
  );
};

export default Parametrii;
