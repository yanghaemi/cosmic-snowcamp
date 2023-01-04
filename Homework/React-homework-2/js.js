let addToDo = document.getElementById('addToDo');
let inputBox = document.getElementById('inputField');
let toDoList = document.getElementById('toDoList');

addToDo.addEventListener('click', function(){

    let colorChange =document.getElementsByName('color');

    console.log(colorChange);

    var list = document.createElement('div');
    var listContent = document.createElement('div');
    var removeBtn = document.createElement('button');
    var listDate = document.createElement('div');
    if(!inputBox.value) alert("내용을 입력해 주세요");
    else{
        listContent.innerText=inputBox.value;   //입력
        listDate.innerText=Date();
        removeBtn.style.backgroundColor="blue";
        toDoList.style.padding="10px";
        removeBtn.innerText="삭제";
        removeBtn.style.color="white";

        if(colorChange.value === "pink"){
            listDate.style.backgroundColor="pink";
        }
        else if(colorChange.value === "black"){
            listDate.style.backgroundColor="black";
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