const productAdd = document.querySelectorAll('.product__add');
const productQuantityControls = document.querySelectorAll('.product__quantity-controls');
const cartProducts = document.querySelector('.cart__products');

for (let i = 0; i < productAdd.length; i++) {
	productAdd[i].addEventListener('click', function() {
		const currentProduct = this.closest('.product');
		const datasetId = currentProduct.dataset.id;

		for (let i = 0; i < cartProducts.children.length; i++) {
			if (cartProducts.children[i].dataset.id === datasetId) {
				let cartProductCount = cartProducts.children[i].querySelector('.cart__product-count');
				cartProductCount.innerText = Number(cartProductCount.innerText) + Number(currentProduct.querySelector('.product__quantity-value').innerText);
				return false;
			}
		}

		cartProducts.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${datasetId}"><img class="cart__product-image" src="${currentProduct.querySelector('.product__image').src}">
         <div class="cart__product-count">${currentProduct.querySelector('.product__quantity-value').innerText}</div></div>`);
	});
}

for (let i = 0; i < productQuantityControls.length; i++) {
	productQuantityControls[i].addEventListener('click', function() {

		let quantityValue = Number(this.querySelector('.product__quantity-value').innerText);

		if (event.target.classList.contains('product__quantity-control_dec')) {
			if (quantityValue > 1) {
				quantityValue -= 1;
			} else {
				quantityValue = 1;
			}
		} else {
			quantityValue += 1;
		}

		this.querySelector('.product__quantity-value').innerText = quantityValue;
	});
}