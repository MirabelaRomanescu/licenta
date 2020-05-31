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
    console.log(value);
    await handleGlicemieData(data, value.glicemie);
    updateGrafic(value.glicemie);
  };

  if (isloading) return <MyLoader />;

  return (
    <>
          <img className="imagineHeader" src={imagine} alt=""/>
      <div className="titleSeparationLine"></div>
      <div className="subtitlu">Glicemia</div>
      <p>
        In graficul de mai jos poti observa cum variaza ultimele valori ale
        glicemiei tale. Poti adauga date noi in formularul alaturat si poti tine
        astfel evidenta acestui parametru. Incearca sa observi ce anume face ca
        glicemia ta sa creasca in afara intervalului dorit, in anumite zile sau
        perioade. Daca ai identificat factorul perturbator, incearca sa reduci
        cat de mult poti influenta acestuia, astfel incat sa iti controlezi
        corespunzator concentratia de glucoza din sange.
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
        dibetic. Multe alimente se descompun în glucoza(un tip de zahar) inainte
        sa ajunga in sânge, glucoza care este folosita pentru productia de
        energie cu scopul a ne alimenta creierul, inima și mușchii. Glucoza fie
        provine din alimentele pe care le consumăm, fie este făcută de catre
        ficat. De obicei se găsește în două locuri in organism: în fluxul
        sanguin, atunci cand este transportata la toate organele și celulele
        coprului, și în interiorul celulelor unde este transformata în energie.
        Concentratia de glucoza din sange (cantitatea raportata la un anumit
        volum de sange) poarta denumirea de glicemie.
      </p>
      <p>
        Atunci cand ai diabet, exista impedimente care fac ca glucoza din sange
        sa nu mai poata sa treaca in interiorul celulelor. Cand acest lucru se
        intampla, concentratia glocozei sanguine creste, asadar glicemia creste.
        Verificarea nivelului glicemiei te ajută să urmăresti ceea ce face
        nivelul tau glicemic sa creasca. De exemplu, a fi bolnav, stresul sau
        consumul anumitor alimente poate determina creșterea valorilor
        glicemiei. Pe de alta parte, atunci când iei medicamentele prescrise,
        devi mai activ sau mananci mai puțin decât de obicei, glicemia poate
        scădea.
      </p>
      <div className="subtitlu">Hemoglobina glicată</div>
      <p className="valoare">
        {!!HBA1C
          ? "Valoare ta pentru hemoglobina glicată: " + HBA1C + "%"
          : "Valoare neadaugata inca ! Te rog sa o adaugi la parametrii tai ! "}
      </p>
      <p>
        Determinarea hemoglobinei glicate ofera o estimare retrospectiva a
        statusului glicemic, independenta de ritmul circadian, dieta si alte
        fluctuatii tranzitorii ale concentratiei glucozei in sange. Majoritatea
        asociatiilor recomanda 6.5% sau 7% HbA1c ca tinta terapeutica pentru
        pacientii diabetici. In general, rezultatele sunt interpretate astfel:
        normal: 4.8-5.6%, risc crescut de a dezvolta diabet: 5.7-6.4%, diabet
        zaharat: >=6.5%, tinta terapeutica la pacientii diabetici: sub 7
      </p>
      <p>
        Pentru a afla mai multe despre consecintele pe termen lung ale cresterii
        glicemiei, dar si mai multe detalii legate de glicemie si cum
        funtioneaza medicamentele antidiabetice, consulta sectiunea Despre
        diabet din meniul de mai sus.
      </p>
    </>
  );
};

export default Glicemie;
