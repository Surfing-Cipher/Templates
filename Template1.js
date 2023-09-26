document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const registerLinks = document.querySelectorAll('#registerLink');
    const backToLogin = document.querySelector('#backToLogin');
    const loginPanel = document.querySelector('.wrapper');
    const registerPanel = document.querySelector('.register-panel');

    function showLoginPanel() {
        loginPanel.style.display = 'block';
        registerPanel.style.display = 'none';
    }

    function showRegisterPanel() {
        loginPanel.style.display = 'none';
        console.log("hehe");
        registerPanel.style.display = 'block';
        console.log("hehe2");
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = form.querySelector('input[type="text"]').value;
        const password = form.querySelector('input[type="password"]').value;

        // Add your authentication logic here
        // For example, you can send the username and password to a server for validation

        // If authentication is successful, you can redirect the user or perform other actions
    });

    registerLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("hehe3");
            showRegisterPanel();
        });
    });

    backToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("hehe4");
        showLoginPanel();
    });
});

