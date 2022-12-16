const popupbutton = document.querySelector(".btn");
const popup = document.querySelector(".popup");
const removebutton = document.querySelector(".btn2");
popupbutton.addEventListener('click', () => {
    popup.style.display = 'block';
})
if (removebutton) {
    removebutton.addEventListener("click", () => {
        popup.style.display = 'none';
    })
}