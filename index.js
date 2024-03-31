var scrollContainer = document.querySelector(".gallery");
var backBtn = document.getElementById("backBtn");
var nextBtn = document.getElementById("nextBtn");
scrollContainer.addEventListener("wheel", function (event) {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
});
nextBtn.addEventListener("click", function () {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click", function () {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});
