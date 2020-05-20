import React, { useState } from "react";
import Button from "./Button";
import "./styleForm.css";

const Form = ({ initialValue, onSubmit, buttonName }) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    const newValue = [...value];
    const index = newValue.findIndex((value) => value.name === e.target.name);
    newValue[index] = { ...newValue[index], value: e.target.value };
    setValue(newValue);
  };

  const formHandler = (e) => {
    e.preventDefault();
    const newObject = {};
    value.forEach((item) => {
      newObject[item.name] = item.value;
    });
    onSubmit(newObject);
  };
  return (
    <>
      <form onSubmit={formHandler}>
        {value.map((item) => (
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
        ))}
        <div className="fieldButton">
          <Button type={"submit"} buttonName={buttonName} styleButton={"center"} />
        </div>
      </form>
    </>
  );
};

export default Form;
