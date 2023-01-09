import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Menu from "./component/Menu";
import Profile from "./component/Profile";
import Articles from "./component/Articles";
import Header from "./component/Header";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const loadData = () => {
  return ["해미", "영은", "현지", "재식"];
};

const App = () => {
  let name = "양해미",
    job = "아이돌",
    followerNum = 127,
    tagList = loadData();

  let imgPost = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsoxSWPBG6kJuATQ51SUYe4igL0rIO9I29jw&usqp=CAU",
      "https://mblogthumb-phinf.pstatic.net/MjAyMTAyMDRfNjIg/MDAxNjEyNDA4OTk5NDQ4.6UGs399-0EXjIUwwWsYg7o66lDb-MPOVQ-zNDy1Wnnkg.m-WZz0IKKnc5OO2mjY5dOD-0VsfpXg7WVGgds6fKwnIg.JPEG.sunny_side_up12/1612312679152%EF%BC%8D2.jpg?type=w800",
      "https://t1.daumcdn.net/cfile/tistory/2105083B594D065C39",
      "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/12/02/54e29ff8-8079-4c50-84ca-822227161bbc.jpg",
    ],
    title = [
      "고양이 놀아주는 법",
      "고양이 간식 추천",
      "사모예드",
      "NCT-DREAM 캔디",
    ];

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Header
              name={name}
              job={job}
              followerNum={followerNum}
              followingNum={825}
              profileImg={
                "https://images.mypetlife.co.kr/content/uploads/2019/05/09153922/adorable-animal-animal-photography-225406-scaled.jpg"
              }
            ></Header>
            <Menu></Menu>
            {/* Body */}
            <Profile
              introduce={"부자"}
              webSite={"https://facebook.com/javajigi"}
              tagList={tagList}
            ></Profile>
            <Articles imgPost={imgPost} title={title}></Articles>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// export default App;

//    function App() {

//      let [글제목, 글제목변경] = useState(["해찬","제노"]);

//      return (
//        <div className="App">
//          <div className="header">
//            <button className="menu-bnt">⏩</button>
//            <h3 className='title'>brunch</h3>
//            <button className="search-bnt">🔍</button>
//          </div>
//          <div className='profile'>
//            <strong className='name'>양해미</strong>
//            <a className='job'>CEO</a>
//            <div className='num'>
//              <div>
//                <a>구독자</a>
//                <a className='count'>825</a>
//              </div>
//              <div>
//                <a>관심작가</a>
//                <a className='count'>127</a>
//              </div>
//            </div>
//          </div>
//          {
//            글제목.map(function(a, i){
//              return <div className='list'>
//                <img src=''></img>
//                <h4>{글제목[i]}</h4>
//                <p>상세내용</p>
//                </div>
//            })
//          }

//          <BrowserRouter>
//          <Router/>
//          </BrowserRouter>

//          </div>

//      );
//    }

export default App;
