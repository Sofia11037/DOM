const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log('hi');
    const input = form.querySelector('.string');
    console.log(input.value);
    input.value = '';
});