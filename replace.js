function insertBefor(newEl, existingEl) {
    console.log(existingEl.parentElement);
    existingEl.parentElement.insertBefore(newEl, existingEl.nextElementSibling);
  }
  
  // const li = document.createElement('li');
  // li.innerText = 'Black berry';
  // li.className = 'child';
  
  // const firstItem = document.querySelector('.child:first-child');
  // insertBefor(li, firstItem);
  
  function replaceFirstItem() {
    const firstItem = document.querySelector('.child:first-child');
  
    const li = document.createElement('li');
    li.innerText = 'Replaced First';
    firstItem.replaceWith(li);
  }
  
  function replaceSecondItem() {
    const secondItem = document.querySelector('.child:nth-child(2)');
    const item = document.getElementsByClassName('child');
    secondItem.outerHTML = '<li>Replaced Second</li>';
  }
  
  function replaceAllItems() {
    let items = document.querySelectorAll('li');
    items.forEach(
      (item, index) => (item.outerHTML = `<li>Item ${index + 1}</li>`)
    );
  }
  
  function replaceChildHeading() {
    const header = document.getElementById('header');
    const h1 = header.lastElementChild;
    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shopping List';
    header.replaceChild(h2, h1);
  }
  
  function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');
    ul.removeChild(li);
  }
  
  function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    const children = ul.children;
  
    children[itemNumber - 1].remove();
  }

  // clearBtn.onclick = function () {
//   alert('Clear Items');
// };

// const onClear = () => {
//   alert('Clear Items');
// };

// clearBtn.addEventListener('click', onClear);

// remove an event listener after 5 second
//setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// trigger the click event programmatically
//setTimeout(() => {clearBtn.click()}, 5000)