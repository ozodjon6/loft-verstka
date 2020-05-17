(function () {

    var elem = document.querySelector('.col-left');
    var iso = new Isotope( elem, {

  itemSelector: '.t-shirt',
  filter: ".red"
});

    const controlls = document.querySelectorAll(".form-checkbox__circular");

    const activeClass = "form-checkbox__circular-active";

    controlls.forEach(function(control) {
        control.addEventListener("click", function(e) {

          e.preventDefault();
            
          const filterName = control.getAttribute("data-filter")

          controlls.forEach(function(link) {
              link.closest(".form-checkbox__circular").classList.remove(activeClass);
          })
        
          control.closest(".form-checkbox__circular").classList.add(activeClass);

          iso.arrange({
              filter: `$.{filterName}`
          })

        });
    });
}());


(function () {

    var elem = document.querySelector('.about-product');
    var iso = new Isotope( elem, {

  itemSelector: '.about-product__item',
  filter: ".description"
});

    const controlls = document.querySelectorAll(".filter__link");

    const activeClass = "filter__item_active";

    controlls.forEach(function(control) {
        control.addEventListener("click", function(e) {

          e.preventDefault();
            
          const filterName = control.getAttribute("data-filter")

          controlls.forEach(function(link) {
              link.closest(".filter__link").classList.remove(activeClass);
          })
        
          control.closest(".filter__link").classList.add(activeClass);

          iso.arrange({
              filter: `$.{filterName}`
          })

        });
    });
}());

