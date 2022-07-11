import MenuMobile from "./modules/menuMobile.js";

/* LOADER */

onload = () =>{
  const load = document.getElementById('load');

  setTimeout(() => {
    load.style.display = 'none'
  }, 1000);
}

const mobileMenu = new MenuMobile('nav-menu', 'nav-toggle', 'nav-close', '.nav_link', 'header');
mobileMenu.init();

/* MIXITUP FILTER PRODUCTS */

let mixerProducts = mixitup('.products_content', {
  selectors: {
    target: '.products_card'
  },
  animation: {
    duration: 300
  }
});

/* DEFAULT PRODUCTS FILTER */

mixerProducts.filter('.delicacies');

/* LINK ACTIVE PRODUCTS */

const linkProducts = document.querySelectorAll('.products_item');

function activeProducts (){
  linkProducts.forEach( (item) => item.classList.remove('active-product'));
  this.classList.add('active-product');
}

linkProducts.forEach((item) => item.addEventListener('click', activeProducts));

/* SHOW SCROLL UP */

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  if(this.scrollY >=300)
    scrollUp.classList.add('show-scroll');
  else 
  scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/* SCROLL SECTIONS */

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)