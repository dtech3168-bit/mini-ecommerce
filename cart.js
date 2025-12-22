// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Target container in cart.html
const cartContainer = document.getElementById('cartItems');
const totalEl = document.getElementById('totalPrice');

function renderCart() {
  cartContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${item.image}" width="80">
      <h4>${item.name}</h4>
      <p>$${item.price}</p>
      <button class="remove-item" data-index="${index}">Remove</button>
    `;
    cartContainer.appendChild(cartItem);
  });

  totalEl.textContent = total.toFixed(2);

  // Add remove functionality
  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = btn.dataset.index;
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart(); // re-render after removal
    });
  });
}

// Initial render
renderCart(); 
