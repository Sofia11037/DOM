// function sayHi() {
//     alert('hi');
// }

// document.querySelector('div').onclick = sayHi;


// document.querySelector('div').onclick = () => alert('hi');

document.querySelector('div').addEventListener('click', () => alert('hi'));
document.querySelector('div').addEventListener('click', () => console.log('привет'));


document.querySelector('input').addEventListener('change', () => console.log('Sofia'));
document.querySelector('input').addEventListener('keyup', () => console.log(1));
document.querySelector('input').addEventListener('keyup', () => console.log(document.querySelector('input').value));

// const input = document.querySelector('input');
// input.addEventListener('keyup', function() {
//     console.log(input.value);
// });


const input = document.querySelector('input');
input.onkeydown = function(event) {
    console.log(event.key);
};