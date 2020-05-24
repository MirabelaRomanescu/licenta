import React, { useState } from "react";
import Button from "./Button";
import "./styleForm.css";
import Select from "react-select";

const Form = ({
  initialValue,
  onSubmit,
  buttonName,
  selectValue,
  displayLabel,
}) => {
  const [value, setValue] = useState(initialValue);
  const [selectedV, setSelectedV] = useState({});

  const onChange = (e) => {
    const newValue = [...value];
    const index = newValue.findIndex((value) => value.name === e.target.name);
    newValue[index] = { ...newValue[index], value: e.target.value };
    setValue(newValue);
  };

  const handleSelectChange = (selected) => {
    if (!selected) return;
    setSelectedV({ [selected.name]: selected.value });
  };

  const formHandler = (e) => {
    e.preventDefault();
    let newObject = {};
    value.forEach((item) => {
      newObject[item.name] = item.value;
    });
    newObject = { ...newObject, ...selectedV };
    onSubmit(newObject);
  };
  return (
    <>
      <form onSubmit={formHandler}>
        {value.map((item) => (
          <div key={item.name} className="fields">
            {displayLabel && item.placeholder}
            <input
              required
              value={item.value}
              type={item.type}
              onChange={onChange}
              name={item.name}
              placeholder={item.placeholder || ""}
            ></input>
          </div>
        ))}
        {!!selectValue
          ? selectValue.map((item) => (
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
            ))
          : ""}
        <div className="fieldButton">
          <Button type={"submit"} buttonName={buttonName} />
        </div>
      </form>
    </>
  );
};

export default Form;
