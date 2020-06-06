import React, { useState, useEffect } from "react";
import { readFromDatabase } from "../../functionalities/firebase/request";
import Myloader from "../../components/Myloader";
import "./styleProfile.css";
import imagine from "../../assets/imc.png";

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
              <img className="imagineHeader" src={imagine} alt=""/>
      <div className="titleSeparationLine"></div>
      <div className="subtitlu">Indicele de masă corporală (IMC)</div>
      {!!IMC ? <p className="valoare">Valoare ta pentru IMC: {IMC}</p> : <p>{eroare}</p>}
      <p>Interpretare rezultate:</p>
      <ul>
        <li>Subponderal: 18,49 sau mai putin</li>
        <li>Greutate normala: intre 18,50 si 24,99</li>
        <li>Supraponderal: intre 25,00 si 29,99</li>
        <li>Obezitate (gradul I): intre 30,00 si 34,99</li>
        <li>Obezitate (gradul II): intre 35,00 si 39,99	</li>
        <li>Obezitate morbida: 40,00 sau mai mult</li>
      </ul>
      <p>
        O cantitate mare de grăsime corporală poate duce la diverse probleme de
        sănătate. A fi subponderal pune, de asemenea, riscuri si problem de
        sănătate. Indicele de masă corporală (IMC) și circumferința taliei sunt
        instrumente de screening utile pentru a estima legatura dintre greutatea
        ta si riscul potențial de boală.
      </p>
      <p>
        IMC reprezintă greutatea unei persoane în kilograme împărțită la
        pătratul înălțimii în metri. Un IMC prea ridicat sau scazut indică, de
        ambele parți, probleme de sănătate.
      </p>
      <p>
        Corelația dintre IMC și grăsimea corporală este destul de puternică, dar
        chiar dacă 2 persoane au același IMC, nivelul lor de greutate corporală
        poate diferit. În general, chiar dacă au același IMC, femeile tind să
        aibă mai multă grăsime corporală decât bărbații; în medie, persoanele în
        vârstă tind să aibă mai multă grăsime corporală decât adulții mai
        tineri; iar sportivii au mai puțină grăsime corporală decât cei care nu
        sunt sportivi.
      </p>
      <p>
        Un alt mod de a estima riscul potențial de boală este de a-ți măsura
        circumferința taliei. Grăsimea abdominală excesivă poate fi gravă,
        deoarece presupune un risc mai mare de a dezvolta afecțiuni legate de
        obezitate, cum ar fi diabetul de tip 2, hipertensiunea arterială și
        boala coronariană. Pentru barbați circumeferința taliei ar trebui sa fie
        mai mica de 100 de centimetri. Iar pentru femeile care nu sunt gravide
        circumferinta taliei ar trebui sa nu fie mai mare de 90 de centimetri.
      </p>
    </>
  );
};

export default IMC;
