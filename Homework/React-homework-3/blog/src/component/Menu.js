import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  let [btnColor1, setBtnColor1] = useState([
    "dark",
    "outline-dark",
    "outline-dark",
  ]);

  function setBtn(index) {
    let copy = ["outline-dark", "outline-dark", "outline-dark"];
    copy[index] = "dark";
    setBtnColor1(copy);
  }

  return (
    <div>
      <Link to="/Profile">
        <Button
          onClick={() => {
            setBtn(0);
          }}
          variant={btnColor1[0]}
          className="mg-5"
        >
          작가 소개
        </Button>
      </Link>
      <Link to="/Articles">
        <Button
          onClick={() => {
            setBtn(1);
          }}
          variant={btnColor1[1]}
          className="mg-5"
        >
          글
        </Button>
      </Link>
      <Link to="/Articles">
        <Button
          onClick={() => {
            setBtn(2);
          }}
          variant={btnColor1[2]}
          className="mg-5"
        >
          작품
        </Button>
      </Link>
    </div>
  );
};

export default Menu;
