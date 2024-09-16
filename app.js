const add = document.querySelector('#add');
const clearBtn = document.querySelector('#clear');
const trashIcons = document.querySelectorAll('.delete');
const addBtn = document.querySelector('.add');
const items = document.querySelectorAll('.child');

const search = document.querySelector('#search');

let userInput = '';
add.addEventListener('change', (event) => {
  userInput = event.target.value;
});

function addItem() {
  const ul = document.querySelector('#list');
  // create item
  const li = document.createElement('li');
  li.className = 'child';

  // create textNode
  const text = document.createTextNode(userInput);
  // create icon
  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-trash-can delete';
  icon.onclick = function () {
    icon.parentElement.remove();
  };

  li.appendChild(text);
  li.appendChild(icon);
  ul.appendChild(li);

  // clear
  add.value = '';
}
function clearAllItems() {
  const ul = document.querySelector('#list');

  const items = Array.from(ul.children);
  items.forEach((item) => item.remove());
}

trashIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    icon.parentElement.remove();
  });
});

addBtn.addEventListener('click', addItem);
clearBtn.addEventListener('click', clearAllItems);

// event

// target: The element that triggered the event --> the element that you click on
// currentTarget: The element that the event listener is attached to

const logo = document.querySelector('#logo');

function onClick(e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  //console.log(e.type);

  //The coordinated of where you click relative to the window
  // console.log(e.clientX);
  // console.log(e.clientY);

  // the coordinate of where you click within the element
  console.log(e.offsetX);
  console.log(e.offsetY);
}

logo.addEventListener('click', onClick);

// document.body.addEventListener('click', function (e) {
//   console.log(e.target);
//   console.log(e.currentTarget);
// });
