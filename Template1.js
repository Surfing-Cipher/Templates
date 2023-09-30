document.addEventListener('DOMContentLoaded', function() {
    const formLogin = document.querySelector('#loginForm');
    const formRegister = document.querySelector('#registerForm');
    const formforgot = document.querySelector('#forgotForm');
    const forgotpassword = document.querySelectorAll('#forgot');
    const registerLinks = document.querySelectorAll('#registerLink');
    const backToLogin = document.querySelectorAll('#backToLogin');
    const loginPanel = document.querySelector('.wrapper');
    const registerPanel = document.querySelector('.register-panel');
    const forgotPanel = document.querySelector('.forgot-password-panel');

    function showLoginPanel() {
        loginPanel.style.display = 'block';
        registerPanel.style.display = 'none';
        forgotPanel.style.display = 'none';
    }

    function showRegisterPanel() {
        loginPanel.style.display = 'none';
        registerPanel.style.display = 'block';
        forgotPanel.style.display = 'none';
    }

    function showForgotPanel() {
        loginPanel.style.display = 'none';
        registerPanel.style.display = 'none';
        forgotPanel.style.display = 'block'; 
    }

    formLogin.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(formLogin);
        const data = Object.fromEntries(formData);
        console.log(data);

        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => console.log(json));
    });

    formRegister.addEventListener('submit', function (e) {
        e.preventDefault();

        const password1 = formRegister.querySelector('input[name="Password"]');
        const password2 = formRegister.querySelector('input[name="Re-enterPassword"]');

        if (password1.value !== password2.value) {
            alert("Passwords do not match");
            return;
        }

        const formData = new FormData(formRegister);
        const data = Object.fromEntries(formData);
        console.log(data);

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((json) => console.log(json));
    });

    formforgot.addEventListener('submit', function(e) {
        e.preventDefault();
        formforgot.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(formforgot);
        const email = formData.get('Email');

        /*http://localhost:3000/reset-password*/
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({email}),
            })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .then((data) => {
            if (data.success) {
                alert(`Your new password is: ${data.newPassword}`);
            } else {
                alert('Failed to reset password. Please try again later.');
            }
        })
        .catch((error) => console.error('Error:', error));
    });

    })




    registerLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showRegisterPanel();
        });
    });

    backToLogin.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showLoginPanel();
        });
    });

    forgotpassword.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showForgotPanel();
        });
    });
});
