import React, { useState } from "react";
import Select from "react-select";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import Button from "../../components/Button";

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
        ? (valCalc["Kcal"] = (alimentSelect.kcal100g * valAdaugata) / 100).toFixed(2)
        : (valCalc["Kcal"] = alimentSelect.kcalportie * valAdaugata).toFixed(2);
      newValue.push(valCalc);
      !!valCalculata
        ? setValCalculata([...valCalculata, ...newValue])
        : setValCalculata(newValue);

      setValAdaugata("");
      setAlimentSelect(null);
    }

    console.log("Adauga");
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
      {console.log(valCalculata)}
      <Select
        placeholder="Selecteaza denumirea alimentului"
        name={"selectAliment"}
        options={valueSelect}
        onChange={onSelect}
        isClearable
        isSearchable
      />
      <RadioGroup onChange={onRadioChanged} horizontal>
        <RadioButton
          pointColor={"#3DAA8D"}
          rootColor={"#666666"}
          iconSize={20}
          padding={10}
          value="nr de portii"
          children={"Introduc numar portii"}
        />
        <RadioButton
          pointColor={"#3DAA8D"}
          rootColor={"#666666"}
          iconSize={20}
          padding={10}
          value="grame"
          children={"Introduc numar grame"}
        />
      </RadioGroup>
      <form className="addValue">
        <input
          name="valoareAdaugata"
          value={valAdaugata}
          onChange={onChangeInput}
          type="number"
          placeholder={!!modCalcul ? modCalcul : "Alege modul de calculare"}
        />
        <span>
          {!!modCalcul && !!alimentSelect
            ? modCalcul === "grame"
              ? "grame"
              : alimentSelect.definitieportie
            : ""}
        </span>
      </form>
      {!!alimentSelect ? alimentSelect.denumire : "Nu e selectat inca"}
      {!!eroare ? <div className="eroareCalculator">{eroare}</div> : ""}
      <Button action={Adauga} buttonName={"Adauga"} />
      {!!valCalculata && (
        <ul>
          <li>
            <p>
              <span>Denumire</span> --- <span>Kcal</span>
            </p>
          </li>
          {valCalculata.map((item, index) => {
            total += item.Kcal;
            return (
              <li key={index}>
                <p>
                  <span>{item.denumire}</span> --- <span>{item.Kcal}</span>
                </p>
              </li>
            );
          })}
          <li>
            <span>Total</span> --- <span>{total}</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CalculatorMasa;
