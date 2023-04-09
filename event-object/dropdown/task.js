const menuTitle = document.querySelector('div.dropdown__value');
const menuList = Array.from(document.querySelectorAll('a.dropdown__link'));

function closeAndOpenMenu() {
	const listOfMenu = document.querySelector('ul.dropdown__list');
	if (listOfMenu.classList.contains('dropdown__list_active')) {
		listOfMenu.classList.remove('dropdown__list_active');
	} else {
		listOfMenu.classList.add('dropdown__list_active');
	}
}

menuTitle.addEventListener('click', closeAndOpenMenu);

menuList.forEach(function(item) {
	item.onclick = function() {
		document.querySelector('div.dropdown__value').textContent = item.textContent;
		return false;
	};
	item.addEventListener('click', closeAndOpenMenu);
});