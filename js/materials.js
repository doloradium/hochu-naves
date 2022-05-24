(function() {

    const elem = document.querySelector('.materials__benefits__list');
    const iso = new Isotope(elem, {
    itemSelector: ".materials__benefits",
    filter: '.polycarbonate'
});

    const controls = document.querySelectorAll('.material__link');
    const activeClass = 'material__active';

    controls.forEach(function(control) {

        control.addEventListener('click', function(e) {
            e.preventDefault();

            const filterName = control.getAttribute("data-filter");

            controls.forEach(function(link){
                link.closest('.material').classList.remove(activeClass);
            })

            control.closest('.material').classList.add(activeClass);
            iso.arrange({
                filter: `.${filterName}`
            })
        });

    });

}())