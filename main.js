const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    // Si Aside esta open, hay que cerrarlo
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    // Si Aside esta open, hay que cerrarlo
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    // Si Mobile Menu esta open, hay que cerrarlo
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

}

const productList = [];
productList.push({
    name: 'Nike Jordan',
    price: 420,
    image: 'https://images.pexels.com/photos/10853637/pexels-photo-10853637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' ,

});

productList.push({
    name: '-- GUN -- ',
    price: 420,
    image: 'https://images.pexels.com/photos/10853637/pexels-photo-10853637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' ,

});

productList.push({
    name: ' -- Bike -- ',
    price: 420,
    image: 'https://images.pexels.com/photos/10853637/pexels-photo-10853637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 '

});

/* <div class="product-card">
            <img src="https://images.pexels.com/photos/10853637/pexels-photo-10853637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="">
            <div class="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Jordan</p>
                </div>
                <figure>
                    <img src="./Icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
    </div> */

    function renderProducts(arr) {
        for (product of arr) {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
        
          // product= {name, price, image} -> product.image
          const productImg = document.createElement('img');
          productImg.setAttribute('src', product.image);
        
          const productInfo = document.createElement('div');
          productInfo.classList.add('product-info');
        
          const productInfoDiv = document.createElement('div');
        
          const productPrice = document.createElement('p');
          productPrice.innerText = '$' + product.price;
          const productName = document.createElement('p');
          productName.innerText = product.name;
        
          productInfoDiv.appendChild(productPrice);
          productInfoDiv.appendChild(productName);
        
          const productInfoFigure = document.createElement('figure');
          const productImgCart = document.createElement('img');
          productImgCart.setAttribute('src', './Icons/bt_add_to_cart.svg');
        
          productInfoFigure.appendChild(productImgCart);
        
          productInfo.appendChild(productInfoDiv);
          productInfo.appendChild(productInfoFigure);
        
          productCard.appendChild(productImg);
          productCard.appendChild(productInfo);
        
          cardsContainer.appendChild(productCard);
        }
      }
      
      renderProducts(productList);