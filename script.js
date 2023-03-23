function login() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (!fullName || !email || !password) {
        Toastify({
            text: "plz enter password&name&email",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    } else if (email !== "admin@gmail.com" || password !== "12345") {
        Toastify({
            text: "plz enter correct password&email",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    }
    else  {
        window.location.href = "home.html"
    }

}