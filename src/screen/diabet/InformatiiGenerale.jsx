import React from "react";
import "./styleDiabet.css";
import imagine from "../../assets/generalitati.png";

const InformatiiGenerale = () => {
  return (
    <>
              <img className="imagineHeader" src={imagine} alt=""/>
      <div className="titleSeparationLine"></div>
      <div className="subtitlu">Introducere</div>
      <p>
        Diabetul zaharat(DZ) este cea mai frecventă tulburare metabolică care
        afectează oamenii și se caracterizează prin hiperglicemie cronică. În
        mod incontestabil, această afecțiune reprezintă una dintre cele mai mari
        probleme financiare și de asistență medicală de la nivel mondial.{" "}
      </p>
      <p>
        Conform Federației Internaționale de Diabet, în anul 2017 s-au
        înregistrat 424,9 milioane de adulți cu DZ la nivel global. În ciuda a
        nenumărate studii medicale, publicații și protocoale pentru tratamentul
        diabetului zaharat, aproximativ 50 % (212,4 milioane) de pacienții cu DZ
        nu știu de boala lor. Incidența crescută a bolii este o consecință
        evidentă a alimentației nesănătoase și a lipsei de activitate fizică
        care conduc împreună la obezitate și rezistența țesuturilor organismului
        la insulină pe o perioadă lungă de timp.{" "}
      </p>
      <div className="subtitlu">Ce este diabetul zaharat?</div>
      <p>
        Diabetul este o afecțiune care determină un nivel mai ridicat decât
        normalul al glicemiei. Diabetul apare atunci când corpul tău nu poate
        produce sau nu poate utiliza în mod eficient propria insulină, un hormon
        realizat de către pancreas. Insulina servește ca o „cheie” pentru a
        deschide celulele, cu scopul de a permite zahărului (glucozei) din
        alimente să intre și să fie utilizat. Apoi, corpul folosește acea
        glucoză pentru a produce energie.{" "}
      </p>
      <p>
        Toți carbohidrații alimentari (glucidele) sunt descompuși în glucoză în
        sânge. În diabet, faptul că organismul nu este suficient de capabil să
        producă insulină sau să o folosească eficient duce la creșterea
        nivelului de glucoză în sânge (cunoscut sub numele de hiperglicemie). Pe
        termen lung, nivelul ridicat de glucoză este asociat cu deteriorarea
        organismului și tulburări ale diferitelor organe și țesuturi.{" "}
      </p>
      <div className="subtitlu">Tipuri de diabet zaharat</div>
      <p>
        Există trei tipuri principale de diabet - tip 1, tip 2 și gestațional.
      </p>
      <p>
        Diabetul de tip 1 se poate dezvolta la orice vârstă, dar apare cel mai
        frecvent la copii și adolescenți. Atunci când aveți diabet de tip 1,
        corpul dvs. produce foarte puțină insulină sau deloc, ceea ce înseamnă
        că aveți nevoie de injecții zilnice de insulină pentru a menține nivelul
        de glucoză din sânge sub control.{" "}
      </p>
      <p>
        Diabetul de tip 2 este mai frecvent la adulți și reprezintă aproximativ
        90% din toate cazurile de diabet. Când aveți diabet de tip 2, corpul
        dumneavoastră nu folosește bine insulina pe care o produce. Piatra de
        temelie a tratamentului cu diabet zaharat tip 2 este stilul de viață
        sănătos, incluzând o activitate fizică crescută și o alimentație
        sănătoasă. Cu toate acestea, în timp, majoritatea persoanelor cu diabet
        zaharat de tip 2 vor necesita medicamente orale și / sau insulină pentru
        a menține nivelul glicemiei sub control.{" "}
      </p>
      <p>
        Diabetul gestațional este un tip de diabet care constă în glicemie
        ridicată în timpul sarcinii și este asociat cu complicații atât la mamă
        cât și la copil. Acest tip de diabet dispare de obicei după sarcină, dar
        femeile afectate și copiii lor au un risc crescut de a dezvolta diabet
        de tip 2 mai târziu în viață.
      </p>
      <div className="subtitlu">Simptome</div>
      <p>
        Debutul diabetului de tip 1 se întâmplă foarte rapid. Următoarele
        simptome pot apărea brusc și sunt prea severe pentru a fi trecute cu
        vederea:
      </p>
      <ul >
        <li>Setea crescută</li>
        <li>
          Urinări frecvente (pot să apară la copiii care au învățat deja să
          folosească toaleta singuri)
        </li>
        <li>Scădere rapidă și inexplicabilă în greutate</li>
        <li>Foame extremă</li>
        <li>Slăbiciune sau oboseală extremă</li>
        <li>Iritabilitate neobișnuită</li>
        <li>Vedere încețoșată</li>
        <li>Greață, vărsături și dureri abdominale</li>
        <li>Miros neplăcut al respirației</li>
        <li>Piele iritată</li>
      </ul>
    </>
  );
};

export default InformatiiGenerale;
