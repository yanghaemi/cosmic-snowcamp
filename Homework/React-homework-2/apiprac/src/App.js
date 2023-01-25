import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./Component/SearchBar";

const App = () => {
  let [text, setText] = useState("");
  let [data, setData] = useState([]);
  const URL =
    "http://openapi.foodsafetykorea.go.kr/api/11e17506cbc840b29b83/I2790/json/1/10/DESC_KOR=" +
    text;

  return (
    <>
      <SearchBar
        URL={URL}
        text={text}
        setText={setText}
        data={data}
        setData={setData}
      ></SearchBar>
    </>
  );
};

export default App;
