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
      <img className="imagineHeader" src={imagine} alt=""/>
      <div className="titleSeparationLine"></div>
      <div className="subtitlu">Colesterolul</div>
      {!!data && !!data.colesterol ? (
        <p className="valoare">
          Valoare ta pentru colesterol: {data.colesterol} mg/dl{" "}
        </p>
      ) : (
        <p>{eroare}</p>
      )}
      <p>
        Nivelurile crescute de colesterol (hipercolesterolemie) sunt strans
        legate de un risc mai mare de a dezvolta boli cardiace și accidente
        vasculare cerebrale, care sunt în general mai frecvente la persoanele cu
        diabet. Modificările stilului de viață și statinele sunt utilizate
        frecvent pentru a reduce nivelul ridicat de colesterol.
      </p>
      <p>
        Nivelurile ridicate de colesterol pot fi determinate de: o dieta bogată
        în calorii si în carbohidrați, activitate fizică scăzută, obezitate,
        fumat, consum ridicat de alcool. Insa in unele cazuri,
        hepercolesterolemia poate fi data de afectiuni conexe, precum:
        hipotiroidism, afectiuni ale rinichilor si ficatului sau
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
        Se considera ca ai hipertensiune arterială daca ai presiunea sanguina
        peste 130/80 mmHg. De exemplu, 120/80 ar fi o tensiune arterială
        sănătoasă. Deseori nu există simptome evidente ale tensiunii arteriale
        crescute. Cu toate acestea, tensiunea arterială foarte mare poate duce
        la: dureri de cap, sangerari nazale, vedere încețoșată sau respiratie
        dificila. Se cunoaste faptul ca hipertensiunea arterială crește riscul
        următoarelor complicații diabetice: retinopatie diabetic, nefropatie
        diabetică (boală renală), boli cardiovasculare, accident vascular
        cerebral.
      </p>
      <p>
        Tensiunea arterială scăzută, definită ca o presiune arterială sub 90/60
        mmHg, tinde să fie mai puțin frecventă decât hipertensiunea arterială.
        La persoanele cu diabet zaharat, tensiunea arterială scăzută poate
        apărea dacă ti s-a prescris medicație pentru tensiunea arterială dar, de
        asemenea, ti-ai îmbunătățit valorile tensionale prin modificări ale
        stilului de viață. Dacă medicația pentru tensiune arterială duce la
        scăderea tensiunii arteriale, medicul tau poate decide să iti modifice
        doza sau să iti scoată din medicamente. Dacă nu urmezi un tratament
        pentru hipertensiune, dar totusi ai hipotensiune, e recomandat să iei
        măsuri de precauție, cum ar fi sa te menti hidratat, sa nu te ridici
        brusc in picioare și sa eviti cafeina noaptea.
      </p>
    </div>
  );
};

export default AltiParametrii;
