(function() {
    const openingBtn = document.querySelector('.form__active');
    const closingBtn = document.querySelector('.cross__link__second');
    const sidebar = document.querySelector('.specialist__form__container');
    
    openingBtn.addEventListener("click", function() {
        sidebar.classList.add('specialist__form__container--active');
    });
    
    closingBtn.addEventListener("click", function() {
        sidebar.classList.remove('specialist__form__container--active');
    });
    }())