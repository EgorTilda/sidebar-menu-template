window.onload = () => {
   // Sidebar Toggle
    document.getElementById('sidebar-toggle-btn').addEventListener('click', () => {
        document.getElementById('sidebar-toggle-btn').classList.toggle('hide');
        document.getElementById('sidebar-elem').classList.toggle('hide');
        document.getElementById('main-elem').classList.toggle('move');
        document.querySelectorAll('.main-menu__text').forEach((elem) => {
            elem.classList.toggle('hide');
        });
    });

    // FAQ
    const faqItems = document.querySelectorAll('.faq-card')
    faqItems.forEach((elem) => {
        elem.addEventListener('click', () => {
            elem.classList.toggle('show');
        });
    });
}