import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Menu from "./component/Menu";
import Profile from "./component/Profile";
import Articles from "./component/Articles";
import Header from "./component/Header";
import NotFound from "./component/NotFound";
import React from "react";

const user = {
  name: "양해미",
  job: "아이돌",
  followerNum: 127,
  followingNum: 825,
  tagList: ["해미", "dd", "aaa", "ff식"],
  introduce: "ㅎㅎ",
  webSite: "https://www.youtube.com/watch?v=8do-DV3G7Zs",
  ImgPath:
    "https://images.mypetlife.co.kr/content/uploads/2019/05/09153922/adorable-animal-animal-photography-225406-scaled.jpg",
};

const items = [
  {
    id: 0,
    src: "https://brunch.co.kr/@dailynews/1248",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsoxSWPBG6kJuATQ51SUYe4igL0rIO9I29jw&usqp=CAU",
    title: "고양이 놀아주는 법",
    preview: "집사의 도리",
    createDate: "2023-06-06",
  },
  {
    id: 1,
    src: "https://www.fitpetmall.com/blog/cat-best-snack/",
    imgSrc:
      "https://mblogthumb-phinf.pstatic.net/MjAyMTAyMDRfNjIg/MDAxNjEyNDA4OTk5NDQ4.6UGs399-0EXjIUwwWsYg7o66lDb-MPOVQ-zNDy1Wnnkg.m-WZz0IKKnc5OO2mjY5dOD-0VsfpXg7WVGgds6fKwnIg.JPEG.sunny_side_up12/1612312679152%EF%BC%8D2.jpg?type=w800",
    title: "고양이 간식 추천",
    preview: "집사의 도리 2",
    createDate: "2023-08-02",
  },
  {
    id: 2,
    src: "https://www.youtube.com/watch?v=G_WI2LlFaFk",
    imgSrc: "https://t1.daumcdn.net/cfile/tistory/2105083B594D065C39",
    title: "사모예드",
    preview: "강아지",
    createDate: "2000-04-23",
  },
  {
    id: 3,
    src: "https://www.youtube.com/watch?v=G_WI2LlFaFk",
    imgSrc:
      "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/12/02/54e29ff8-8079-4c50-84ca-822227161bbc.jpg",
    title: "NCT-DREAM 캔디",
    preview: "좋아요",
    createDate: "2003-01-05",
  },
];

const App = () => {
  return (
    <>
      <Header
        name={user.name}
        job={user.job}
        followerNum={user.followerNum}
        followingNum={user.followingNum}
        profileImg={user.ImgPath}
      ></Header>

      <BrowserRouter>
        <div className="App">
          <Menu items={items}></Menu>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Profile
                introduce={user.introduce}
                webSite={user.webSite}
                tagList={user.tagList}
              />
            }
          />
          <Route
            path="/Profile/"
            element={
              <Profile
                introduce={user.introduce}
                webSite={user.webSite}
                tagList={user.tagList}
              />
            }
          ></Route>
          <Route
            path="/Articles/"
            element={
              <div className="posting">
                <Articles items={items} />
              </div>
            }
          ></Route>
          <Route path="/Articles/" element={<Articles items={items} />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
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
