const formDiv = document.getElementById('signin');
formDiv.classList.add('signin_active');

const welcome = document.getElementById('welcome');
const signinBtn = document.getElementById('signin__btn');
const userId = document.getElementById('user_id');


signinBtn.addEventListener('submit', e => {
	function sendForm(event) {

		event.preventDefault();

		let form = document.getElementById('signin__form');
		let formData = new FormData(form);

		let xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
		xhr.addEventListener('readystatechange', showData);
		xhr.send(formData);
	}
});

function showData(event) {

	if (xhr.readyState === 4 && xhr.status === 200) {
		let response = JSON.parse(xhr.responseText);

		if (response.success) {
			localStorage.userId = response.user_id;
			formDiv.classList.remove('signin_active');
			welcome.classList.add('welcome_active');
			userId.innerText = response.user_id;

		} else {
			alert('Неверный логин/пароль');
		}
	}
}