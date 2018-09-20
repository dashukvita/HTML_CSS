
    var link = document.querySelector(".write-us");
    var popup = document.querySelector(".modal-content");
    var close = document.querySelector(".modal-content-close");
    var form = popup.querySelector("form");
    var login= popup.querySelector("[name=login]");
    var email= popup.querySelector("[name=email]");
    var comment= popup.querySelector("[name=comment]");
    var storage = localStorage.getItem("login");
    var storageemail = localStorage.getItem("email");
    var mapOpen = document.querySelector(".open-map");
    var mapPopup = document.querySelector(".modal-content-map");
    var mapClose = mapPopup.querySelector(".modal-content-close");

    link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        if (storage && storageemail) {
            login.value = storage;
            email.value = storageemail;
            comment.focus();
        } else {
            login.focus();
        }
    });

    form.addEventListener("submit", function(event) {
        if (!(login.value && email.value)) {
            event.preventDefault();
            popup.classList.remove("modal-error");
            popup.classList.add("modal-error");
            alert ( "Пожалуйста, заполните поля: Ваше имя и Ваш email." );
        } else {
            localStorage.setItem("login", login.value);
            localStorage.setItem("email", email.value);
        }
    });

    close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
            if (popup.classList.contains("modal-content-show")) {
                popup.classList.remove("modal-content-show");
            }
        }
    });

    mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.add("modal-content-show");
    });

    mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-content-show");
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
            if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
            }
        }
    });