import React, { useState, useEffect } from "react";
import "./styleProfile.css";
import {
  readProfileData,
  addProfileData,
  deleteFromDatabase, 
} from "../../functionalities/firebase/request";
import Button from "../../components/Button";
import Form from "../../components/Form";
import {
  textareaAddMedicament,
  adaugaMedicamentNou,
  valueSelectMomentulAdministrarii,
} from "../../functionalities/mocks";
import { formatConsultatiiUser } from "../../functionalities/helper";
import Myloader from "../../components/Myloader";
import imagine from "../../assets/tratament.png";
import DeleteBtn from "../../components/DeleteBtn";

const Tratament = () => {
  const [localdata, setLocalData] = useState(null);
  const [showContentTable, setShowContentTable] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(null);

  useEffect(() => {
    const onMount = async () => {
      const res = await readProfileData("tratament");
      if (!!res) {
        const resp = formatConsultatiiUser(res);
        setLocalData(resp);
        setIsLoading(false);
        setShowContentTable(true);
      } else {
        setLocalData([]);
        setShowContentTable(false);
      }
      setIsLoading(false);
    };
    onMount();
  }, [isUpdate]);

  const handleSubmit = async (data) => {
    const T = new Date();
    console.log(data);
    await addProfileData(data, "tratament");
    setIsLoading(true);
    setShowContentTable(true);
    setIsUpdate(T.getMilliseconds());
  };

  const handleDelete = async (keyData) => {
    const T = new Date();
    const resp = await deleteFromDatabase("tratament", keyData);
    setIsLoading(true);
    setIsUpdate(T.getMilliseconds());
  };

  if (isLoading) return <Myloader />;
  return (
    <>
      <img className="imagineHeader" src={imagine} alt=""/>
      <div className="titleSeparationLine"></div>
      <div className="subtitlu">Tratament</div>
      <p>
        Este normal ca schema de tratament. si implicit medicamentele tale să se
        schimbe în timp. Cel mai important este ca tu să te simți mai bine o
        data cu modificarea medicatiei. Există multe tipuri diferite de
        medicamente care pot funcționa în moduri diferite pentru a scădea
        glicemia. Uneori, un singur medicament va fi suficient, iar în alte
        cazuri, medicul tău iti poate prescrie o combinație de medicamente,
        pentru a reusi sa iti menti nivelul glicemiei in limitele normale.
      </p>
      <p>
        Tabelul de mai jos te poate ajuta sa ti evidenta tratamentului pe care
        il urmezi. Poti nota in sectiunea observatii disponibila la fiecare
        medicament in parte toate indicatiile pe care ti le-a dat medicul sau
        farmacistul legate de modul corect de administrare a medicamentului.
        Incearca sa iti administrezi medicatia in perioada zilei recomandata, si
        in functie de orarul meselor. In sectiunea Despre diabet gasesti mai
        multe explicatii legate de antidiabeticele orale si de insulina,
        conditii speciale de administrare si precautii.
      </p>
      <ul className="tableTratament">
        <li>
          <ul className="rowTableTratament headerTratament">
            <li className="denMedTratament">Denumire Medicament</li>
            <li className="fmFarmaTratament">Forma Farmaceutică</li>
            <li className="dz24hTratament">Doza pe 24 ore</li>
            <li className="dzUnitTratament">Doza unitară</li>
            <li className="momentAdmTratament">Momentul Administrării</li>
            <li className="observatiiTratament">Observații</li>
          </ul>
        </li>
        {!showContentTable && (
          <li>
            <ul className="rowTableTratament">
              <li className="denMedTratament">nu exista</li>
              <li className="fmFarmaTratament">nu exista</li>
              <li className="dz24hTratament">nu exista</li>
              <li className="dzUnitTratament">nu exista</li>
              <li className="momentAdmTratament">nu exista</li>
              <li className="observatiiTratament">nu exista</li>
            </ul>
          </li>
        )}
        {showContentTable &&
          localdata.map((item, index) => (
            <li key={index}>
              <ul className="rowTableTratament">
                <li className="denMedTratament">{item.denumire}</li>
                <li className="fmFarmaTratament">{item.FMfarma}</li>
                <li className="dz24hTratament">{item.doza24}</li>
                <li className="dzUnitTratament">{item.dozaUnit}</li>
                <li className="momentAdmTratament">
                  {item.moment.map((itm) => (
                    <div className={"momentp"} key={itm}>
                      {itm}
                    </div>
                  ))}
                </li>
                <li className="observatiiTratament">{item.observatii}</li>
              </ul>
              <DeleteBtn action={handleDelete} deleteKey={item.key} />
            </li>
          ))}
      </ul>
      <div className="actionConsultatii">
        <Button
          action={() => setShowForm(!showForm)}
          buttonName={!!showForm ? "Inchide formularul" : "Adauga Consultatii"}
        />
        {!!showForm && (
          <Form
            valueTextarea={textareaAddMedicament}
            initialValue={adaugaMedicamentNou}
            selectValue={valueSelectMomentulAdministrarii}
            selectIsMultiple={true}
            buttonName={"Adauga Medicament"}
            onSubmit={handleSubmit}
          />
        )}
      </div>
      <p>
        Tratamentul de succes face toată diferența în ceea ce privește sănătatea
        pe termen lung, iar stabilirea unui tratament corespunzator reprezinta
        chiar cresterii calitatii vieții atât cu diabetul de tip 1, cât și cu
        cel de tip 2. Tratamentul variază pentru fiecare individ, nu doar în
        funcție de tipul de diabet pe care îl ai, ci și de diferențele de
        tipologie specifice fiecărui individ.
      </p>
      <p>
        Tratamentul diabetului de tip 1 este o sarcină zilnică. Lipsa producerii
        de insulină de catre pancreas face ca diabetul de tip 1 să fie mai
        dificil de controlat. Tratamentul necesită un regim strict care include
        de obicei o dietă calculată cu atenție, activitate fizică planificată,
        injecții multiple zilnice de insulină și testarea glicemiei la domiciliu
        de mai multe ori pe zi.
      </p>
      <p>
        Gestionarea diabetului de tip 2 include de obicei controlul dietei,
        exercițiile fizice, testarea glicemiei la domiciliu și, în unele cazuri,
        medicamente orale și / sau insulină. Aproximativ 40% dintre persoanele
        cu diabet zaharat de tip 2 necesită injecții cu insulină.
      </p>
    </>
  );
};

export default Tratament;
