// Слайдер card и CategoryPage

const swiperCard = new Swiper('.section-card__swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".section-card__pagination",
    type: "bullets",
    clickable: true,
  },
});


// ТАБЫ Карточка

class ItcTabs {
  constructor(target, config) {
    const defaultConfig = {};
    this._config = Object.assign(defaultConfig, config);
    this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
    this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
    this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
    this._eventShow = new Event('tab.itc.change');
    this._init();
    this._events();
  }
  _init() {
    this._elTabs.setAttribute('role', 'tablist');
    this._elButtons.forEach((el, index) => {
      el.dataset.index = index;
      el.setAttribute('role', 'tab');
      this._elPanes[index].setAttribute('role', 'tabpanel');
    });
  }
  show(elLinkTarget) {
    const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
    const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
    const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
    if (elLinkTarget === elLinkActive) {
      return;
    }
    elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
    elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
    elLinkTarget.classList.add('tabs__btn_active');
    elPaneTarget.classList.add('tabs__pane_show');
    this._elTabs.dispatchEvent(this._eventShow);
    elLinkTarget.focus();
  }
  showByIndex(index) {
    const elLinkTarget = this._elButtons[index];
    elLinkTarget ? this.show(elLinkTarget) : null;
  };
  _events() {
    this._elTabs.addEventListener('click', (e) => {
      const target = e.target.closest('.tabs__btn');
      if (target) {
        e.preventDefault();
        this.show(target);
      }
    });
  }
}

// инициализация .tabs как табов
new ItcTabs('.tabs');


// Меню Каталог

document.querySelector(".header-down__burger").addEventListener("click", function() {
  document.querySelector(".header-down__burger-menu").classList.add("active");
  document.querySelector("#scroll").classList.add("body-scroll")
});

document.querySelector(".header-down__burger-nav").addEventListener("click", function() {
  document.querySelector(".header-down__burger-menu").classList.remove("active");
  document.querySelector("#scroll").classList.remove("body-scroll")
}); 

document.querySelector(".header-down__burger-close").addEventListener("click", function() {
  document.querySelector(".header-down__burger-menu").classList.remove("active");
  document.querySelector("#scroll").classList.remove("body-scroll")
}); 


// Бургер-меню 

document.querySelector(".header-mobile__burger").addEventListener("click", function() {
  document.querySelector(".header-mobile__burger-menu").classList.add("active");
  document.querySelector("#scroll").classList.add("body-scroll")
});

document.querySelector(".header-mobile__burger-nav").addEventListener("click", function() {
  document.querySelector(".header-mobile__burger-menu").classList.remove("active");
  document.querySelector("#scroll").classList.remove("body-scroll")
}); 

document.querySelector(".header-mobile__burger-close").addEventListener("click", function() {
  document.querySelector(".header-mobile__burger-menu").classList.remove("active");
  document.querySelector("#scroll").classList.remove("body-scroll")
}); 

/* Окно Отзыв */

document.getElementById("btn__rev").addEventListener("click", function() {
  document.getElementById("modal__rev").classList.add("open")
});

document.getElementById("close-rev-btn").addEventListener("click", function() {
  document.getElementById("modal__rev").classList.remove("open")
});