// Mодальное окно Город

document.getElementById("btn__city").addEventListener("click", function() {
  document.getElementById("modal__city").classList.add("open");
  document.querySelector("#scroll").classList.add("body-scroll")
})

document.getElementById("close-city-btn").addEventListener("click", function() {
  document.getElementById("modal__city").classList.remove("open");
  document.querySelector("#scroll").classList.remove("body-scroll")
})

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("modal__city").classList.remove("open");
      document.querySelector("#scroll").classList.remove("body-scroll")
  }
});

document.querySelector("#modal__city .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("modal__city").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.querySelector("#scroll").classList.remove("body-scroll")
});


/* Окно Запись */

if (document.getElementById("btn__app")) {
  document.getElementById("btn__app").addEventListener("click", function() {
    document.getElementById("modal__app").classList.add("open");
    document.querySelector("#scroll").classList.add("body-scroll")
  });
};

if (document.getElementById("btn__app-1")) {
  document.getElementById("btn__app-1").addEventListener("click", function() {
    document.getElementById("modal__app").classList.add("open");
    document.querySelector("#scroll").classList.add("body-scroll")
  });
};

if (document.getElementById("btn__app-2")) {
  document.getElementById("btn__app-2").addEventListener("click", function() {
    document.getElementById("modal__app").classList.add("open");
    document.querySelector("#scroll").classList.add("body-scroll")
  });
};

if (document.getElementById("btn__app-3")) {
  document.getElementById("btn__app-3").addEventListener("click", function() {
    document.getElementById("modal__app").classList.add("open");
    document.querySelector("#scroll").classList.add("body-scroll")
  });
};

if (document.getElementById("close-app-btn")) {
  document.getElementById("close-app-btn").addEventListener("click", function() {
    document.getElementById("modal__app").classList.remove("open");
    document.querySelector("#scroll").classList.remove("body-scroll")
  });
};

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("modal__app").classList.remove("open");
      document.querySelector("#scroll").classList.remove("body-scroll")
  }
});

document.querySelector("#modal__app .section-doctors__modal-content").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("modal__app").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.querySelector("#scroll").classList.remove("body-scroll")
});