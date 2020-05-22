import React, { useState } from "react";
import Button from "./Button";
import "./styleForm.css";
import Select from "react-select";

const Form = ({ initialValue, onSubmit, buttonName }) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    const newValue = [...value];
    const index = newValue.findIndex((value) => value.name === e.target.name);
    newValue[index] = { ...newValue[index], value: e.target.value };
    setValue(newValue);
  };

  const handleSelectChange = (selected) => {
    if (!selected) return;
    const newValue = [...value];
    const index = newValue.findIndex((value) => value.name === selected.name);
    newValue[index] = { ...newValue[index], value: selected.value };
    setValue(newValue);
  };

  const formHandler = (e) => {
    e.preventDefault();
    const newObject = {};
    value.forEach((item) => {
      newObject[item.name] = item.value;
    });
    onSubmit(newObject);
    setValue(initialValue)
  };
  return (
    <>
      <form onSubmit={formHandler}>
        {value.map((item) =>
          item.type !== "select" ? (
            <div key={item.name} className="fields">
              <input
                required
                value={item.value}
                type={item.type}
                onChange={onChange}
                name={item.name}
                placeholder={item.placeholder || ""}
              ></input>
            </div>
          ) : (
            <div key={item.name} className="fields">
              <Select
                placeholder={item.placeholder}
                name={item.name}
                options={item.value}
                onChange={handleSelectChange}
                isClearable
                isSearchable
              />
            </div>
          )
        )}
        <div className="fieldButton">
          <Button
            type={"submit"}
            buttonName={buttonName}
            styleButton={"center"}
          />
        </div>
      </form>
    </>
  );
};

export default Form;
