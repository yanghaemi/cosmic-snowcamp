import "../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function SearchBar(props) {
  return (
    <>
      {/* <--검색창--> */}
      <div className="searchBox">
        <Form.Label htmlFor="inputPassword5">음식 성분</Form.Label>
        <div className="searchBar">
          <ButtonGroup className="me-2 i" aria-label="Second group">
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            ></Form.Control>
            <Button variant="secondary">Search</Button>
          </ButtonGroup>
        </div>
        <Form.Text id="passwordHelpBlock" muted>
          Enter the name of food.
        </Form.Text>
        {/* 검색창 끝 */}
        <Items food_baseURL={props.food_baseURL}></Items>
      </div>
    </>
  );
}

const Items = (props) => {
  let foodList = props.food_baseURL;
  let foods = foodList.map((food, i) => {
    return (
      <>
        <Item foodName={food.DESC_KOR}></Item>
      </>
    );
  });
  return <></>;
};

const Item = (props) => {
  return (
    <>
      <h4>{props.foodName}</h4>
    </>
  );
};

export default SearchBar;
