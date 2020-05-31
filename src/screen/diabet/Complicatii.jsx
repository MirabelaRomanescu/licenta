import React from "react";
import "./styleDiabet.css";
import imagine from "../../assets/complicatii.png";

const Complicatii = () => {
  return (
    <>
      <img className="imagineHeader" src={imagine} alt=""/>
      <div className="titleSeparationLine"></div>
      <p>
        În timp, diabetul îți poate afecta orice parte a corpului. Vestea bună
        este că poți preveni sau întârzia multe din complicațiile date de
        această patologie, având grijă de tine. Este nevoie de menținerea
        nivelului de zahăr din sânge cât mai aproape de cel optim, consumul de
        alimente sănătoase, practicarea unei activități fizice regulate,
        menținerea tensiunii arteriale și a colesterolului la nivelurile pe care
        le stabilește medicul tău, luarea medicamentelor (dacă este nevoie) și
        efectuarea de controale regulate.
      </p>
      <div className="subtitlu">Afectare cardiacă</div>
      <p>
        Bolile de inimă sunt principala cauză de deces în rândul persoanelor cu
        diabet. Ai două ori mai multe șanse să dobândești afecțiuni ale inimii
        sau un accident vascular cerebral decât cineva care nu are diabet și
        acest lucru s-ar putea întâmpla chiar la o vârstă mai fragedă.
      </p>
      <p>
        În timp, nivelul ridicat de glucide din sânge poate deteriora vasele de
        sânge, precum și nervii care îți controlează inima și vasele de sânge.
        De asemenea, de cele mai multe ori este mai probabil să ai și alte
        afecțiuni, pe lângă diabet, care îți ridică riscul pentru boli de inimă,
        precum:
      </p>
      <ul >
        <li>
          <b>Hipertensiunea arterială</b> crește forța sângelui prin arterele
          tale și poate deteriora pereții arterei.
        </li>
        <li>
          Prea mult <b>colesterol LDL („rău”)</b> din fluxul sanguin se poate
          acumula pe pereții deteriorați ai arterei și poate forma o “placă”. În
          timp, placa poate provoca ateroscleroză (întărirea arterelor) și poate
          bloca arterele, oprind fluxul de sânge către inimă (atac de cord) sau
          creier (accident vascular cerebral).
        </li>
        <li>
          Se consideră că un nivel ridicat de <b>trigliceride </b>(un tip de
          grăsime din sângele tău) corelat cu un nivel scăzut de{" "}
          <b>colesterol HDL („bun”) </b>
          de asemenea contribuie la întărirea arterelor.
        </li>
      </ul>
      <p>
        Niciuna dintre aceste afecțiuni nu prezintă simptome. Însă medicul tău
        îți poate face un simplu test de sânge pentru a verifica acești
        parametrii.
      </p>
      <div className="paragrafEvidentiat">
        <p className="titluEvidentiat">Cum poți preveni?</p>
        <p>
          Țintește a avea o greutate optimă, combinând alimentația sănătoasă cu
          activitatea fizică regulată. Mănâncă mai multe fructe și legume
          proaspete, proteine slabe și cereale integrale și mai puține alimente
          procesate (cum ar fi chipsuri, dulciuri, fast food). Bea mai multă
          apă, mai puține băuturi zaharoase și mai puțin alcool. Activitatea
          fizică îți face corpul mai responsiv la insulină, fapt care ajută la
          gestionarea diabetului. De asemenea, este important să renunți la
          fumat sau să nu te apuci, precum și să îți monitorizezi regulat
          nivelul colesterolului, tensiunea arterială și hemoglobina glicată.
        </p>
      </div>

      <div className="subtitlu">Afectare renală </div>
      <p>
        Glicemia mare dăunează celulelor și vaselor de sânge din rinichii tăi,
        astfel încât acestea nu mai pot filtra deșeurile la fel de bine. Această
        afecțiune se numește boală renală cronică și aproximativ 1 din 3 adulți
        cu diabet suferă de ea. De obicei, boala renală cronică se agravează în
        timp și poate duce la insuficiență renală.{" "}
      </p>
      <p>
        Dacă rinichii tăi se prăbușesc, vei avea nevoie de dializă regulată (un
        tratament care filtrează subtanțele necesare a fi eliminate din sângele
        tău) sau de un transplant de rinichi. Boala cronică de rinichi nu are
        semne sau simptome la început, așa că este important să îți verifici
        periodic rinichii.
      </p>
      <div className="paragrafEvidentiat">
        <div className="titluEvidentiat">Cum poți preveni?</div>
        <p>
          Menținând valorile tensionale și ale glicemiei în intervalele optime
          și urmând cu strictețe tratamentul prescris de medic.
        </p>
      </div>

      <div className="subtitlu">Afectarea nervilor</div>
      <p>
        În timp, glicemia mare poate provoca neuropatie (leziuni nervoase) în
        întregul corp. Un tip de neuropatie afectează nervii din brațe și
        picioare. Simptomele pot varia de la o amorțeală ușoară până la durere,
        care face dificilă desfășurarea activităților normale. Celălalt tip de
        neuropatie poate afecta inima, stomacul și alte organe din corp.
      </p>
      <p>
        Mai bine de jumătate din persoanele cu diabet au probleme nervoase, dar
        nu toate au simptome. Cu cât aveți diabet de mai mult timp, cu atât este
        mai probabil să aveți leziuni nervoase.
      </p>
      <div className="paragrafEvidentiat">
        <div className="titluEvidentiat">Cum poți preveni?</div>
        <p>
          Prin activitate fizică regulată. Menținând valorile tensionale și ale
          glicemiei în intervalele optime și limitând consumul de alcool și
          tutun.
        </p>
      </div>

      <div className="subtitlu">Afectare digestivă</div>
      <p>
        Gastropareza este o afecțiune în care stomacul nu se golește normal din
        cauza leziunilor nervoase de la acel nivel. Acest lucru poate face ca
        glicemia să crească brusc atunci când mâncarea părăsește în sfârșit
        stomacul și ajunge în intestin.{" "}
      </p>
      <p>
        Nivelurile glicemiei tale pot fi greu de prevăzut și astfel pot face
        diabetul mai greu de gestionat. Simptomele gastroparezei pot include
        arsuri la stomac, greață, vărsături, senzație rapidă de sațietate,
        pierderea în greutate, pierderea poftei de mâncare și balonare
        abdominală.
      </p>
      <div className="paragrafEvidentiat">
        <div className="titluEvidentiat">Cum poți preveni?</div>
        <p>
          Menține-ți glicemia cât mai aproape de nivelurile țintă. Glicemia mare
          poate încetini digestia chiar mai mult. Mănâncă mese mai mici, mai
          frecvente și evită alimentele bogate în grăsimi (care pot încetini
          digestia în continuare) și fibre (care pot fi mai greu de digerat). De
          asemenea, medicul tău îți poate prescrie medicamente care ajută la
          digerarea alimentelor mai ușor și ajută la controlul greaței.
        </p>
      </div>

      <div className="subtitlu">Afectare genito-urinară</div>
      <p>
        Multe persoane cu leziuni nervoase cauzate de diabet au probleme
        sexuale. Barbatii pot avea probleme in mentinerea erecției si în
        ejaculare; iar femeile pot avea probleme cu excitarea și lubrifierea
        vaginală. În plus, atât bărbații, cât și femeile cu diabet sunt mai
        predispuși la infecții ale tractului urinar și au probleme ale vezicii
        urinare.
      </p>
      <div className="paragrafEvidentiat">
        <div className="titluEvidentiat">Cum poți preveni?</div>
        <p>
          Prin măsuri generale, precum activitate fizică regulată, menținând
          valorile tensionale și ale glicemiei în intervalele optime și limitând
          consumul de alcool și tutun. De asemenea, se recomandă un consum optim
          de lichide. Întreabă medicul despre alte opțiuni eistente dacă
          medicamentul tău pentru tensiune arterială provoacă efecte secundare
          sexuale.
        </p>
      </div>

      <div className="subtitlu">Afectarea membrelor</div>
      <p>
        Leziunile nervoase pot reduce capacitatea de a simți durere, căldură sau
        frig. Dacă nu simți durere în picioare, este posibil să nu observi o
        tăietură, o bășică sau o umflătură, sau faptul că apa este prea caldă.
        Problemele mici pot deveni grave dacă nu sunt tratate din timp.{" "}
      </p>
      <p>
        Circulația slabă (o altă complicație a diabetului), împreună cu
        leziunile nervoase generează riscul de a dezvolta un ulcer al piciorului
        (o durere sau o rană) care s-ar putea infecta și care nu s-ar vindeca
        corespunzător. Dacă infecția nu se reușește a fi tratată, tratamentul se
        reduce la amputare (îndepărtarea prin intervenție chirurgicală) a
        degetului piciorului, a labei piciorului sau o parte a piciorului pentru
        a preveni răspândirea infecției.
      </p>
      <div className="paragrafEvidentiat">
        <div className="titluEvidentiat">Cum poți preveni?</div>
        <p>
          Verifica-ți picioarele în fiecare zi de tăieturi, roșeață, umflături,
          bătături, calusuri sau bășici. Spălă-ți picioarele în apă caldă - nu
          fierbinte, și uscă-le bine. Taie-ți unghiile corect și poartă pantofi
          care se potrivesc bine. Nu merge niciodată desculț. Poartă întotdeauna
          încălțăminte, chiar și în interior, pentru a-ți proteja picioarele.
          Ridică picioarele în sus când stai și masează-ți degetele de la
          picioare pentru câteva minute.
        </p>
      </div>

      <div className="subtitlu">Afectare bucală</div>
      <p>
        Glicemia mare crește nivelul de zahăr din saliva ta. Zahărul hrănește
        bacteriile din gură, iar când bacteriile sunt combinate cu alimente,
        creează placa, un film lipicios care poate provoca cariile dinților.
        Persoanele cu diabet sunt mai predispuse la afecțiuni gingivale, ceea ce
        poate duce la pierderea dinților.{" "}
      </p>
      <p>
        Afecțiunile gingivale pot de asemenea să crească nivelul de zahăr din
        sânge și să facă mai greu de gestionat diabetul. Tratarea acetora poate
        să scadă glicemia în timp și poate reduce șansele altor probleme de
        diabet, cum ar fi boli de inimă și insuficiență renală.
      </p>
      <div className="paragrafEvidentiat">
        <div className="titluEvidentiat">Cum poți preveni?</div>
        <p>
          Periază-te pe dinții cel puțin de două ori pe zi și folosește ața
          dentară o dată pe zi. Dacă porți proteze, îndepărtează-le și curăță-le
          zilnic. Anunță medicul stomatolog dacă proteza ta îți provoca dureri.
          Fă controale stomatologice periodice și anunță medicul dentist că ai
          diabet. Încearcă să te oprești din fumat sau nu te apuca de fumat.
        </p>
      </div>

      <div className="subtitlu">Afectare auditivă</div>
      <p>
        Pierderea auzului este de două ori mai frecventă la persoanele care au
        diabet decât la persoanele care nu au. În timp, nivelurile ridicate de
        zahăr din sânge pot deteriora vasele mici de sânge și nervii din urechea
        internă. Acest lucru vă poate afecta de asemenea echilibrul. Pierderea
        auzului se întâmplă adesea treptat, așa că este posibil să nu știți că
        aveți probleme de auz.
      </p>
      <p>
        <p>
          Semnele pe care s-ar putea să le ai care indica pierderi de auz
          includ:
        </p>
        <ul>
          <li>
            Probleme de auz în locuri zgomotoase, cum ar fi restaurante
            aglomerate
          </li>
          <li>Gândul că ceilalți mormăie când vorbesc</li>
          <li>Ceri des oamenilor să se repete</li>
          <li>
            Probleme în urmărirea conversațiilor cu mai mult de două persoane
          </li>
          <li>
            Necesitatea de a ridica volumul la TV /radio la niveluri prea
            puternice pentru alte persoane
          </li>
        </ul>
      </p>
      <div className="paragrafEvidentiat">
        <div className="titluEvidentiat">Cum poți preveni?</div>
        <p>
          Mergi la un consult ORL în fiecare an. Evită alte cauze ale pierderii
          auzului, incluzând fumatul și zgomotele puternice. Întreabă-ți medicul
          dacă medicamentele pe care le iei îți pot deteriora auzul și ce alte
          opțiuni sunt disponibile. De asemenea întreabă medicul dacă crede că
          ai nevoie să consulți un audiolog (specialist în hipoacuzie).
        </p>
      </div>

      <div className="subtitlu">Afectare vizuală</div>
      <p>
        Retinopatia diabetică este o complicație foarte frecventă a diabetului
        și este principala cauză a orbirii la adulții americani. În timp,
        nivelurile ridicate de zahăr din sânge și hipertensiunea arterială pot
        deteriora vasele mici de sânge din retină (stratul sensibil la lumină
        din spatele globului ocular). De obicei ambii ochi sunt afectați.
        Persoanele cu diabet sunt, de asemenea, mai susceptibile să dezvolte
        cataractă (înnegrirea lentilei) și glaucom (un grup de boli care
        afectează nervul optic).{" "}
      </p>
      <div className="paragrafEvidentiat">
        <div className="titluEvidentiat">Cum poți preveni?</div>
        <p>
          Mănâncă mai multe fructe și legume proaspete, în special verdeață,
          precum spanac, kale și varză. Mănâncă pește bogat în acizi grași
          omega-3, cum ar fi somonul și tonul. Ia medicamente conform
          prescripțiilor medicului, chiar dacă te simți bine. Mergi la
          oftalmolog pentru un examen de fund de ochi cel puțin o dată pe an -
          medicul obișnuit nu va putea detecta probleme oculare. Este posibil să
          nu aveți niciun simptom până când nu începeți să vă pierdeți vederea,
          așa că sunt necesare examene oculare regulate. Cu cât sunt găsite mai
          rapid aceste probleme oculare, cu atât tratamentul este mai
          promițător.
        </p>
        <p>
          Nu aștepta până la următoarea programare oftalmică dacă ai unul dintre
          aceste simptome, ci mergi imediat la medic: puncte negre în câmpul
          vizual, pierderea privirii înspre extremitățile ochiului, halouri de
          lumină, puncte luminoase.
        </p>
      </div>

      <div className="subtitlu">Afectare mentală</div>
      <p>
        Problemele de sănătate mintală nerecunoscute și netratate pot face
        diabetul mai greu de gestionat. Dar mulți nu primesc ajutorul de care au
        nevoie. Probleme precum depresia sunt mult mai frecvente la persoanele
        cu diabet, dar doar 25% până la 50% sunt diagnosticate și tratate.
        Stresul este o parte din viață, dar dacă te simți stresat, este posibil
        să nu ai grijă la fel de bine de tine și de diabetul tău.
      </p>
      <p>
        O altă problemă foarte frecventă este stresul diabeticului - sentimentul
        descurajant, frustrant sau oboseala de a face față tratamentului și
        măsurilor zilnice. Acest lucru te poate arunca în obiceiuri nesănătoase,
        cum ar fi consumul de alimente nesănătoase sau săritul peste
        activitățile fizice.
      </p>
      <div className="paragrafEvidentiat">
        <div className="titluEvidentiat">Cum poți preveni?</div>
        <p>
          Dacă crezi că poți avea depresie, contactează imediat medicul. Cu cât
          primești mai repede tratament, cu atât mai bine pentru tine, calitatea
          vieții tale și diabetul tău. Cere medicului tău să îți recomande un
          consilier de sănătate mintală, specializat în afecțiuni cronice de
          sănătate. Alătură-te unui grup de asistență pentru diabet, astfel
          încât să poți împărtăși gândurile și sentimentele tale cu persoane
          care au aceleași preocupări.
        </p>
      </div>
    </>
  );
};

export default Complicatii;
