(function () {

    const elem = document.querySelector('.products__list');
    const iso = new Isotope( elem, {

  itemSelector: '.products__item',
  filter: ".popular"
});

    const controlls = document.querySelectorAll(".filter__link");
    const activeClass = "filter__item_active";

    controlls.forEach(function(control) {
        
        control.addEventListener("click", function(e) {
            e.preventDefault();

            const filterName = control.getAttribute("data-filter");

            controlls.forEach(function(link) {
                link.closest(".filter__item").classList.remove(activeClass);
            })

            control.closest(".filter__item").classList.add(activeClass);

            iso.arrange({
                filter: `.${filterName}`
            })
        });
        
    });

}());

(function () {

    const elem = document.querySelector('.about-product');
    const iso = new Isotope( elem, {

  itemSelector: '.about-product__item',
  filter: ".description "
});

    const controlls = document.querySelectorAll(".filter__link");
    const activeClass = "filter__item_active";

    controlls.forEach(function(control) {
        
        control.addEventListener("click", function(e) {
            e.preventDefault();

            const filterName = control.getAttribute("data-filter");

            controlls.forEach(function(link) {
                link.closest(".filter__item").classList.remove(activeClass);
            })

            control.closest(".filter__item").classList.add(activeClass);

            iso.arrange({
                filter: `.${filterName}`
            })
        });
        
    });

}());


(function () {

    const elem = document.querySelector('.col-left');
    const iso = new Isotope( elem, {

  itemSelector: '.t-shirt',
  filter: ".black "
});

    const controlls = document.querySelectorAll(".form-checkbox__circular");
    const activeClass = "form-checkbox__circular-active";

    controlls.forEach(function(control) {
        
        control.addEventListener("click", function(e) {
            e.preventDefault();

            const filterName = control.getAttribute("data-filter");

            controlls.forEach(function(link) {
                link.closest(".form-checkbox__circular").classList.remove(activeClass);
            })

            control.closest(".form-checkbox__circular").classList.add(activeClass);

            iso.arrange({
                filter: `.${filterName}`
            })
        });
        
    });

}());

(function () {
    const controlls = document.querySelectorAll(".size__link");
    const activeClass = "size__item_active";

    controlls.forEach(function(control){
        control.addEventListener("click", function(e){
            e.preventDefault();

        controlls.forEach(function(link){
            link.closest(".size__item").classList.remove(activeClass);
        })

        control.closest(".size__item").classList.add(activeClass);

        })
    });
}());