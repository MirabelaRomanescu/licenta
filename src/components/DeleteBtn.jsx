import React from "react";
import "./styleDeleteBtn.css";

const DeleteBtn = ({ action, deleteKey }) => {
  return (
    <div onClick={() => action(deleteKey)} className="deleteBTN">
      x
    </div>
  );
};

export default DeleteBtn;
