import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import PieChartComponent from "./PieChartComponent";

function SearchBar(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(false);
  const [food, setFood] = useState([]);
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${props.text}/${index}`);
  }, [index]);

  const onReset = () => {
    props.setText("");
    props.setData([]);
  };

  const getData = async () => {
    try {
      setError(null);
      setLoading(true);
      props.setData([]);
      const res = await axios.get(props.URL);
      console.log(res.data.I2790.row);
      props.setData(res.data.I2790.row);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="searchBar">
        <input
          onChange={(e) => {
            props.setText(e.target.value);
            // e.target은 특정 이벤트가 발생하는 태그를 가리킴(=input)
          }}
          value={props.text}
        ></input>
        <button
          onClick={() => {
            getData();
            // onReset();
          }}
        >
          search
        </button>
      </div>
      <Status loading={loading} error={error} data={props.data}></Status>
      <Length data={props.data}></Length>
      {props.data.map(function (a, i) {
        return (
          <>
            <div
              className="hover"
              onClick={() => {
                setStatus(true);
                setFood(a);
                setIndex(i + 1);
              }}
            >
              {a.DESC_KOR}
              <div className="smallFont">{a.MAKER_NAME}</div>
              <div className="smallFont">{a.GROUP_NAME}</div>
            </div>
          </>
        );
      })}

      {status == true ? (
        <PieChartComponent food={food}></PieChartComponent>
      ) : null}
    </>
  );
}

const Length = (props) => {
  return <div className="resultLength">{props.data.length}개의 검색결과</div>;
};

const Status = (props) => {
  if (props.loading) return <div className="status">검색 중입니다.</div>;
  if (props.error) return <div className="status">에러가 발생했습니다</div>;
  if (props.data == undefined) return <div>아무 것도 없습니다</div>;
};

export default SearchBar;
