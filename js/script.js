let main_menu = document.querySelectorAll(".down");
let drop_menu = document.querySelectorAll(".drop");
let right_arrow = document.querySelectorAll(".right-arrow");

let dropContent;

main_menu.forEach((downs) => {
  downs.addEventListener("click", function () {
    for (let i = 0; i < drop_menu.length; i++) {
      dropContent = this.nextElementSibling;
      dropContent.classList.toggle("display");

      this.classList.toggle("active");
    }
  });
});


let scrollToTopBtn = document.getElementById('button');
const nav = document.getElementById('nav');

window.onscroll=()=>{

  if(window.scrollY>60){
    nav.style.boxShadow = '0px -20px 5px rgba(255,255,255,.9)';
    scrollToTopBtn.classList.add('active');
  }
  else{
    scrollToTopBtn.classList.remove('active');
      nav.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.1)";
  }

}
const products = [
  {
      "id":1,
      "name": "Apple Watch Series 5",
      "price": 339.99,
      "rating": 4,
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png",
      "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
      "brand": "apple",
      "available": true,
      "colors": ["red", "purple", "green"]
  },
  {
      "id":2,
      "name": "Apple iPhone 11 (64GB, Black)",
      "price": 669.99,
      "rating": 5,
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/2.1aba2cea.png",
      "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
      "brand": "apple",
      "available": true,
      "colors": ["red", "purple", "green"]
  },
  {
      "id":3,
      "name": "Apple iMac 27-inch",
      "price": 999.99,
      "rating": 4,
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/3.29c766f8.png",
      "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
      "brand": "apple",
      "available": true,
      "colors": ["red", "purple", "green"]
  },
  {
      "id":4,
      "name": "OneOdio A71 Wired Headphones",
      "price": 49.99,
      "rating": 3,
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/4.73f34744.png",
      "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
      "brand": "apple",
      "available": true,
      "colors": ["red", "purple", "green"]
  },
  {
      "id":5,
      "name": "Apple - MacBook Air® (Latest Model) - 13.3 Display - Silver",
      "price": 999.99,
      "rating": 4,
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/5.c5b188e5.png",
      "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
      "brand": "apple",
      "available": true,
      "colors": ["red", "purple", "green"]
  },
  {
      "id":6,
      "name": "Switch Pro Controller",
      "price": 429.99,
      "rating": 3,
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/6.833c8951.png",
      "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
      "brand": "apple",
      "available": true,
      "colors": ["red", "purple", "green"]
  },
  {
      "id":7,
      "name": "Google - Google Home - White/Slate fabric",
      "price": 129.29,
      "rating": 4,
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png",
      "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
      "brand": "google",
      "available": true,
      "colors": ["red", "purple", "green"]
  },
  {
      "id":8,
      "name": "Sony 4K Ultra HD LED TV",
      "price": 7999.99,
      "rating": 5,
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/8.c170e8ca.png",
      "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
      "brand": "apple",
      "available": true,
      "colors": ["red", "purple", "green"]
  },
  {
      "id":9,
      "name": "OnePlus 7 Pro",
      "price": 14.99,
      "rating": 4,
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/9.3170c803.png",
      "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
      "brand": "Philips",
      "available": true,
      "colors": ["red", "purple", "green"]
  }
];
document.querySelector('.product-details').innerHTML = 

`${products.map(function(product){
  return `
    <div class='card'>
      <div class='img'>
        <img src='${product.img}'>
      </div>
      <div class='card-body'>
        <div class='stars'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        </div>
        <div class='price'>
          $${product.price}
        </div>
      </div>
      <div class='content-body'>
        <p class='first'>${product.name}</p>
        <p class='second'>${product.discription}</p>
      </div>
      <div class='optional-body'> 
      <div class="wish"><i class="fa-regular fa-heart"></i> wishlist</div>
      <div class="view-cart"><i class="fa-solid fa-cart-shopping"></i> view in cart</div>
      </div>
    </div>` 
  
}).join('')}`

document.querySelector('.result').innerHTML = `<p>${products.length} results found</p>`

function search(){
  var input, filter, product_details, name, txt_value,i;
  input = document.getElementById('search-bar');
  filter= input.value.toUpperCase();
  product_details = document.querySelectorAll('.card');
  for(i = 0; i<product_details.length; i++){
    name = product_details[i].getElementsByClassName('first')[0];
    txt_value = name.textContent || name.innerHTML;
    if(txt_value.toUpperCase().indexOf(filter)>-1){
      product_details[i].style.display = '';
    }
    else{
      product_details[i].style.display = 'none';
    }

  }
}
const feature_drop_btn = document.getElementById('drop-btn');
feature_drop_btn.addEventListener('click',function(){
  document.querySelector('.drop-btn-content').classList.toggle('display');
})

const burger_icon = document.querySelector('#sideBarOne_burger');
burger_icon.addEventListener('click',function(){
  document.querySelector('.drawer').style.left = '0';
  document.querySelector('.drawer').style.zIndex = '9999999'
  document.querySelector('.overlay').style.display = 'block';
})

const exit_icon = document.querySelector('#times');
exit_icon.addEventListener('click',function(){
  document.querySelector('.overlay').style.display = 'none';
  document.querySelector('.drawer').style.left = '-280px';


})

const drawer = document.getElementById('drawer');
const filters_bar = document.getElementById('filters');
const card_img = document.querySelector('.card');
const search_bar = document.getElementById('search-bar');
const nav_bar = document.getElementById('nav');
const items_color = '#283046';
const moon = document.getElementById('moon');
moon.addEventListener('click',function(){
  drawer.style.backgroundColor = items_color;
 
})

const filters_icon = document.getElementById('filters_icon');
const filters_show = document.querySelector('.filters');
const filters_exit = document.getElementById('filters-icon');

