// Задание 2

// Реализовать вертикальное меню, которое "выезжает" по клику на кнопку-бургер и закрывается по клику на кнопку-крестик.
// Пример, как это должно выглядеть и работать:  https://ucarecdn.com/eef643a8-...


const sidePanel = document.querySelector('.side-panel');
const main = document.querySelector('.main');
const btnClose = document.querySelector('.btn-close');
const mainBtn = document.querySelector('.main__btn');

mainBtn.addEventListener('click', () => {
    sidePanel.style.width = '250px';
    main.style.marginLeft = '250px';
    mainBtn.style.display = 'none';
})

btnClose.addEventListener('click', () => {
    sidePanel.style.width = '0px';
    main.style.marginLeft = '0px';
    mainBtn.style.display = 'block';
})