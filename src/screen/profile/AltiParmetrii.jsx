import React, { useState, useEffect } from "react";
import { readFromDatabase } from "../../functionalities/firebase/request";
import Myloader from "../../components/Myloader";
import "./styleProfile.css";
import imagine from "../../assets/altiParametri.png";

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
      {/* {!!data&&!!data.colesterol ? (
        <ul>
          <li>colesterol : {data.colesterol}</li>
          <li>trigliceride : {data.trigliceride}</li>
          <li>tensiune arteriala : {data.tensiuneArteriala}</li>
        </ul>
      ) : (
        <p>{eroare}</p>
      )} */}
      <img className="imagineHeader" src={imagine} alt="" />
      <div className="titleSeparationLine"></div>
      <div className="subtitlu">Colesterolul total</div>
      {!!data && !!data.colesterol ? (
        <p className="valoare">
          Valoare ta pentru colesterolul total: {data.colesterol} mg/dl{" "}
        </p>
      ) : (
        <p>{eroare}</p>
      )}
      <p>Interpretare rezultate:</p>
      <ul>
        <li>Valori normale: sub 200 mg/dl</li>
        <li>Valori de graniță: 200-240 mg/dl</li>
        <li>Valori crescute: peste 240 mg/dl</li>
      </ul>

      <p>
        Nivelurile crescute de colesterol (hipercolesterolemie) sunt strâns
        legate de un risc mai mare de a dezvolta boli cardiace și accidente
        vasculare cerebrale, care sunt în general mai frecvente la persoanele cu
        diabet. Modificările stilului de viață și statinele sunt utilizate
        frecvent pentru a reduce nivelul ridicat de colesterol.
      </p>
      <p>
        Nivelurile ridicate de colesterol pot fi determinate de: o dieta bogată
        în calorii si în carbohidrați, activitate fizică scăzută, obezitate,
        fumat, consum ridicat de alcool. Însă in unele cazuri,
        hepercolesterolemia poate fi dată de afecțiuni conexe, precum:
        hipotiroidism, afecțiuni ale rinichilor și ficatului sau
        hipercolesterolemia familială - o afecțiune genetică care afectează
        aproximativ 1 din 500 de persoane.
      </p>
      <div className="subtitlu">Trigliceridele</div>
      {!!data && !!data.trigliceride ? (
        <p className="valoare">
          Valoare ta pentru trigliceride: {data.trigliceride} mg/dl{" "}
        </p>
      ) : (
        <p>{eroare}</p>
      )}
      <p>Interpretare rezultate:</p>
      <ul>
        <li>Valori normale: sub 150 mg/dl</li>
        <li>Valori de graniță: 150-200 mg/dl</li>
        <li>Valori crescute: 200-500 mg/dl</li>
        <li>Valori foarte crescute: peste 500 mg/dl</li>
      </ul>

      <p></p>
      <p>
        Trigliceridele sunt o altă formă de lipide din sânge (grăsimi din sânge)
        și sunt, de asemenea, măsurate atunci când este efectuat un test de
        colesterol. Este optim ca acestea sa fie mai mici de 150 mg/dl, intrucat
        valori peste 200mg/dl reprezinta factori de risc pentru boala
        aterosclerotica.
      </p>
      <div className="subtitlu">Tensiunea arterială</div>
      {!!data && !!data.tensiuneArteriala ? (
        <p className="valoare">
          Valoare ta pentru tensiunea arterială: {data.tensiuneArteriala} mmHg{" "}
        </p>
      ) : (
        <p>{eroare}</p>
      )}
      <p>
        Interpretare rezultate:
        <p>
          <ul>
            <li>Valori optime: sub 120/80 mmHg</li>
            <li>Valori normale: sub 130/85 mmHg</li>
            <li>Valori de graniță: 130-139/85-89 mmHg</li>
            <li>HTA ușoară (grad I): 140-159/90-99 mmHg</li>
            <li>HTA moderată (grad II): 160-179/100-109 mmHg</li>
            <li>HTA severă (grad III): peste 180/110 mmHg</li>
            <li>HTA sistolică izolată: >140/&lt;90 mmHg</li>
          </ul>
        </p>
        Se considera ca ai hipertensiune arterială daca ai presiunea sanguina
        peste 130/80 mmHg. De exemplu, 120/80 ar fi o tensiune arterială
        sănătoasă. Prima valoare, cea mare, reprezintă tensiunea sistolică,
        adică presiunea cu care sângele împinge pe artere, la o contracție
        cardiacă. Valoarea mai mică reprezintă tensiunea diatolică, care se
        produce la relaxarea mușchiului inimii. Deseori nu există simptome
        evidente ale tensiunii arteriale crescute. Cu toate acestea, tensiunea
        arterială foarte mare poate duce la: dureri de cap, sangerări nazale,
        vedere încețoșată sau respirație dificilă. Se cunoaște faptul ca
        hipertensiunea arterială crește riscul următoarelor complicații
        diabetice: retinopatie diabetică, nefropatie diabetică (boală renală),
        boli cardiovasculare, accident vascular cerebral.
      </p>
      <p>
        Tensiunea arterială scăzută, definită ca o presiune arterială sub 90/60
        mmHg, tinde să fie mai puțin frecventă decât hipertensiunea arterială.
        La persoanele cu diabet zaharat, tensiunea arterială scăzută poate
        apărea dacă ți s-a prescris medicație pentru tensiunea arterială dar, de
        asemenea, ți-ai îmbunătățit valorile tensionale prin modificări ale
        stilului de viață. Dacă medicația pentru hipertensiunea arterială duce
        la scăderea tensiunii arteriale, medicul tău poate decide să iți
        modifice doza sau să îți scoată din medicamente. Dacă nu urmezi un
        tratament pentru hipertensiune, dar totuși ai hipotensiune, e recomandat
        să iei măsuri de precauție, cum ar fi sa te menți hidratat, să nu te
        ridici brusc in picioare și să eviți cafeina noaptea.
      </p>
    </div>
  );
};

export default AltiParametrii;
