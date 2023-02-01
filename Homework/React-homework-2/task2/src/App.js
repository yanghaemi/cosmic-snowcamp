import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { axios } from "axios";
import { List } from "./Component/List";
import "./App.css";

function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const URL =
    "http://openapi.foodsafetykorea.go.kr/api/11e17506cbc840b29b83/I2790/json/1/10/DESC_KOR=" +
    text;

  const getData = async () => {
    try {
      setError(null);
      setLoading(true);
      setData([]);
      const res = await axios.get(URL);
      setData(res.data.I2790.row);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <input
                  type="text"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  value={text}
                ></input>
                <button
                  onClick={() => {
                    getData();
                  }}
                ></button>
                <Status loading={loading} error={error} data={data}></Status>
                <List data={data} setData={setData}></List>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const Status = (props) => {
  if (props.loading) return <div className="status">검색 중입니다.</div>;
  if (props.error) return <div className="status">에러가 발생했습니다</div>;
  if (props.data == undefined) return <div>아무 것도 없습니다</div>;
};

export default App;
