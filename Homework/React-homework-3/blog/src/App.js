import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Product from './Product';
import NotFound from './NotFound';
import { useState } from 'react';
import "./App.css";

class Modal2 extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>안녕</div>
    )
  }
}

const App = ()=>{

  let [title, setTitle] = useState(["해찬","제노"]);

  return(
    
      <div className='App'>
        <div className="header">
           <button className="menu-bnt">⏩</button>
           <h3 className='title'>brunch</h3>
           <button className="search-bnt">🔍</button>
         </div>
         <div className='profile'>
           <strong className='name'>양해미</strong>
           <a className='job'>CEO</a>
           <div className='num'>
             <div>
               <a>구독자</a>
               <a className='count'>825</a>
             </div>
             <div>
               <a>관심작가</a>
               <a className='count'>127</a>
             </div>
           </div>
         </div>
         {
            title.map(function(a, i){
              return <div className='list'>
                <img src='data:image/jpeg;base64,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'></img>
                <h4>{title[i]}</h4>
                <p>상세내용</p>
                </div>
            })
          }
          
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path='/product/*' element={<Product/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    
  )
}

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
