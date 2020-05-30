import React from "react";
import "./styleShowAlimente.css";

const Alimente = ({ alimente, categorie }) => {
  return (
    <ul className="tableAlimentatie">
      <li>
        <ul className="rowTableAlimentatie headerTableAlimentatie">
          <li className="columnDenumire">Denumire</li>
          <li className="columnKcal100g">Kcal/100g</li>
          <li className="columnDefinitiePortie">Definitie portie</li>
          <li className="columnKcalportie">Kcal/portie</li>
        </ul>
      </li>
      {alimente.map(
        (item,index) =>
          item.categorie === categorie && (
            <li key={index}>
              <ul className="rowTableAlimentatie">
                <li className="columnDenumire">{item.denumire}</li>
                <li className="columnKcal100g">{item.kcal100g}</li>
                <li className="columnDefinitiePortie">
                  {item.definitieportie}
                </li>
                <li className="columnKcalportie">{item.kcalportie}</li>
              </ul>
            </li>
          )
      )}
    </ul>
  );
};

export default Alimente;
