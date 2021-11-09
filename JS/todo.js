const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
// const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const toDos = [];

// function saveToDos() {
//   localStorage.setItem('toDos', JSON.stringify(toDos));
// }

function deleteToDo(e) {
  console.log(e)
  // const li = e.target.parentElement;
  // li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newToDo;
  const btn = document.createElement('button');
  btn.innerText = '❌';
  btn.addEventListener('click', deleteToDo)
  li.appendChild(span);
  li.appendChild(btn)
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault()
  // input의 value를 새로운 변수(newToDo)에 복사하는 것
  const newToDo = toDoInput.value;
  // 이후 value가 ''로 비워져도 위에 newToDo에 영향을 주지 않는다.
  toDoInput.value = '';
  toDos.push(newToDo);
  paintToDo(newToDo);
  // saveToDos()
}

toDoForm.addEventListener('submit', handleToDoSubmit);
