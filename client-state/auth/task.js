const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const signinBtn = document.getElementById('signin__btn');
const userId = document.getElementById('user_id');

form.addEventListener('submit', e => {
	event.preventDefault();
	let form = document.getElementById('signin__form');
	let formData = new FormData(form);

	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
	xhr.send(formData);
});

xhr.addEventListener('load', () => {
	if (xhr.response.success) {
		window.onload.localStorage.setItem('user_id');
		formDiv.classList.remove('signin_active');
		welcome.classList.add('welcome_active');
		userId.innerText = response.user_id;
	} else {
		alert('Неверный логин/пароль');
	}
});