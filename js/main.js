const first_button=document.getElementById('first_button');
const second_button=document.getElementById('second_button');
const modal_container=document.getElementById('modal_container');

first_button.addEventListener('click', () => {
    modal_container.classList.add('show');
});
second_button.addEventListener('click', () => {
    modal_container.classList.remove('show');
})