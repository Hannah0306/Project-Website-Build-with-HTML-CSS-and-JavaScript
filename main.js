document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle');
  const menu = document.getElementById('menu');
  const coffeeBtn = document.getElementById('change-coffee-btn');
  const coffeeName = document.getElementById('coffee-name');

  // Toggle menu responsive
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('active');
  });

  // Coffee name options
  const coffeeOptions = [
    "Meow Latte",
    "Purrfect Cappuccino",
    "Catnip Mocha",
    "Feline Flat White",
    "Whisker Macchiato",
  ];

  // Change coffee name on button click
  if (coffeeBtn && coffeeName) {
    coffeeBtn.addEventListener('click', () => {
      let currentIndex = coffeeOptions.indexOf(coffeeName.textContent);
      let nextIndex = (currentIndex + 1) % coffeeOptions.length;
      coffeeName.textContent = coffeeOptions[nextIndex];
    });
  }

  // ===== Filter Menu Function =====
  window.filterMenu = function (category) {
    let items = document.querySelectorAll('.card');
    items.forEach(item => {
      if (category === 'all') {
        item.style.display = 'block';
      } else {
        if (item.classList.contains(category)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle");
  const navMenu = document.querySelector("nav ul");

  toggleBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    // Cập nhật trạng thái aria-expanded cho accessibility
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !isExpanded);
  });
});
