let menu = Array.from(document.getElementsByClassName("tab"));
let tabContent = document.getElementsByClassName("tab__content");

function changeActiveElements() {
	for (const tab of menu) {
		tab.className = "tab";
	}

	for (const content of tabContent) {
		content.className = "tab__content";
	}

	let index = menu.indexOf(this)

	menu[index].className = "tab tab_active";
	tabContent[index].className = "tab__content tab__content_active";
}

for (const tabs of menu) {
	tabs.onclick = changeActiveElements;
}