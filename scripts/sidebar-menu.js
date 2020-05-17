(function (){
    const openingBtn = document.querySelector(".sidebar__hamburger");
const closingBtn = document.querySelector(".sidebar__close");
const sidebar = document.querySelector(".sidebar");


openingBtn.addEventListener("click", function() {
    sidebar.classList.add("sidebar_opened");
});

closingBtn.addEventListener("click", function() {
    sidebar.classList.remove("sidebar_opened");
})

}())
