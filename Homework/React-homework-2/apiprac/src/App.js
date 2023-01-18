import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Data from "./Component/Data";
import SearchBar from "./Component/SearchBar";
import Header from "./Component/Header";

const App = () => {
  const food_baseURL = `http://openapi.foodsafetykorea.go.kr/api/sample/I2790/xml/1/5`;

  return (
    <>
      <Header></Header>
      <SearchBar></SearchBar>
      <Data food_baseURL={food_baseURL} />
    </>
  );
};

export default App;
