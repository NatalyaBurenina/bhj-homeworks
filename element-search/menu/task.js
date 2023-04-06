const menuLink = Array.from(document.querySelectorAll(".menu__link"));
const menuSub = Array.from(document.querySelectorAll(".menu_sub"));

for (let index = 0; index < menuLink.length; index++) {
    const element = menuLink[index];
    const currentMenuSub = element.nextElementSibling;

    if (currentMenuSub) {
        element.onclick = () => {
            for (let index = 0; index < menuSub.length; index++) {
                const subElement = menuSub[index];
                subElement.classList.toggle("menu_active");
                if (subElement.previousElementSibling != element) {
                    subElement.classList.remove("menu_active");
                }
            }
            return false;
        };
    }
}