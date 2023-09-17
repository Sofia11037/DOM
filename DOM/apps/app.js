const costumItem = document.getElementById('custom-item');
console.log(costumItem);

const selectedItems = document.getElementsByClassName('selected');
console.log(selectedItems);

const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

const headers = document.querySelectorAll('h2, h1');
console.log(headers);

const firstLi = document.querySelector('ul li:first-child');
console.log(firstLi);

const blockTitle2 = document.querySelector('.block-title2');
console.log(blockTitle2);




costumItem.style.fontSize = '50px';
costumItem.style.color = 'red';

console.log(costumItem.innerText);
console.log(costumItem.textContent);

costumItem.innerText = 'Hello';
costumItem.innerText = '';




for (let element of selectedItems) {
    element.style.backgroundColor = 'yellow';
};


headers.forEach(el => {
    el.textContent = 'New Heading'
});


// blockTitle2.remove();


const link = document.createElement('a');
link.href = 'https://google.com';
link.setAttribute('target', '_blank');
link.style.color = 'violet';
link.style.textDecoration = 'none';
link.textContent = 'click me';

console.log(link);



document.body.append(link);


const forAdding = document.querySelector('.forAdding');

const button = document.createElement('button');
button.textContent = 'My button';


forAdding.append(button);