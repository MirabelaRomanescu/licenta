import React from "react";
import "./styleDiabet.css";
import imagine from "../../assets/insulina.png";

const Insulinoterapia = () => {
  return (
    <>
      <img className="imagineHeader" src={imagine} alt="" />
      <div className="titleSeparationLine"></div>
      <div className="subtitlu">Despre insulină</div>
      <p>
        Insulina este un hormon hipoglicemiant secretat de către pancreas.
        Descoperirea și obținerea sa ca medicament reprezintă unul dintre marile
        succese ale medicinei. Milioane de diabetici au fost salvați ca urmare a
        utilizării insulinei. Structura insulinei este specifică fiecărei
        specii, însă insulina de porc diferă de cea umană doar printr-un singur
        aminoacid, motiv pentru care aceasta poate fi utiliată în diabetul
        zaharat de tip 1 și 2.
      </p>
      <p>
        Insulina este inactivată după administrare orală, în intestin. Din acest
        motiv ea se administrează subcutanat, urmând ca după injectare să treacă
        în circulația sanguină și în țesuturi.{" "}
      </p>

      <div className="subtitlu">
        Clasificarea tipurilor de insulină folosite în terapie
      </div>
      <p>În funcție de origine, insulina poate fi: </p>
      <ul>
        <li>
          insulina de origine animală – extrasă din pancreas de porc și/sau de
          bovină; în prezent aceste preparate de insulină sunt pe cale de
          dispariție datorită potențialului risc alergizant
        </li>
        <li>insulina umană – obținută prin inginerie genetică</li>
        <li>analogi de insulină</li>
      </ul>
      <p>
        Ritmul administrării și posologia depind de tipul de insulină, care
        dictează și latența și durata de acțiune. Latența reprezintă timpul
        dintre administrarea insulinei și momentul în care aceasta începe să își
        facă efectul. Astfel, în acest sens, există 3 tipuri de insulină:{" "}
      </p>

      <ul>
        <li>
          insuline cu acțiune de scurtă durată – au latența de 15-30 minute,
          efect maxim la 3 ore, durata acțiunii 6-8 ore, uneori 16 ore; Pentru
          controlul glicemiei este nevoie de 2-4 administări în 24 h. Exemple de
          denumiri comerciale: HUMULIN R, HUMALOG, NOVORAPID, APIDRA
        </li>
        <li>
          insuline cu acțiune intermediară – au latența de 1-2 ore, efect maxim
          la 6-12 ore, durata acțiunii 18-24 ore; Sunt necesare 2 administrări
          pe zi, dimineața și seara. Exemple de denumiri comerciale: HUMULIN,
          HUMALOG MIX, NOVOMIX
        </li>
        <li>
          insuline cu acțiune lentă și durabilă – au latența de 4-6 ore, efect
          maxim la 14-20 ore, durata acțiunii 20-36 ore; Se administrează o dată
          pe zi. Exemple de denumiri comerciale: ABASAGLAR, LANTUSTOUJEO,
          LEVEMIR
        </li>
      </ul>

      <div className="subtitlu">Forme de prezentare :</div>
      <ul>
        <li>
          <b>Forme injectabile:</b> seringi clasice; pen-uri
        </li>
        <li>
          <b>Forme inhalatorii:</b> primul produs care a avut autorizație de
          punere pe piață a fost EXUBERA realizat de Pfizer, introdus in 2006 și
          retras în 2007 datorită proastei acceptanțe de către pacienți și de
          profesioniști. Raportul cost-eficienta nu a fost in favoarea acestei
          forme non-invazive de adminstrare a insulinei ;{" "}
        </li>
        <li>
          <b>Pompa de insulina:</b> este un aparat medical miniaturizat utilizat
          pentru administrarea subcutanată a insulinei în tratamentul
          diabetului. Administrarea insulinei cu ajutorul unei pompe se mai
          numeşte şi terapia prin infuzie continuă de insulină. Acest aparat
          purtat de pacienţi este constituit din următoarele componente:
          <ul>
            <li>pompa propriu-zisă;</li>
            <li>rezervorul pentru insulină (în interiorul aparatului);</li>
            <li>ecran și butoane pentru introducerea comenzilor;</li>
            <li>
              setul elementelor pentru infuzie, ce include o canulă (tub mic și
              flexibil) pentru inserția subcutanată și un sistem de tuburi fine
              din material plastic ce fac legătura între rezervorul de insulină
              și canulă.
            </li>
          </ul>
          <p>
            Pompa cu insulină este o alternativă la multiplele injecții cu
            insulină, realizate cu seringi sterile, zilnic, și face posibilă
            terapia intensivă cu insulină, când e utilizată împreună cu
            monitorizarea glicemiei și cu cea a carbohidraților.{" "}
          </p>
          <p>
            Pompa cu insulină permite înlocuirea insulinei cu durată lungă de
            acțiune (pentru necesarul de bază) cu o infuzie continuă de insulină
            (în cantități mici) cu durată de acțiune scurtă dar rapidă. În acest
            fel furnizarea de insulină în corpul pacienților se apropie mult de
            modul în care este produsa fiziologic insulina.
          </p>
          <p>
            Pompa cu insulină livrează un singur tip de insulină, și anume cea
            rapidă, în două moduri:
          </p>
          <ul>
            <li>
              o doză „bolus” pentru a acoperi nevoia ceva mai mare de insulină
              asociată cu luarea mesei sau pentru a reduce rapid o glicemie
              mare.
            </li>
            <li>
              o doză „bazală”, care este pompată continuu într-o proporție
              ajustabilă, pentru a livra necesarul continuu de insulină dintre
              mese și din timpul nopții.
            </li>
          </ul>
          <p>Avantajele pompei de insulina:</p>
          <ul>
            <li>ofera libertate mai mare in functie de orarul meselor ;</li>
            <li>
              se utilizeaza insulina cu actiune rapida care mimeaza ritmul
              fiziologic de eliberare a insulinei ;
            </li>
            <li>reinnoirea canulei se face o data la cateva zile.</li>
          </ul>
          <p>Dezavantajele pompei de insulina:</p>
          <ul>
            <li>
              se stabileste mai greu doza bolus cu risc de dezvoltare a
              cetoacidozei diabetice daca utilizatorul nu primeste suficienta
              insulina cu actiune rapida mai multe ore, ex : daca se descarca
              bateria, daca rezervorul de insulina este gol, daca se scurge
              insulina din tuburi afara sau daca canula se curbeaza in organism
              impiedicand pomparea ;
            </li>
            <li>
              de aceea este necesara monitorizarea mai frecventa a glicemiei
              pentru evaluarea eficacitatii pompei.
            </li>
          </ul>
        </li>
        <li>
          <b>Administrarea iv:</b> se utilizeaza doar în cazuri de urgențe :
          comă hiperglicemică, cetoacidozică sau hiperosmolară ; sau în cazuri
          operatorii;
        </li>
        <li>
          <b>Insulina sub forma de patch:</b> dispozitiv mic, de plastic, poate
          elibera insulina pe o perioada de pana la trei zile si modul de
          administrare este in bolus o data pe zi ceea ce inseamna ca se
          completeaza cu insulina de lunga durata.
        </li>
      </ul>

      <div className="subtitlu">Principiile insulinoterapiei</div>

      <ul>
        <li>
          Tratamentul cu insulină se face de obicei prin injecţii subcutanate cu
          ace de 1 – 1,5 cm lungime în una din următoarele zone: peretele
          abdominal, regiunea deltoidiană a braţelor, coapse, fese,
          periombilical. Locul injectării trebuie în permanenţă schimbat cu 2 –
          3 cm pentru a evita apariţia lipodistrofiei prin menţinerea în aceeaşi
          zonă a administrării. Când se schimbă zona anatomică trebuie avută în
          vedere şi viteza de absorbţie a insulinei în noua zonă. Cu viteza cea
          mai lentă este zona deltoidiană, iar cea mai rapidă este zona
          abdominală
        </li>
        <li>
          Administrarea insulinei se face înaintea meselor cu 15 – 30 min pentru
          cele rapide, cu 45 min pentru cele medii şi cu 60 min pentru cele
          lente. Alegerea preparatului, doza și frecvența inj. se stabilesc în
          funcție de caracteristicile diabetului, greutatea corporală,
          alimentație, acitvitate fizică și existența altor afecțiuni sau a
          sarcinii.
        </li>
        <li>
          Fiecare pacient peste 12 ani trebuie să ştie sigur să-şi facă
          injecţia. Injectarea trebuie făcută stric subcutan la o adâncime de 1
          – 1,5 cm. Administrarea intradermică va întârzia absorbţia.
        </li>
        <li>
          Injectarea insulinei trebuie să nu fie dureroasă. Durerea apare când
          au rămas urme de alcool pe piele înaintea injectării sau injectarea se
          face intradermic şi nu subcutan.
        </li>
        <li>
          Regimurile insulinice:
          <p>
            Pentru cel mai bun control al glicemiei se utilizeaza insulina
            bazală concomitent cea utilizata in timpul meselor, aceasta
            administrare mimeaza ritmul fiziologic de eliberare a insulinei. Un
            astfel de regim necesita administrarea insulinei cu actiune rapida
            si insulina cu actiune intermediara sau de lunga durata. Acest lucru
            semnifica administrarea a 4-5 doze de insulina pe zi sub forma de
            infuzie continua subcunatata controlata de o pompa de insulina;{" "}
          </p>
          <p>
            La o astfel de administrare avantajul este ca pacientul nu trebuie
            sa aiba un orar foarte precis al meselor, dar au si dezavantajul ca
            necesita multe administrari pe zi fara pompa ceea ce este destul de
            greu pentru ei.
          </p>
          <p>
            Regimul cu doua administrari pe zi utilizeaza insuline preamestecate
            compuse din insuline cu actiune de scurta durata si cele cu durata
            intermediara. Se administreaza cu 30 minute inainte de masa in timp
            ce amestecurile cu analogi se pot administra si imediat dupa mese.
            Aceste regimuri s-ar putea sa nu fie suficiente pentru mentinerea
            controlului DZ tip I, in majoritatea cazurilor trebuie adaugate si
            insuline cu actiune rapida.
          </p>
        </li>
        <li>
          Metode de conservare a insulinei:
          <p>
            Fiolele nedesfacute sau penurile nefolosite se pastreaza la frigider
            si ferite de lumina; Fiolele desfacute sunt stabile 4-6 saptamani;
            Cand se folosesc penuri acestea nu se pastreaza la frigider deoarece
            adminstrarea rece a insulinei va determina durere si absorbtie
            redusa.
          </p>
        </li>
      </ul>

      <div className="subtitlu">Indicații și reacții adverse:</div>
      <p>Insulina este indicată ca și terapie în:</p>

      <ul>
        <li>
          diabet zaharat de tip 1 (motiv pentru care mai este numit și diabet
          zaharat insulino dependent)
        </li>
        <li>
          diabet zaharat gestațional (antidiabeticele orale nu sunt suficient de
          sigure pentru făt)
        </li>
        <li>urgențe diabetice (comă hiperosmolară)</li>
        <li>
          diabet zaharat de tip 2 care nu mai poate fi controlat prin
          alimentație / antidiabetice orale
        </li>
      </ul>

      <p>Reacții adverse:</p>
      <ul>
        <li>
          hipoglicemie (dar care nu este la fel de intensă precum în
          supradozajul cu antidiabetice orale)
        </li>
        <li>
          lipodistrofie (schimbarea aspectului la nivelul zonei injectate) –
          este necesar ca locul injectării sp fie schimbat permanent, nu doar
          pentru că astfel se evită aspectul neplăcut, ci și pentru că în timp,
          zona respectivă poate prezenta modificări ale absorbției locale a
          insulinei
        </li>
        <li>durere la locul injectării</li>
        <li>insulino-rezistență</li>
        <li>reacții alergice (rare)</li>
      </ul>

      <div className="subtitlu"></div>
      <div className="subtitlu"></div>
      <div className="subtitlu"></div>
      <div className="subtitlu"></div>
      <div className="subtitlu"></div>
    </>
  );
};

export default Insulinoterapia;
