(function () {

    let xhr = new XMLHttpRequest();
    let login = document.querySelector(".login");
    let register = document.querySelector(".register");

    // 登入 -> 因瞄點無法與js共存無法跳轉畫面，先選擇瞄點跳轉
    function signin(e) {
        // e.preventDefault();
        let email = document.querySelector("#email").value;
        // alert(email);
        let password = document.querySelector("#password").value;
        // alert(password);
        xhr.open(
            "post",
            "https://hexschool-tutorial.herokuapp.com/api/signin",
            true
        );
        xhr.setRequestHeader("Content-type", "application/json");
        let data = {
            email: email,
            password: password
        };
        xhr.send(JSON.stringify(data));

        xhr.onload = function () {
            console.log(xhr.responseText);
            let str = JSON.parse(xhr.responseText);
            console.log(str.message);
            alert(str.message);
        };
    }
    // 註冊
    function registerin(e) {
        e.preventDefault();
        // alert('test');
        let email = document.querySelector("#email").value;
        // alert(email);
        let password = document.querySelector("#password").value;
        // alert(password);
        xhr.open(
            "post",
            "https://hexschool-tutorial.herokuapp.com/api/signup",
            true
        );
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        let data = "email=" + email + "&password=" + password;
        // alert(data);
        xhr.send(data);

        xhr.onload = function () {
            console.log(xhr.responseText);
            let str = JSON.parse(xhr.responseText);
            console.log(str.message);
            alert(str.message);
        };
    }
    login.addEventListener("click", signin, false);
    register.addEventListener("click", registerin, false);
})();
