import React, { useState } from "react";
import Button from "./Button";
import "./styleForm.css";
import Select from "react-select";

const Form = ({
  initialValue,
  valueTextarea,
  onSubmit,
  buttonName,
  selectValue,
  displayLabel,
  selectIsMultiple = false,
}) => {
  const [value, setValue] = useState(initialValue);
  const [selectedV, setSelectedV] = useState({});
  const [textareaV, setTextareaV] = useState(valueTextarea);
  const onChange = (e) => {
    const newValue = [...value];
    const index = newValue.findIndex((value) => value.name === e.target.name);
    newValue[index] = { ...newValue[index], value: e.target.value };
    setValue(newValue);
  };

  const handleSelectChange = (selected) => {
    if (!selected) return;
    if (selectIsMultiple) {
      const newValue = [];
      let name;
      selected.forEach((item) => {
        newValue.push(item.value);
        name = item.name;
      });
      setSelectedV({ [name]: [...newValue] });
    } else {
      setSelectedV({ [selected.name]: selected.value });
    }
  };

  const handleTextArea = (e) => {
    const newValue = [...textareaV];
    const index = newValue.findIndex((value) => value.name === e.target.name);
    newValue[index] = { ...newValue[index], value: e.target.value };
    setTextareaV(newValue);
  };

  const formHandler = (e) => {
    e.preventDefault();
    let newObject = {};
    value.forEach((item) => {
      newObject[item.name] = item.value;
    });
    let textareaHandled = {};
    if (!!textareaV) {
      textareaV.forEach((item) => {
        textareaHandled[item.name] = item.value;
      });
    }
    newObject = { ...newObject, ...selectedV, ...textareaHandled };
    onSubmit(newObject);
  };
  return (
    <>
      <form onSubmit={formHandler} name="principalForm">
        {value.map((item) => (
          <div key={item.name} className="fields">
            {displayLabel && item.placeholder}
            <input
              required
              value={item.value}
              type={item.type}
              onChange={onChange}
              name={item.name}
              placeholder={!!displayLabel ? "" : item.placeholder}
            ></input>
          </div>
        ))}
        {!!selectValue &&
          selectValue.map((item) => (
            <div key={item.name} className="fields">
              <Select
                placeholder={item.placeholder}
                name={item.name}
                options={item.value}
                onChange={handleSelectChange}
                isClearable
                isSearchable
                isMulti={selectIsMultiple}
              />
            </div>
          ))}
        {!!textareaV &&
          textareaV.map((item) => (
            <textarea
              value={item.value}
              key={item.name}
              placeholder={item.placeholder}
              name={item.name}
              cols={item.cols}
              rows={item.rows}
              wrap={item.wrap}
              onChange={handleTextArea}
            ></textarea>
          ))}
        <div className="fieldButton">
          <Button type={"submit"} buttonName={buttonName} />
        </div>
      </form>
    </>
  );
};

export default Form;
