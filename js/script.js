


// Хедер скролл

$(document).ready(function () {  
  var top = $('#menubar').offset().top - parseFloat($('#menubar').css('marginTop').replace(/auto/, 0));
  $(window).scroll(function (_event) {
  // определяем позицию y относительно окна браузера
    var y = $(this).scrollTop();

    // если он является формой ниже
    if (y >= top) {
    // то присваиваем класс .fixed
    $('#menubar').addClass('fixed');
    } else {
    // если нет – удаляем класс
    $('#menubar').removeClass('fixed');
    }
  });
});

$(document).ready(function () {  
  var top = $('#menubar-mob').offset().top - parseFloat($('#menubar-mob').css('marginTop').replace(/auto/, 0));
  $(window).scroll(function (_event) {
  // определяем позицию y относительно окна браузера
    var y = $(this).scrollTop();

    // если он является формой ниже
    if (y >= top) {
    // то присваиваем класс .fixed
    $('#menubar-mob').addClass('fixed');
    } else {
    // если нет – удаляем класс
    $('#menubar-mob').removeClass('fixed');
    }
  });
});

// Селект Аптеки

const element = document.querySelector('.js-choice');

if (element) {
  const choices = new Choices(element, {
    searchEnabled : false,
    itemSelectText: ""
  });
};

// Скрыть или показать пароль
    // Окно Вход

$('body').on('click', '.password-control', function(){
	if ($('#password-input').attr('type') == 'password'){
		$(this).addClass('view');
		$('#password-input').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password-input').attr('type', 'password');
	}
	return false;
});

    // Окно Регистрация

$('body').on('click', '.password-control', function(){
	if ($('#password-input-2').attr('type') == 'password'){
		$(this).addClass('view');
		$('#password-input-2').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password-input-2').attr('type', 'password');
	}
	return false;
});

$('body').on('click', '.password-control-re', function(){
	if ($('#password-re').attr('type') == 'password'){
		$(this).addClass('view');
		$('#password-re').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password-re').attr('type', 'password');
	}
	return false;
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


// Меню Каталог

document.querySelector(".header-down__burger").addEventListener("click", event => {
  document.getElementById("wrap-menu").classList.add("active");
  document.querySelector("#scroll").classList.add("body-scroll");
  event._isClickWithInModal = true;
});

document.querySelector(".header-down__burger-nav").addEventListener("click", function() {
  document.getElementById("wrap-menu").classList.remove("active");
  document.querySelector("#scroll").classList.remove("body-scroll")
}); 

document.querySelector(".header-down__burger-close").addEventListener("click", function() {
  document.getElementById("wrap-menu").classList.remove("active");
  document.querySelector("#scroll").classList.remove("body-scroll")
}); 

document.getElementById("wrap-menu").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("active");
  document.querySelector("#scroll").classList.remove("body-scroll")
});

// Mодальное окно Врачи

if (document.getElementById("btn__doctor")) {
  document.getElementById("btn__doctor").addEventListener("click", function() {
    document.getElementById("modal__doctor").classList.add("open");
    document.querySelector("#scroll").classList.add("body-scroll")
  });
};

if (document.getElementById("close-doctor-btn")) {
  document.getElementById("close-doctor-btn").addEventListener("click", function() {
    document.getElementById("modal__doctor").classList.remove("open");
    document.querySelector("#scroll").classList.remove("body-scroll")
  });
};

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("modal__doctor").classList.remove("open");
      document.querySelector("#scroll").classList.remove("body-scroll")
  }
});

if (document.querySelector("#modal__doctor .modal__box")) {
  document.querySelector("#modal__doctor .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
};

if (document.getElementById("modal__doctor")) {
  document.getElementById("modal__doctor").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
    document.querySelector("#scroll").classList.remove("body-scroll")
  });
};


// Mодальное окно Лекарства

if (document.getElementById("btn__med")) {
  document.getElementById("btn__med").addEventListener("click", function() {
    document.getElementById("modal__lec").classList.add("open");
    document.querySelector("#scroll").classList.add("body-scroll")
  });
};

if (document.getElementById("close-lec-btn")) {
  document.getElementById("close-lec-btn").addEventListener("click", function() {
    document.getElementById("modal__lec").classList.remove("open");
    document.querySelector("#scroll").classList.remove("body-scroll")
  });
};

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("modal__lec").classList.remove("open");
      document.querySelector("#scroll").classList.remove("body-scroll")
  }
});

if (document.querySelector("#modal__lec .modal__box")) {
  document.querySelector("#modal__lec .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
};

if (document.getElementById("modal__lec")) {
  document.getElementById("modal__lec").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
    document.querySelector("#scroll").classList.remove("body-scroll")
  });
};


// Mодальное окно Клиники

if (document.getElementById("btn__clinic")) {
  document.getElementById("btn__clinic").addEventListener("click", function() {
    document.getElementById("modal__clinic").classList.add("open");
    document.querySelector("#scroll").classList.add("body-scroll")
  });
};

if (document.getElementById("close-clinic-btn")) {
  document.getElementById("close-clinic-btn").addEventListener("click", function() {
    document.getElementById("modal__clinic").classList.remove("open");
    document.querySelector("#scroll").classList.remove("body-scroll")
  });
};

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("modal__clinic").classList.remove("open");
      document.querySelector("#scroll").classList.remove("body-scroll")
  }
});

if (document.querySelector("#modal__clinic .modal__box")) {
  document.querySelector("#modal__clinic .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
};

if (document.getElementById("modal__clinic")) {
  document.getElementById("modal__clinic").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
    document.querySelector("#scroll").classList.remove("body-scroll")
  });
};

// Слайдер hero

const swiperHero = new Swiper('.section-hero__swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".section-hero__pagination",
    type: "bullets",
    clickable: true,
  },
});


// Слайдер Category

const slider = document.querySelector('.section-category__swiper');

let swiperCategory;

function mobileSlider() {
  if (window.innerWidth >= 769 && slider.dataset.mobile == 'false') {
    swiperCategory = new Swiper(slider, {
    
      slidesPerView: 3,
      spaceBetween: 21,
      loop: true,
      slideClass: 'section-category__slide',
      
      navigation: {
        nextEl: ".section-category__btn-right",
        prevEl: ".section-category__btn-left"
      },
    });
    slider.dataset.mobile = 'true';
  }
  
	if (window.innerWidth < 769) {
    slider.dataset.mobile = 'false';
		swiperCategory.destroy();
	};
};

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});

window.addEventListener('orientationchange', () => {
	mobileSlider();
});


/* Дропдаун Личный кабинет */

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.querySelector(".dropbtn").classList.toggle("active");
}

window.onclick = function(event) {
 
  if (!event.target.matches('.dropbtn')) {
    
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};