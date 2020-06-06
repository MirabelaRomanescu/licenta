import React from "react";
import "./styleListaParametrii.css";

const ListaParametrii = ({ data }) => {
  return (
    <>
      <ul className="listaParam">
        <li>
          <span>Parametru masurat</span>
          <span>Valoare si unitate de masura</span>
        </li>
        <li>
          <span>Glicemie</span>
          <span>{!!data && !!data[1] ? `${data[1].value} mg/dl` : "val"} </span>
        </li>
        <li>
          <span>Varsta</span>
          <span>{!!data && !!data[7] ? `${data[7].value} ani` : "val"} </span>
        </li>
        <li>
          <span>Greutate</span>
          <span>{!!data && !!data[2] ? `${data[2].value} kilograme` : "val"} </span>
        </li>
        <li>
          <span>Inaltime</span>
          <span>{!!data && !!data[4] ? `${data[4].value} cm` : "val"} </span>
        </li>
        <li>
          <span>Hemoglobina glicata (HBA1C)</span>
          <span>{!!data && !!data[3] ? `${data[3].value}%` : "val"} </span>
        </li>
        <li>
          <span>Colesterol (Col)</span>
          <span>{!!data && !!data[0] ? `${data[0].value} mg/dl` : "val"} </span>
        </li>
        <li>
          <span>Tensiune arteriala (TA)</span>
          <span>{!!data && !!data[5] ? `${data[5].value} mmHg` : "val"} </span>
        </li>
        <li>
          <span>Trigliceride (TG)</span>
          <span>{!!data && !!data[6] ? `${data[6].value} mg/dl` : "val"} </span>
        </li>
      </ul>
    </>
  );
};

export default ListaParametrii;
