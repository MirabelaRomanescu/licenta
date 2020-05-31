import React, { useState } from "react";
import Select from "react-select";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import Button from "../../components/Button";
import "./styleCalculatorMasa.css";

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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nisi
        labore incidunt nulla dicta ipsam vero optio consequatur maiores dolorum
        maxime asperiores, rerum quisquam aliquam quidem eligendi facilis
        suscipit perspiciatis blanditiis deleniti ab tempore facere? Temporibus,
        nesciunt quam dolorum corporis quibusdam harum aut sequi excepturi nisi
        labore pariatur vitae, esse dolor, commodi blanditiis ab vero eveniet ex
        exercitationem nihil culpa.
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nisi
        labore incidunt nulla dicta ipsam vero optio consequatur maiores dolorum
        maxime asperiores, rerum quisquam aliquam quidem eligendi facilis
        suscipit perspiciatis blanditiis deleniti ab tempore facere? Temporibus,
        nesciunt quam dolorum corporis quibusdam harum aut sequi excepturi nisi
        labore pariatur vitae, esse dolor, commodi blanditiis ab vero eveniet ex
        exercitationem nihil culpa.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nisi
        labore incidunt nulla dicta ipsam vero optio consequatur maiores dolorum
        maxime asperiores, rerum quisquam aliquam quidem eligendi facilis
        suscipit perspiciatis blanditiis deleniti ab tempore facere? Temporibus,
        nesciunt quam dolorum corporis quibusdam harum aut sequi excepturi nisi
        labore pariatur vitae, esse dolor, commodi blanditiis ab vero eveniet ex
        exercitationem nihil culpa.
      </p>
    </div>
  );
};

export default CalculatorMasa;
