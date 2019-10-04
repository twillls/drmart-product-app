(() => {
    console.log('fired');
})();

const button = document.querySelectorAll('button');
const popUpBox = document.querySelector('.popUpBox');

function popUp() {
    popUpBox.classList.toggle("hidden");
}

button.forEach(button => {
    button.addEventListener('click', popUp);
})

