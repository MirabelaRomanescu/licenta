import React from "react";
import "./styleDiabet.css";
import imagine from "../../assets/ado.png";

const Ado = () => {
  return (
    <>
      <img className="imagineHeader" src={imagine} alt=""/>
      <div className="titleSeparationLine"></div>
      <div className="subtitlu">Generalități</div>
      <p>
        Medicaţia hipoglicemianata orală se utilizeaza pentru controlul
        valorilor glicemice la pacientii cu diabet zaharat tip II. Initial, la
        unii pacienti la care valorile glicemiei sunt peste 110 mg / dl dar sub
        125 mg / dl , se recomanda incercarea de normalizare a valorii glicemiei
        prin reducerea greutatii corporale si regim igieno - dietetic, inclusiv
        renuntarea la fumat. Pentru cei care nu reusesc reducerea glicemiei la
        valoarea tinta, sau asociază şi factori de risc (valori crescute ale TA)
        se indica medicatie hipoglicemianta.
      </p>
      <p>
        Alegerea unui anumit medicament tine cont de caracteristicile clinice
        ale pacientului (ex. gradul de hiperglicemie), greutatea corporala și
        functia renala. La un pacient cu diabet zaharat tip II, diagnosticat in
        faza acuta, cu hiperglicemie severa, se recomanda tratamentul cu
        insulina, pana la stabilizarea pacientului, cand este trecut pe
        medicatie orala.
      </p>
      <p>
        Tratamentul se incepe cu monoterapie (un singur medicament). În general,
        în funcție de particularitățile fiecărui pacient, se recurge la
        următoarea schemă:
      </p>
      <p>
        <ul>
          <li>
            Daca pacientul diabetic nu a raspuns la măsurile privitoare la
            modificarea stilului de viata si este:
            <p>
              <ul>
                <li>
                  supraponderal, cu functie renala normala → administrare
                  metformin
                </li>
                <li>
                  supraponderal, cu functie renala afectata → administrare
                  sulfamide antidiabetice (daca pacientul prezinta intoleranta
                  la sulfamide, se poate administra o glitazona)
                </li>
              </ul>
            </p>
          </li>
          <li>
            Daca pacientul diabetic nu a raspuns la masurile privitoare la
            modificarea stilului de viata si este:
            <p>
              <ul>
                <li>normoponderal→ administrare sulfamide antidiabetice </li>
              </ul>
            </p>
          </li>
        </ul>
      </p>
      <p>
        Datorită progresiei bolii ca urmare a diminuarii treptate a
        functionalitatii celulelor β pancreatice si cresterii rezistentei la
        insulina, controlul glicemic necesita administrarea a 2 (mai rar 3)
        medicamente antidiabetice inainte de a recurge la insulino-terapie.
        Asocierile se vor face intre antidiabetice cu mecanisme diferite
        hipoglicemiante.
      </p>
      <p>
        Ca regula generala, pe durata tratamentului cu antidiabetice orale se
        recomanda auto-controlul periodic al glicemiei.
      </p>
      <p>Antidiabeticele orale actionează în principal prin 3 moduri:</p>
      <p>
        <ul>
          <li>
            stimularea secreției de insulină de către celulele pancreatice (
            glinidele și cele din clasa sulfamidelor hipoglicemiante, numite și
            sulfoniluree)
          </li>
          <li>
            creșterea utilizării glucozei la nivelul țesuturilor consumatoare de
            glucoză, așadar reducând insulino-rezistența (biguanide și
            glitazonele)
          </li>
          <li>
            reducerea absorbției intesinale a carbohidraților (inhibitorii de
            alfa-gloczidază)
          </li>
        </ul>
      </p>

      <div className="titlu">
        Principale clase de antidiabetice orale sunt:{" "}
      </div>

      <div className="subtitlu">BIGUANIDELE</div>
      <p>
        Principalele substanțe active (de bază) care fac parte din această clasă
        sunt:
      </p>
      <p>
        <ul>
          <li>
            Merformin
            <p>
              Denumiri comerciale: MEGUAN compr.film. 500mg; 850mg / SIOFOR
              compr.film. 500mg; 850mg; 1000mg
            </p>
            <p>
              Administrare: oral, intre 1-2.5g/zi in 2-3 prize, in timpul sau
              dupa masa.
            </p>
          </li>
          <li>
            Buformin
            <p>Denumire comerciala: SILUBIN RETARD drj.retard 100mg</p>
            <p>
              Administrare: oral, 1drj/zi dimineata, sau 1drjx2/zi, dupa masa.
            </p>
          </li>
        </ul>
      </p>
      <p>Informații generale referitoare la biguanide:</p>
      <p>
        <ul>
          <li>
            masuri dietetice prealabile, reducerea greutatii corporale,
            intensificarea activitatii zilnice, sunt obligatorii
          </li>
          <li>metforminul cel mai utilizat din aceasta clasa</li>
          <li>
            reprezintă tratament de prima intentie la pacientii diabetici cu
            obezitate
          </li>
          <li>
            initial, se administreaza doze mici (dozele pot fi de ex: 500 mg/zi
            1 saptamana, apoi 500mg x 2/zi 1 saptamana, cu cresterea saptamanala
            a dozelor pana la atingerea glicemiei tinta sau aparitia
            intolerantei)
          </li>
          <li>
            doza max./zi 3g (frecvent intoleranta gastro-intestinala apare la
            2g/zi) iar pentru formularile cu eliberare prelungita maxim 2g/zi.
          </li>
          <li>se administreaza in timpul sau dupa masa.</li>
          <li>
            nu se recomanda la pacientii cu insuficiență renală sau hepatică
          </li>
          <li>
            se pot folosii ca monoterapie sau biterapie în asociere cu
            sulfonilureele sau cu insulina, în diabetul instabil
          </li>
          <li>
            preparatele retard se pot administra în două prize dimineaţa şi
            seara şi au o toleranţă digestivă superioară comparativ cu cele
            obişnuite
          </li>
        </ul>
      </p>
      <p>
        Reacții adverse: tulburări digestive (greață, vomă, diaree, anorexie =
        pierderea apetitului), senzația de gust metalic, acidoză lactică (rar),
        malabsorbția vitaminei B12 și a acidului folic. Contraindicate în diabet
        zaharat de tip 1, sarcină, alăptare, diabet zaharat de tip 2 complicat
        cu insuficiență renală
      </p>

      <div className="subtitlu">SULFONAMIDE</div>
      <p>
        Principalele substanțe active (de bază) care fac parte din această clasă
        sunt:
      </p>
      <p>
        <ul>
          <li>
            Tolbutamid
            <p>Denumire comerciala: TOLBUTAMID compr. 500mg</p>
            <p>Administrare: oral, 1cpx2-3/zi, inainte sau dupa masa.</p>
          </li>
          <li>
            Glibenclamid
            <p>Denumire comerciala: MANINIL compr. 1,75mg; 3.5mg; 5mg</p>
            <p>
              Administrare: oral, initial 2.5-5mg x 1-2/zi, dimineata sau
              dimineata si seara, cu 1-2 ore inainte de masa; in functie de
              raspunsul glicemic doza se poate creste treptat la intervale de 7
              zile.
            </p>
          </li>
          <li>
            Glipizid
            <p>
              Denumiri comerciale: GLUCOTROL XL compr.film.elib.prelungita
              5mg;10mg
            </p>
            <p>
              Administrare: oral, initial 2.5-5mg x 1-2/zi, dimineata respectiv
              dimineata si seara, cu 15-20 min. inainte de masa; in functie de
              raspunsul glicemic doza se poate creste treptat la intervale de
              3-5 zile. Usual, doza de intretinere este 5-15mg.
            </p>
          </li>
          <li>
            Gliquidon
            <p>Denumire comerciala: GLURENORM compr. 30mg</p>
            <p>
              Administrare: oral, initial 15mg, dimineata inainte de micul
              dejun; in functie de raspunsul glicemic doza se poate creste
              treptat cu cate 15 mg pana la 30-60mg/zi de 2-3x/zi.
            </p>
          </li>
          <li>
            Gliclazid
            <p>
              Denumire comerciala: DIAPREL compr. 80mg; compr.elib.modif. (MR)
              30mg.
            </p>
            <p>
              Administrare: oral, initial 40-80mg/zi; in functie de raspunsul
              glicemic, doza se poate creste treptat la intervale de 7-10 zile
              pana la 160-320mg/zi. Preparatle retard 1-2 prize/zi.
            </p>
          </li>
          <li>
            Glimepririd
            <p>Denumire comerciala: AMARYL compr. 1mg; 2mg; 3mg; 4mg; 6mg</p>
            <p>
              Administrare: oral, initial 1mg/zi, intr-o priza. In functie de
              raspunsul glicemic, doza se poate creste treptat 2-4 mg/zi, la
              intervale de 1-2 saptamani.
            </p>
          </li>
        </ul>
      </p>
      <p>Informații generale:</p>
      <p>
        <ul>
          <li>se administreză cu jumătate de oră înainte de masă</li>
          <li>
            efecte adverse: hipoglicemie, tulburări gastrointestinale
            (flatuleță, greață, dureri), risc crescut de alergii cutanate,
            efecte teratogene
          </li>
        </ul>
      </p>

      <div className="subtitlu">INHIBITORI AI ALFAGLUCOZIDAZEI</div>
      <p>
        Principalele substanțe active (de bază) care fac parte din această clasă
        sunt:
      </p>
      <p>
        <ul>
          <li>
            Acarboza
            <p>Denumire comerciala: GLUCOBAY compr. 50mg; 100mg</p>
            <p>
              Administrare: initial 50mg x 3/zi; doza se poate creste la 100mg x
              3/zi.
            </p>
          </li>
        </ul>
      </p>
      <p>Informații generale:</p>
      <p>
        <ul>
          <li>scad absorbția carbohidraților din intestinul subțire</li>
          <li>se administrează în timpul meselor</li>
          <li>efecte adverse: flatulență, sindrom diareic</li>
        </ul>
      </p>

      <div className="subtitlu">TIAZOLIDINDIONE (GLITAZONE)</div>
      <p>
        Principalele substanțe active (de bază) care fac parte din această clasă
        sunt:
      </p>
      <p>
        <ul>
          <li>
            Pioglitazona
            <p>Denumire comerciala: ACTOS compr. 15mg; 30mg; 45mg</p>
            <p>
              Administrare: initial, 15mg sau 30mg/zi, intr-o priza. Daca se
              administreaza in monoterapie doza se poate creste, daca se
              administraeza in asocieri hipoglicemice, la nevoie doza se poate
              reduce.
            </p>
          </li>
        </ul>
      </p>
      <p>Informații generale:</p>
      <p>
        <ul>
          <li>se administrează cu sau fără alimente, la aceeași oră din zi</li>
          <li>
            reacții adverse: edeme, enemie, creșterea colesterolemiei și a
            trigliceridemiei, cardiotoxicitate (rosiglitazona)
          </li>
        </ul>
      </p>

      <div className="subtitlu">
        INHIBITORI AI DIPEPTIDIL PEPTIDAZEI 4 (DDP-4) (GLIPTINE)
      </div>
      <p>
        Principalele substanțe active (de bază) care fac parte din această clasă
        sunt:
      </p>
      <p>
        <ul>
          <li>
            Sitagliptina
            <p>Denumire comerciala: JANUVIA compr. 25mg; 50mg; 100mg</p>
            <p>Administrare: oral, 100mg/zi in priza unica.</p>
          </li>
          <li>
            Vildagliptina
            <p>Denumire comerciala: GALVUS compr. 50mg; 100mg</p>
            <p>Administrare: oral, 100mg/zi in priza unica.</p>
          </li>
        </ul>
      </p>
      <p>Informații generale:</p>
      <p>
        <ul>
          <li>
            se administrează în monoterapie, indiferent de ingestia de alimente
          </li>
          <li>
            reacții adverse: hipoglicemie, edeme periferice, cefalee, infecții
            respiratorii superioare
          </li>
        </ul>
      </p>

      <div className="subtitlu">GLINIDE</div>
      <p>
        Principalele substanțe active (de bază) care fac parte din această clasă
        sunt:
      </p>
      <p>
        <ul>
          <li>
            Repaglinid
            <p>Denumire comerciala: NOVONORM compr. 0,5mg; 1mg; 2mg</p>
            <p>
              Administrare: oral, cu15-30 min inainte de mesele principale. In
              functie de raspunsul glicemic, doza se poate creste la intervale
              de 1-2 saptamani. Dmax/priza = 4mg; Dmax/24h = 16mg.
            </p>
          </li>
        </ul>
      </p>
      <p>Informații generale:</p>
      <p>
        <ul>
          <li>se administrează ci 15-30 minute înainte de masă</li>
          <li>
            reacții adverse: cresterea transaminazelor, hipoglicemie, erupții
            cutanate
          </li>
        </ul>
      </p>

      <div className="subtitlu">INCRETINOMIMETICE</div>
      <p>
        Principalele substanțe active (de bază) care fac parte din această clasă
        sunt:
      </p>
      <p>
        <ul>
          <li>
            Exenatid
            <p>
              Denumire comerciala: BYETTA sol.inj. 5μg; 10 μg/doza. Pen
              preumplut cu 60 doze.
            </p>
          </li>
        </ul>
      </p>
      <p>Informații generale:</p>
      <p>
        <ul>
          <li>
            se administreză indiferent de orarul meselor, prin injectare
            subcutanată o dată pe săptămână sau o dată pe zi
          </li>
          <li>
            reacții adverse: tulburări gastro-intestinale (greață, diaree,
            vărsături, lipsa poftei de mancare), hiperhidroză, manifestări
            cutanate
          </li>
        </ul>
      </p>

      <div className="subtitlu">Asocieri</div>
      <p>
        <ul>
          <li>
            Metformin + sulfamide antidiabetice (Metformin + glibenclamid)
            <p>Denumiri comerciale: BIDIAB, GLIBOMET , GLIFORMIN</p>
          </li>
          <li>
          Metformin + tiazolidindione (Metformin + pioglitazona)
            <p>Denumiri comerciale: COMPETACT, GLUBRAVA</p>
          </li>
          <li>
          Sulfamide antidiabetice + tiazolidindione (Glimepirid + pioglitazona)
            <p> Denumiri comerciale: TANDEMACT</p>
          </li>
        </ul>
      </p>
    </>
  );
};

export default Ado;
