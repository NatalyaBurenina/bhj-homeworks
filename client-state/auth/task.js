const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const signinBtn = document.getElementById('signin__btn');
const userId = document.getElementById('user_id');

function authoriz(id) {
	formDiv.classList.toggle('signin_active');
	welcome.classList.toggle('welcome_active');
	userId.innerText = id;
}

form.addEventListener('submit', e => {
	e.preventDefault();
	let formData = new FormData(form);

	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
	xhr.send(formData);


	xhr.addEventListener('load', () => {

		if (xhr.response.success) {
			let auth = xhr.response;
			localStorage.setItem('user_id', auth.user_id);
			authoriz(auth.user_id)
		} else {
			alert('Неверный логин/пароль');
		}
	});
});

window.onload = function() {
	const localeId = localStorage.getItem('user_id');
	if (userId.textContent == localeId) {
		authoriz(localeId);
	}
};