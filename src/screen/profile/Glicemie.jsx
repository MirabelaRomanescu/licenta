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
import imagine from "../../assets/glicemie.png";

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
    await handleGlicemieData(data, value.glicemie);
    updateGrafic(value.glicemie);
  };

  if (isloading) return <MyLoader />;

  return (
    <>
      <img className="imagineHeader" src={imagine} alt="" />
      <div className="titleSeparationLine"></div>
      <div className="subtitlu">Glicemia</div>
      <p>
        In graficul de mai jos poți observa cum variază ultimele valori ale
        glicemiei tale. Poți adăuga date noi in formularul alăturat și poți ține
        astfel evidența acestui parametru. Încearcă să observi ce anume face ca
        glicemia ta să crească în afara intervalului dorit, în anumite zile sau
        perioade. Daca ai identificat factorul perturbator, încearcă să reduci
        cat de mult poți influenta acestuia, astfel încat să iti controlezi
        corespunzator concentrația de glucoză din sânge.
      </p>
      <div style={{ height: 500, width: "70%", margin: "auto" }}>
        <Grafic data={data} />
      </div>
      <div className="actionGlicemie">
        <Form
          initialValue={addGlicemieToDatabase}
          buttonName={"Adauga glicemie"}
          onSubmit={handleSubmit}
        />
      </div>
      <p>
        Glicemia este o măsurătoare esențială a sănătății tale, ca pacient
        dibetic. Multe alimente se descompun în glucoză (un tip de zahăr)
        înainte să ajungă în sânge, glucoza care este folosită pentru producția
        de energie cu scopul a ne alimenta creierul, inima și mușchii. Glucoza
        fie provine din alimentele pe care le consumăm, fie este făcută de catre
        ficat. De obicei se găsește în două locuri in organism: în fluxul
        sanguin, atunci cand este transportată la toate organele și celulele
        corpului, și în interiorul celulelor unde este transformată în energie.
        Concentratia de glucoză din sânge (cantitatea raportată la un anumit
        volum de sânge) poartă denumirea de glicemie.
      </p>
      <p>
        Atunci cand ai diabet, există impedimente care fac ca glucoza din sânge
        să nu mai poată să treacă în interiorul celulelor. Când acest lucru se
        întamplă, concentrația glocozei sanguine crește, așadar glicemia crește.
        Verificarea nivelului glicemiei te ajută să urmăresti ceea ce face
        nivelul tau glicemic să crească. De exemplu, a fi bolnav, stresul sau
        consumul anumitor alimente poate determina creșterea valorilor
        glicemiei. Pe de alta parte, atunci când iei medicamentele prescrise,
        devi mai activ sau mănânci mai puțin decât de obicei, glicemia poate
        scădea.
      </p>
      <div className="subtitlu">Hemoglobina glicată (HbA1c)</div>
      <p className="valoare">
        {!!HBA1C
          ? "Valoare ta pentru hemoglobina glicată: " + HBA1C + "%"
          : "Valoare neadaugata inca ! Te rog sa o adaugi la parametrii tai ! "}
      </p>
      <p>Interpretare rezultate:</p>
      <ul>
        <li>Valori normale: 4.8-5.6%</li>
        <li>Risc crescut de a dezvolta diabet: 5.7-6.4%</li>
        <li>Diabet zaharat: >=6.5%</li>
        <li>Ținta terapeutică la pacienții diabetici: &lt;=7%</li>
      </ul>
      <p>
        Determinarea hemoglobinei glicate este utilă întrucât arată cum s-a
        comportat glicemia în ultimele luni. Rezultatele sunt independente de
        ritmul circadian, dietă și alte fluctuații tranzitorii ale concentrației
        glucozei din sânge. Majoritatea asociațiilor medicale recomandă 6.5% sau
        7% HbA1c ca țintă terapeutica pentru pacientii diabetici.
      </p>
      <p>
        Importanta determinării hemoglobinei glicate la pacienții diabetici a
        fost evidențiată de rezultatele a numeroase studii. Acestea au
        demonstrat intr-un mod convingător efectul benefic al controlului
        glicemic intensiv atat asupra parametrilor metabolici (glicemia si
        HbA1c), cat si asupra complicațiilor pe termen lung (micro- si
        macrovasculare) ale DZ de tip I sau II si au permis
        stabilirea țintelor terapeutice vizibile mai sus.
      </p>
      <p>
        Pentru a afla mai multe despre consecintele pe termen lung ale creșterii
        glicemiei, dar și mai multe detalii legate de glicemie și cum
        funționează medicamentele antidiabetice, consultă secțiunea Despre
        diabet din meniul de mai sus.
      </p>
    </>
  );
};

export default Glicemie;
