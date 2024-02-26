import React from "react";
import { useState } from "react";
import Menu from "../menu/Menu";

const Header = () => {
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value);
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
      <div>
        <div className="genderList">
          <Menu options={["All", "Man", "Woman"]} />
        </div>
        <Menu
          options={
            sexe === "All"
              ? [
                  "All",
                  "Strawweight",
                  "Flyweight",
                  "Bantamweight",
                  "Featherweight",
                  "Lightweight",
                  "Welterweight",
                  "Middleweight",
                  "Light heavyweight",
                  "Heavyweight",
                ]
              : sexe === "Woman"
              ? [
                  "All",
                  "Strawweight",
                  "Flyweight",
                  "Bantamweight",
                  "Featherweight",
                ]
              : [
                  "all",
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
  );
};

export default Header;
