import React, { useState } from "react";
import Select from "react-select";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import Button from "../../components/Button";
import "./styleCalculatorMasa.css";
import imagine from "../../assets/calculator.png";

const CalculatorMasa = ({ alimente }) => {
  const [alimentSelect, setAlimentSelect] = useState(null);
  const [modCalcul, setModCalcul] = useState(null);
  const [valAdaugata, setValAdaugata] = useState("");
  const [valCalculata, setValCalculata] = useState(null);
  const [eroare, setError] = useState(null);
  let total = 0;
  const valueSelect = alimente.map((item) =>
    Object.assign({}, { value: item.denumire, label: item.denumire })
  );

  const onSelect = (selected) => {
    if (!selected) return;
    const index = alimente.findIndex(
      (item) => item.denumire === selected.value
    );
    setAlimentSelect(alimente[index]);
  };

  const onRadioChanged = (e) => {
    setModCalcul(e);
  };

  const onChangeInput = (e) => {
    const newVal = parseInt(e.target.value);
    setValAdaugata(newVal);
  };

  const Adauga = () => {
    const valCalc = {};
    const newValue = [];
    if (Verificare()) {
      valCalc["denumire"] = alimentSelect.denumire;
      modCalcul === "grame"
        ? (valCalc["Kcal"] =
            (alimentSelect.kcal100g * valAdaugata) / 100).toFixed(2)
        : (valCalc["Kcal"] = alimentSelect.kcalportie * valAdaugata).toFixed(2);
      newValue.push(valCalc);
      !!valCalculata
        ? setValCalculata([...valCalculata, ...newValue])
        : setValCalculata(newValue);

      setValAdaugata("");
    }
  };

  const Verificare = () => {
    if (!alimentSelect && !modCalcul && valAdaugata === "") {
      setError("Te rugam sa completezi datele cerute mai sus !");
      return false;
    } else {
      if (!alimentSelect && !modCalcul) {
        setError("Te rugam introdu denumirea si selecteaza modul de calcul!");
        return false;
      }
      if (!alimentSelect && valAdaugata === "") {
        setError(
          "Te rugam introdu denumirea si adauga numarul de grame/portii!"
        );
        return false;
      }
      if (valAdaugata === "" && !modCalcul) {
        setError(
          "Te rugam selecteaza modul de calcul si adauga numarul de grame/portii !"
        );
        return false;
      }
      if (!alimentSelect) {
        setError(
          "Nu ai selectat denumirea! Te rugam sa o selectezi ca sa putem sa iti calculam masa!"
        );
        return false;
      }
      if (!modCalcul) {
        setError("Te rugam selecteaza modul de calcul !");
        return false;
      }
      if (valAdaugata === "") {
        setError("Te rugam introdu numarul de grame/portii");
        return false;
      }
    }
    setError(null);
    return true;
  };
  return (
    <div>
            <img className="imagineHeader" src={imagine} alt=""/>
      <div className="titleSeparationLine"></div>
      <p>
        Indiferent de stilul culinar pe care îl preferi, ar trebui să ți minte
        că o alimentație sănătoasă cuprinde în mare fructe și legume, carne
        slabă și surse de proteine pe bază de plante, mai puțin zahăr adăugat și
        mai puține alimente procesate. Atunci cand ai diabet, este foarte
        important să monitorizezi ceea ce manânci, și sa îți calculezi caloriile
        și conținutul de carbohidrați la fiecare masă. Acest lucru îți permite
        să te simți mai bine fizic și psihic, să îți gestionezi mai bine boala
        și să previi apariția complicațiilor. În acest scop, calculatorul de mai
        jos îți vine in ajutor pentru a vedea câte kilocalorii ar avea cina pe
        care plănuiești sa o prepari, sau câte kilocalorii ai ingerat la masa de
        prânz.
      </p>
      <p>
        Dacă vrei să vezi mai în detaliu nivelul caloric al diverselor produse
        alimentare, aruncă o privire in meniul din porțiunea stanga a ecranului.
        Vei observa la fiecare categorie conținutul energetic in kilocalorii pe
        grame și respectiv pe porție pentru cele mai des întâlnite produse.
      </p>
      <div className="containerCalculator">
        <div className="formularAdaugareAliment">
          <p className="instructiuneFormular">
            1. Tastează denumirea alimentului sau selecteaz-o din listă.
          </p>
          <Select
            className="selectAliment"
            placeholder="Selecteza"
            name={"selectAliment"}
            options={valueSelect}
            onChange={onSelect}
            isClearable
            isSearchable
          />
          <p className="instructiuneFormular">
            2. Selectează modul în care măsori cantitatea de produs
            (grame/porții)
          </p>
          <RadioGroup onChange={onRadioChanged}>
            <RadioButton
              className="styleRadioButton"
              pointColor={"#3DAA8D"}
              rootColor={"#bfbfbf"}
              iconSize={20}
              padding={7}
              value="număr porții"
              children={"Introduc număr portii"}
            />
            <RadioButton
              className="styleRadioButton"
              pointColor={"#3DAA8D"}
              rootColor={"#bfbfbf"}
              iconSize={20}
              padding={7}
              value="grame"
              children={"Introduc număr grame"}
            />
          </RadioGroup>
          <p className="instructiuneFormular">
            3. Adaugă cantitatea dorită, după care apasă butonul "Adaugă"
          </p>
          <form className="addValue" onSubmit={(e)=>e.preventDefault()}>
            <input
              className="inputModCalcul"
              name="valoareAdaugata"
              value={valAdaugata}
              onChange={onChangeInput}
              type="number"
              placeholder={!!modCalcul ? modCalcul : ""}
            />
            <span>
              {!!modCalcul && !!alimentSelect
                ? modCalcul === "grame"
                  ? " grame"
                  : " x " + alimentSelect.definitieportie
                : ""}
            </span>
          </form>

          {!!eroare ? <div className="eroareCalculator">{eroare}</div> : ""}
          <Button action={Adauga} buttonName={"Adauga"} />
        </div>

        {!!valCalculata && (
          <ul className="dimensiuneAfisare">
            <li className="linieTabel linieHeader">
              <span className="afisareDenumire">Denumire aliment</span>
              <span className="AfisareKcal">Kilocalorii continute</span>
            </li>
            {valCalculata.map((item, index) => {
              total += item.Kcal;
              return (
                <li className="linieTabel" key={index}>
                  <span className="afisareDenumire">{item.denumire}</span>
                  <span className="AfisareKcal">{item.Kcal}</span>
                </li>
              );
            })}
            <li className="linieTabel linieTotal">
              <span className="afisareDenumire">Total</span>
              <span className="AfisareKcal">{total}</span>
            </li>
          </ul>
        )}
      </div>
      <p>
        A știi ce să mănânci este o aptitudine care se dobandeste în timp.
        Oriunde te uiți, vezi diverse păreri despre ceea ce este sau nu este bun
        pentru tine. În realitate, tu singur îți poti planifica mesele astfel
        încât sa îți gestionezi bine diabetul, dar și să te bucuri de savoarea
        alimentelor. De preferat ar fi să consulți mai întâi un dietetician, cu
        care să stabilești împreună care ar fi nivelul tău de calorii pe care sa
        nu îl depașești zilnic. Însă determinarea caloriilor de la fiecare masă
        o poți face singur, citind etichetele alimentelor sau folosind un
        calculator al caloriilor, care folosește valori medii din cele
        disponibile în produsele de pe piață.
      </p>
      <p>
        A mânca mai puține calorii nu înseamnă neapărat a mânca mai puține
        alimente. Pentru a putea reduce caloriile fără să mananci mai puțin și
        să te simți infometat, trebuie să inlocuiesti unele alimente cu un
        conținut mai mare caloric cu alimente mai scăzute în calori. În general,
        aceste alimente conțin multă apă și sunt bogate în fibre, ceea ce îți
        aduce în plus și beneficii pentru tranzitul intestinal și aspectul
        pielii.
      </p>
      <p>
        Majoritatea oamenilor încearcă să-și reducă aportul de calorii,
        concentrându-se pe alimente, dar un alt mod de a reduce caloriile poate
        fi să schimbi ceea ce bei. S-ar putea să descoperi că consumi destul de
        multe calorii în băuturile pe care le servesti în fiecare zi.
      </p>
    </div>
  );
};

export default CalculatorMasa;
