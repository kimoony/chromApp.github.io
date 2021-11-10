const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
// const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

TODOS_KEY = "toDos"

// todo 값들을 배열에 담아주기 위해 빈 배열을 만들어준다.
// const를 let으로 바꿔준다.  왜? 업데이트가 가능하도록,,
let toDos = [];

function saveToDos() {
  // 로컬스토리지에 toDos 를 넣어준다.
  // 예를들어 [a, b, c] 를 저장할 때 아래 코드와 같이 저장한다면
  localStorage.setItem(TODOS_KEY, toDos);
  // 로컬호스트에 value는 Array가 빠진 'a,b,c' 로 저장된다. 
  // 그런데 JSON.stringify(toDos)를 사용하면
  // '["a","b","c"]' 이렇게 Array 형태를 가진 String으로 저장된다.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  // console.log(e)를 보면
  // event > target > parentElement에 li요소를 확인할 수 있다.
  const li = e.target.parentElement;
  // 삭제 버튼을 클릭하면 li가 없어져야 하기 때문에 remove 해준다.
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos()
}

function paintToDo(newToDo) {
  // list를 만들기 위해 li태그와 span태그를 만들어준다.
  const li = document.createElement('li');
  li.id = newToDo.id;
  const span = document.createElement('span');
  // span에 todo의 값이 들어가기 때문에
  // innerText로 newToDo(toDoInput.value)를 넣어준다.
  span.innerText = newToDo.text;
  const btn = document.createElement('button');
  btn.innerText = '❌';
  // ❌ 클릭 시 이벤트와 deleteToDo함수가 실행하도록..
  btn.addEventListener('click', deleteToDo)
  // span과 button 태그를 부모요소인 li에 붙여준다.
  li.appendChild(span);
  li.appendChild(btn);
  // li태그를 부모요소인 toDoList에 붙여준다.
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault()
  // input의 value를 새로운 변수(newToDo)에 복사하는 것
  const newToDo = toDoInput.value;
  // 이후 value가 ''로 비워져도 위에 newToDo에 영향을 주지 않는다.
  toDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now()
  }
  // newToDoObj를 담아준다.
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  // toDoInput.value를 저장하는 함수 실행
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null) {
  // JSON.parse 는 String을 자바스크립트가 이해할 수 있는 Array로 바꿔준다.
  const parsedToDos = JSON.parse(savedToDos);
  // 새로고침하고 todo를 다시 입력하면 로컬스토리지에 덮어써지는데 기존 로컬스토리지에 추가하기 위해서
  toDos = parsedToDos;
  // forEach - Array에 있는 각가의 item 에 대해 function을 실행해준다.
  // parsedToDos.forEach((item) => console.log('hi', item))
  // newToDo, x버튼 등 목록을 가지고 와야하는데 어느것 하나만 가지고 오는 것이 아닌
  // paintToDo 함수 자체를 가지고 오면 된다.
  parsedToDos.forEach(paintToDo)
  // parsedToDos.forEach()는 paintToDo를 기본적으로 실행한다.
}

