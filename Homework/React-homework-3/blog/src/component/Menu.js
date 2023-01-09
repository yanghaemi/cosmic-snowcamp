import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Menu = (props) => {
  let [btnColor1, setBtnColor1] = useState(["danger", "primary", "primary"]);

  function setBtn(index) {
    let copy = ["primary", "primary", "primary"];
    copy[index] = "danger";
    setBtnColor1(copy);
  }

  return (
    <>
      <Button
        onClick={() => {
          setBtn(0);
        }}
        variant={btnColor1[0]}
        className="mg-5"
      >
        작가 소개
      </Button>
      <Button
        onClick={() => {
          setBtn(1);
        }}
        variant={btnColor1[1]}
        className="mg-5"
      >
        글
      </Button>
      <Button
        onClick={() => {
          setBtn(2);
        }}
        variant={btnColor1[2]}
        className="mg-5"
      >
        작품
      </Button>
    </>
  );
};

export default Menu;
