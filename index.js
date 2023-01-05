const inputField = document.querySelector(".inp");
const divs = document.querySelectorAll(".item");

inputField.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();

    divs.forEach(item => {
        item.querySelector(".search").textContent.toLowerCase().includes(word) ? (item.style.display = "flex") : (item.style.display = "none");
    })
})
