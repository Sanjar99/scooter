var FAQs = document.querySelector(".FAQs__title-wrapper");
var desc = document.querySelector(".FAQs__button-desc");
var arrow = document.querySelector(".FAQs__button-title");

FAQs.addEventListener("click", function(){
  desc.classList.toggle("FAQs__button-desc--active");
  arrow.classList.toggle('FAQs__button-title--active');
});