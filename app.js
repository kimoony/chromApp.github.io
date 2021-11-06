const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

const link = document.querySelector('a');


function handleLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  console.log(username)
}

function handleLinkClick(e) {
  e.preventDefault();
  console.log(e)
  alert('clicked')
}

loginForm.addEventListener('submit', handleLoginSubmit);
link.addEventListener('click', handleLinkClick)