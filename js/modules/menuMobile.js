export default class MenuMobile {
  constructor (menu, toggle, close, link, header){
    this.navMenu = document.getElementById(menu);
    this.navToggle = document.getElementById(toggle);
    this.navClose = document.getElementById(close);
    this.navLink = document.querySelectorAll(link);
    this.header = document.getElementById(header);

    this.linkAction = this.linkAction.bind(this);
  }

  toggleMenu(){
    if(this.navToggle){
      this.navToggle.addEventListener('click', ()=> {
        this.navMenu.classList.add('show-menu');
      })
    }

    if(this.navClose){
      this.navClose.addEventListener('click', ()=>{
        this.navMenu.classList.remove('show-menu');
      })
    }
  }

  linkAction(){
    this.navMenu.classList.remove('show-menu');
  }

  menuMobileEvents(){
    this.navLink.forEach(item => item.addEventListener('click', this.linkAction));
  }

  scrollHeader() {
    if(this.scrollY >= 50){
      this.header.classList.add('scroll-header');
    } else{
      this.header.classList.remove('scroll-header');
    }
  }

  scroll() {
    window.addEventListener('scroll', this.scrollHeader);
  }

  init(){
    this.toggleMenu();
    this.menuMobileEvents();
    this.scroll();

    return this;
  }
}