"use strict"

var writeusButton = document.querySelector(".writeus-button");
var writeusPopup = document.querySelector(".modal-writeus");
var writeusCloseButton = writeusPopup.querySelector(".modal-close");
var form = writeusPopup.querySelector("form");
var inputName = writeusPopup.querySelector("[name=name]");
var email = writeusPopup.querySelector("[name=email]");
var letter = writeusPopup.querySelector("[name=letter]");

var mapLink = document.querySelector(".map-wrapper");
var mapPopup = document.querySelector(".modal-map");
var mapCloseButton = mapPopup.querySelector(".modal-close");


var isLocalStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("inputName");
} catch (error) {
  isLocalStorageSupport = false;
}

try {
  storageEmail = localStorage.getItem("email");
} catch (error) {
  isLocalStorageSupport = false;
}


writeusButton.addEventListener("click", function(event) {
  event.preventDefault();
  writeusPopup.classList.toggle("modal-show");
  inputName.focus();

  if(storageName && storageEmail) {
    inputName.value = storageName;
    email.value = storageEmail;
    letter.focus();
  } else if(storageName) {
    inputName.value = storageName;
    email.focus();
  } else {
    inputName.focus();
  }
})

writeusCloseButton.addEventListener("click", function(event) {
  event.preventDefault();
  writeusPopup.classList.toggle("modal-show");
  inputName.classList.remove("input-invalid");
  email.classList.remove("input-invalid");
  letter.classList.remove("input-invalid");
})

form.addEventListener("submit", function(event) {
  if (!inputName.value || !email.value || !letter.value) {
    event.preventDefault();
    inputName.classList.add("input-invalid");
    email.classList.add("input-invalid");
    letter.classList.add("input-invalid");   
  } else {
    if (isLocalStorageSupport) {
      localStorage.setItem("inputName", inputName.value);
      localStorage.setItem("email", email.value);
    }
  }
})

mapLink.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.toggle("modal-show");
})

mapCloseButton.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.toggle("modal-show");
}) 

window.addEventListener("keydown", function(event) {
  if (event.code === "Escape") {
    event.preventDefault();
    if (writeusPopup.classList.contains("modal-show")) {
      writeusPopup.classList.remove("modal-show");
      inputName.classList.remove("input-invalid");
      email.classList.remove("input-invalid");
      letter.classList.remove("input-invalid");
    } else if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
})