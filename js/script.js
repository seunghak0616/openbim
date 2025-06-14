document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navUl = document.querySelector('header nav ul');

    if (mobileMenuToggle && navUl) {
        mobileMenuToggle.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });
    }
});
