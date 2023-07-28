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

// Фильтры клиники

document.querySelector(".section-clinic__btn-filter").addEventListener("click", function() {
  document.querySelector(".section-clinic__tabs").classList.add("active");
  
});