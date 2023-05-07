const numberEls = document.querySelectorAll(".number");
const grade = document.getElementsByTagName("span")[0];
const submit = document.querySelector(".button");
const rating = document.querySelector(".rating");

numberEls.forEach(numberEl => numberEl.addEventListener("focus", (e) => {
    grade.innerText = e.target.innerText;
}));

submit.addEventListener("click", (e) => {
    if (grade.innerText != "") {
        rating.style.display = "none";
    }
})