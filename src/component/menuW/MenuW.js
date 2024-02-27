import React from "react";
import { useState } from "react";

const Menu = ({ options }) => {
  const option = options;
  const [open, setOpen] = useState(false);
  const [valueDefault, setValueDefault] = useState(option[0]);

  const openUp = () => {
    setOpen(!open);
  };
  const selectioned = (i) => {
    setOpen(false);
    setValueDefault(option[i]);
  };
  return (
    <div>
      <div className="buttonMenu" onClick={openUp}>
        {valueDefault}
      </div>
      {open && (
        <ul className="scrollContainer">
          {option.map((element, index) => {
            return (
              <span key={index}>
                <div className="containerLi">
                  <li
                    className="scrollMenuLi"
                    onClick={() => selectioned(index)}
                  >
                    {element}
                  </li>
                </div>
              </span>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Menu;
