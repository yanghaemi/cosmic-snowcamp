let addToDo = document.getElementById('addToDo');
let inputBox = document.getElementById('inputField');
let toDoList = document.getElementById('toDoList');


addToDo.addEventListener('click', function(){

    let colorChange = document.getElementsByName('color');
    console.log(colorChange);

    var list = document.createElement('div');
    var listDate = document.createElement('div');
    var listContent = document.createElement('div');
    var removeBtn = document.createElement('button');
    
    if(!inputBox.value) alert("내용을 입력해 주세요");
    else{
        listContent.innerText=inputBox.value;   //입력
        listDate.innerText=Date();
        toDoList.style.width="100%";
        list.style.width="100%";
        toDoList.style.padding="10px";
        listDate.style.padding="6px";
        listContent.style.padding="10px";
        listDate.style.borderRadius="5px 5px 0 0";
        removeBtn.innerText="삭제";
        removeBtn.style='color:white';
        removeBtn.style.backgroundColor="#2E9AFE";
        removeBtn.style.float="right";
        removeBtn.style.borderRadius="5px";
        removeBtn.style.border="none";

        if(colorChange[0].checked == true & colorChange[0].value == 'pink'){
            listDate.style.backgroundColor="pink";
        }
        else if(colorChange[1].checked == true & colorChange[1].value == 'grey'){
            listDate.style.backgroundColor="#aaa";
        }
        
        toDoList.appendChild(list); //할 일 리스트창에 자식으로 붙이기
        list.appendChild(listDate);
        list.appendChild(listContent);
        list.appendChild(removeBtn);
        
        removeBtn.addEventListener('click', function(){
            removeBtn.parentNode.removeChild(removeBtn);
            listContent.parentNode.removeChild(listContent);
            listDate.parentNode.removeChild(listDate);
            list.parentNode.removeChild(list);
        })
        inputBox.value="";          //할 일 입력창 초기화
    }
    
})