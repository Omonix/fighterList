import React from "react";
import { useState } from "react";
import MenuG from "../menuG/MenuG.js";
import MenuW from "../menuW/MenuW.js";

const Header = () => {
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("Man");

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  const genderHandler = () => {
    setGender(gender === "Man" ? "Woman" : "Man");
  };
  return (
    <div className="header">
      <div>
        <input
          type="search"
          value={search}
          onChange={searchHandler}
          placeholder="Search a fighter..."
        />
        <input type="button" value="Search" />
      </div>
      <div className="allMenu">
        <div className="genderList">
          <MenuG options={["Man", "Woman"]} changer={genderHandler} />
        </div>
        <div className="weightList">
          <MenuW
            options={
              gender === "Woman"
                ? [
                    "All",
                    "Strawweight",
                    "Flyweight",
                    "Bantamweight",
                    "Featherweight",
                  ]
                : [
                    "All",
                    "Flyweight",
                    "Bantamweight",
                    "Featherweight",
                    "Lightweight",
                    "Welterweight",
                    "Middleweight",
                    "Light heavyweight",
                    "Heavyweight",
                  ]
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
