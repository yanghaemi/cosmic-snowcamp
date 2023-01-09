import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Profile = (props) => {
  let tagList = props.tagList;
  let tags = tagList.map((tag, i) => {
    return <Tag tagName={tag}></Tag>;
  });
  return (
    <div>
      <p>소개</p>
      <p>{props.introduce}</p>
      {tags}
      <p>웹사이트</p>
      <Tag webSite={props.webSite} tagName="f"></Tag>
    </div>
  );
};

const Tag = (props) => {
  return (
    <a href={props.webSite}>
      <Button style={{ borderRadius: "999px" }} variant="outline-secondary">
        {props.tagName}
      </Button>
    </a>
  );
};
export default Profile;
