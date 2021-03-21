const menuElement = document.querySelector('#menu');

fetch('https://codice-boca.web.app/menu')
  .then(res => res.json())
  .then(menuItems => {
    const menuCards = menuItems.map(item => {
      return `<div class="menu-item">
              <h3 class="menu-item-title">${item.title}</h3>
              <div class="menu-item-description">
                <p>${item.description}</p>
              </div>
            </div>`
    })
    menuElement.innerHTML = menuCards.join('');
  })
  .catch(error => menuElement.innerHTML = error);
