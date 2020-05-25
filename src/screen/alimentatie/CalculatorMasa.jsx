import React, { useState } from "react";
import Select from "react-select";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import Button from "../../components/Button";

const CalculatorMasa = ({ alimente }) => {
  const [alimentSelect, setAlimentSelect] = useState(null);
  const [modCalcul, setModCalcul] = useState(null);
  const [valAdaugata, setValAdaugata] = useState("");
  const [valCalculata, setValCalculata] = useState({});
  const [eroare, setError] = useState(null);
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
    const newVal = e.target.value;
    setValAdaugata(newVal);
  };
  const Adauga = () => {
    Verificare();
    console.log("Adauga");
  };
  const Total = () => {
    console.log("Total");
  };
  const Verificare = () => {
    if (!alimentSelect && !modCalcul && valAdaugata == "") {
      setError("Te rugam sa completezi datele cerute mai sus !");
      return;
    } else {
      if (!alimentSelect && !modCalcul) {
        setError("Te rugam introdu denumirea si selecteaza modul de calcul!");
        return;
      }
      if (!alimentSelect && valAdaugata === "") {
        setError(
          "Te rugam introdu denumirea si adauga numarul de grame/portii!"
        );
        return;
      }
      if (valAdaugata === "" && !modCalcul) {
        setError(
          "Te rugam selecteaza modul de calcul si adauga numarul de grame/portii !"
        );
        return;
      }
      if (!alimentSelect) {
        setError(
          "Nu ai selectat denumirea! Te rugam sa o selectezi ca sa putem sa iti calculam masa!"
        );
        return;
      }
      if (!modCalcul) {
        setError("Te rugam selecteaza modul de calcul !");
        return;
      }
      if (valAdaugata === "") {
        setError("Te rugam introdu numarul de grame/portii");
        return;
      }
    }
    setError(null);
  };
  return (
    <div>
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
      {!!eroare ? eroare : ""}
      <Button action={Adauga} buttonName={"Adauga"} />
      <Button action={Total} buttonName={"Total"} />
     
    </div>
  );
};

export default CalculatorMasa;
