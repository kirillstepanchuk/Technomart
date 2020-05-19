var about_us_adress_button = document.querySelector(".about-us-adress-button");
var popup_feedback = document.querySelector(".modal-feedback");
var close_feedback = document.querySelector(".close-feedback");
var buy_button = document.querySelectorAll(".buy-button");
var popup_checkout = document.querySelector(".modal-checkout");
var close_checkout = document.querySelector(".close-checkout");
var map_button = document.querySelector(".about-us-map-button");
var popup_map = document.querySelector(".modal-map");
var close_map = document.querySelector(".close-map-button");
var continue_checkout = document.querySelector(".checkout-button-continue");

if(about_us_adress_button != null){
about_us_adress_button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_feedback.classList.add("modal-show");
});
}

close_feedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_feedback.classList.remove("modal-show");
});

for(let i = 0; i < buy_button.length; i++){
    button = buy_button[i];
    button.addEventListener("click", function(evt){
        evt.preventDefault();
        popup_checkout.classList.add("modal-show");
    });
};

close_checkout.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_checkout.classList.remove("modal-show");
});
continue_checkout.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_checkout.classList.remove("modal-show");
});
map_button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_map.classList.add("modal-show");
});
close_map.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_map.classList.remove("modal-show");
});
