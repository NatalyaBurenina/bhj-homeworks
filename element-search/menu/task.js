let menu = Array.from(document.querySelectorAll('.menu__link'));

for (let link of menu) {
	link.onclick = function () {
		let parent = link.parentElement;
		if (parent.querySelector('.menu_sub').className === 'menu menu_sub') {
			parent.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
		} else {
			parent.querySelector('.menu_sub').className = 'menu menu_sub'
		}

		if (link.closest('.menu_main')) {
			return false
		}
	} 
}