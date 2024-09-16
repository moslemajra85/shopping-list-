const add = document.querySelector('#add');
const clearBtn = document.querySelector('#clear');
const trashIcons = document.querySelectorAll('.delete');
const addBtn = document.querySelector('.add');
const items = document.querySelectorAll('.child');
let list = document.querySelector('#list');

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

function searchItem(text) {
  let target;
  const items = Array.from(list.children);

   items.forEach((item) => {
    if(item.textContent.trim().toLowerCase() === text.toLowerCase()) {
      item.classList.add('colored')
      return item;
    }else {
      item.classList.remove('colored')
    }
  });
}

search.addEventListener('input', (event) => {
   searchItem(event.target.value);
  
});

 
addBtn.addEventListener('click', addItem);
clearBtn.addEventListener('click', clearAllItems);
