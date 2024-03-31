let scrollContainer: HTMLDivElement = document.querySelector(".gallery") as HTMLDivElement;
let backBtn: HTMLImageElement = document.getElementById("backBtn") as HTMLImageElement;
let nextBtn: HTMLImageElement = document.getElementById("nextBtn") as HTMLImageElement;

scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});