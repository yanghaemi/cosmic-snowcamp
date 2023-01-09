import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Menu = (props) => {
  let [btnColor1, setBtnColor1] = useState("primary");
  let [btnColor2, setBtnColor2] = useState("primary");
  let [btnColor3, setBtnColor3] = useState("primary");

  function setBtn1() {
    let copy = "danger";
    setBtnColor1(copy);
  }
  function setBtn2() {
    let copy = "danger";
    setBtnColor2(copy);
  }
  function setBtn3() {
    let copy = "danger";
    setBtnColor3(copy);
  }

  return (
    <>
      <Button onClick={setBtn1} variant={btnColor1} className="mg-5">
        작가 소개
      </Button>
      <Button onClick={setBtn2} variant={btnColor2} className="mg-5">
        글
      </Button>
      <Button onClick={setBtn3} variant={btnColor3} className="mg-5">
        작품
      </Button>
    </>
  );
};

export default Menu;
