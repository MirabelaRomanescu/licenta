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
        Indiferent de stilul culinar pe care il preferi, ar trebui sa ti minte
        ca o alimentatie sanatoasa cuprinde in mare fructe si legume, carne
        slabă și surse de proteine pe bază de plante, mai puțin zahăr adăugat si
        mai puține alimente procesate. Atunci cand ai diabet, este foarte
        important sa monitorizezi ceea ce mananci, si sa iti calculezi caloriile
        si continutul de carbohidrati la fiecare masa. Acest lucru iti permite
        sa te simti mai bine fizic si psihic, sa iti gestionezi mai bine boala
        si sa previ aparitia complicatiilor. In acest scop, calculatorul de mai
        jos iti vine in ajutor pentru a vedea cate kilocalorii ar avea cina pe
        care planuiesti sa o prepari, sau cate kilocalorii ai ingerat la masa de
        pranz.
      </p>
      <p>
        Daca vrei sa vezi mai in detaliu nivelul caloric al diverselor produse
        alimentare, arunca o privire in meniul din portiunea stanga a ecranului.
        Vei observa la fiecare categorie continutul energetic in kilocalorii pe
        grame si respective pe portie pentru cele mai des intalnite produse.
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
            (grame/portii)
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
            3. Adaugă cantitatea dorită și apasă butonul "Adaugă"
          </p>
          <form className="addValue">
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
        A știi ce să mănânci este o aptitudine care se dobandeste in timp.
        Oriunde te uiti, vezi diverse pareri despre ceea ce este sau nu este bun
        pentru tine. In realitate, tu singur iti poti planifica mesele astfel
        incat sa iti gestionezi bine diabetul, dar si sa te bucuri de savoarea
        alimentelor. De preferat ar fi sa consulti mai intai un dietetician, cu
        care sa stabilesti impreuna care ar fi nivelul tau de calorii pe care sa
        nu il depasesti zilnic. Insa determinarea caloriilor de la fiecare masa
        o poti face singur, citind etichetele alimentelor sau folosind un
        calculator al caloriilor, care foloseste valori medii din cele
        disponibile in produsele de pe piata.
      </p>
      <p>
        A mânca mai puține calorii nu înseamnă neapărat a mânca mai puține
        alimente. Pentru a putea reduce caloriile fără să mananci mai puțin și
        să te simti infometat, trebuie să inlocuiesti unele alimente cu un
        conținut mai mare caloric cu alimente mai scăzute în calori. În general,
        aceste alimente conțin multă apă și sunt bogate în fibre, ceea ce iti
        aduce in plus si beneficii pentru tranzitul intestinal si aspectul
        pielii.
      </p>
      <p>
        Majoritatea oamenilor încearcă să-și reducă aportul de calorii,
        concentrându-se pe alimente, dar un alt mod de a reduce caloriile poate
        fi să schimbi ceea ce bei. S-ar putea să descoperi că consumi destul de
        multe calorii în băuturile pe care le servesti în fiecare zi.{" "}
      </p>
    </div>
  );
};

export default CalculatorMasa;
