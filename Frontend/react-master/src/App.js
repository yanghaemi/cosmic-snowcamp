
import './App.css';
import { useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

function App() {

  let [글제목,글제목변경] = useState(['nct 해찬', 'nct 마크', 'nct 제노']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title,setTitle]= useState(0);
  let [입력값, 입력값변경] = useState('');


  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <button onClick={()=>{
        let copy=[...글제목];
        copy.sort();
        글제목변경(copy);
      }
      }>Let's sort</button>
      {
        글제목.map(function(a, i){   //파라미터가 array안에 있던 데이터다, 2번째 파라미터는 0부터 1씩 증가하는 정수
          return <div className='list'>
          <h4 onClick={()=>{setModal(true); setTitle(i)}}>{ 글제목[i] }
            <span onClick={(e)=>{ 
              e.stopPropagation();
              let copy=[...따봉];
              copy[i]+=1;
              따봉변경(copy)}}> 🫰 </span>{따봉[i]}
          </h4>
          <span onClick={()=>{
          //RAM에 저장 그리고 그거 가리키는 화살표만 저장됨

          let copy = [...글제목];
          copy[i] = 'nct 재민';
          글제목변경(copy);
        }}> 뭉 </span>
          <p>2월 17일 발행</p>
          <button onClick={()=>{
            let copy = [...글제목];
            copy.splice(i, 1);
            글제목변경(copy);
          }}>삭제</button>
        </div>
        })
      }
      <input onChange={(e)=>{         
        // e가 onChange 임 뭉.
        입력값변경(e.target.value);
        console.log(입력값)
        }}/>
      <button onClick={(e)=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);

        let copygood = [...따봉];
        copygood.unshift(0);
        따봉변경(copygood);

        console.log(글제목);
      }}>저장</button>

      {
        modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} /> : null
      }
    </div>
  );
}

//모든 변수는 함수 탈출 불가 그래서 props함.


function Modal(props){     //Modal == 컴포넌트
  return(
    <div className="modal">
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세 내용</p>
        <button onClick={()=>{
          props.글제목변경(['nct 재민', 'nct 마크', 'nct 제노']);
          }}>글수정</button>
      </div>
  )
}

export default App;