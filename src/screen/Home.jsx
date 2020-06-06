import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imagine from "../assets/home3.png";
import "./styleScreen.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="centrare">
        <h1 className="hello">Bine ai venit pe Diabook!</h1>
        <p>
          Această platformă este destinată persoanelor care suferă de diabet,
          care sunt predispuse la a avea diabet, dar și tuturor persoanelor care
          doresc să se informeze despre aceasta patologie sau doresc să iși
          gestioneze mai bine regimul alimentar. Se cunoaște faptul că diabetul
          zaharat (DZ) este o patologie foarte frecventă în cadrul populației și
          că este foarte importantă maniera în care este abordat stilul de
          viață. Pentru a-ți veni în ajutor și a contribui la îmbunătățirea
          stării tale de sănătate, Diabook îți propune să parcurgi următoarele
          secțiuni și să observi ceea ce are de oferit.
        </p>
        <ul>
          <li>
            Despre diabet – În aceasta secțiune sunt abordate subiecte precum:
            simptome, complicații, medicație, alimentație și monitorizare per
            ansamblu a diabetului.
          </li>
          <li>
            Profilul meu – unde iți poți adauga date referitoare la tratament,
            consultații si analize generale cu scopul de a fi mai ușor de
            gestionat și monitorizat.
          </li>
          <li>
            Alimentație – aici afli cum poți să iți calculezi caloriile de la
            fiecare masă și poți vedea diferența în continutul energetic a
            diverse produse alimentare.
          </li>
        </ul>
      </div>
      <div className="homeDetalii">
        <h2>Știai că?</h2>
        <p>
          Monitorizarea frecventă a glucozei sanguine este o parte esențială a
          managementului diabetului întrucât menținerea nivelului glicemiei în
          intervalul fiziologic îți permite să duci un stil de viață sănătos
          prin evitarea complicațiilor. Monitorizarea continuă a glucozei oferă
          informații despre modificarea nivelului glicemiei pe tot parcursul
          zilei, precum direcția, mărimea, durata, frecvența, și cauzele
          fluctuațiilor nivelurilor glicemice și facilitează luarea deciziilor
          optime de tratament pentru tine.
        </p>
        <p>
          Aportul excesiv de calorii este o cauză majoră a escaladării
          obezității și diabetului zaharat de tip 2 la nivel mondial. Calitatea
          grăsimilor și carbohidraților joacă un rol important în expansiunea
          diabetului, chiar independent de indicele de masă corporală și alți
          factori de risc. S-a constat faptul că produsele alimentare cu indice
          glicemic mare și grăsimile de tip trans sunt asociate cu creșterea
          riscului de diabet, în timp ce un consum mai ridicat de fibre din
          cereale și grăsimi polinesaturate duc la diminuarea acestui risc.
        </p>
        <p>
          Numeroase studii epidemiologice arată că activitatea fizică crescută
          reduce riscul de a dezvolta diabet, în timp ce comportamente sedentare
          cresc atât riscurile cât și complicațiile. Fiecare interval de 2
          ore/zi de timp petrecut în fața televizorului este asociat cu o
          creștere a riscului de diabet cu 14%. Alternativ, fiecare interval de
          2 ore/zi de stat în picioare sau în mers pe jos a fost asociat cu un
          procent de 12% de reducerea a riscului.
        </p>
      </div>
      <h1 className="centrare">Statistici și fapte despre diabet</h1>
      <div className="aliniereStanga">
        Aproximativ 422 milioane de persoane au diabet, iar 1,6 milioane de
        decese sunt atribuite direct diabetului în fiecare an. Atât numărul de
        cazuri, cât și prevalența diabetului au crescut constant în ultimele
        câteva decenii.
      </div>
      <div className="aliniereStanga">
        În urmă cu un deceniu, în 2010, anticiparea globală de diabet pentru
        anul 2025 era de 438 de milioane. Deși mai sunt încă 5 ani până atunci,
        această predicție a fost deja depășită cu 25 de milioane.
      </div>
      <div className="aliniereStanga">
        În 2019, țările cu cel mai mare număr de adulți cu diabet au fost China,
        India și Statele Unite ale Americii, și se anticipează să rămână așa
        până în 2030.
      </div>
      <div className="aliniereStanga">
        În Regiunea Europeană există aproximativ 60 de milioane de persoane cu
        diabet sau aproximativ 10,3% dintre bărbați și 9,6% dintre femeile cu
        vârsta de 25 de ani și peste, iar prevalența diabetului este în creștere
        la toate grupele de vârstă.
      </div>
      <div className="aliniereStanga">
        În anul 2017 România se situa printre țările Europene cu prevalența (%)
        cea mai crescută a DZ, respectiv mai mult de 9% din populația cu vârste
        cuprinse între 18 și 99 ani se estimează că ar suferi de diabet.
      </div>
      <div className="aliniereStanga">
        Analiza regională a incidenței DZ arată că pe locul întâi se află
        Regiunea Sud-Muntenia(13,39%), urmată de regiunea
        Bucureşti-Ilfov(12,79%) și de regiunea de Nord-Est (12, 38%) pe locul
        trei.
      </div>
      <div className="aliniereStanga">
        În ciuda beneficiilor terapiei, studiile au indicat că obiectivele
        glicemice recomandate sunt atinse în cazul a mai puțin de 50% din
        pacienți, ceea ce poate fi asociat cu o aderență scăzută la terapie.
      </div>
      <Footer />
    </div>
  );
};

export default Home;
