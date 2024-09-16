const logo = document.querySelector('#logo');

const onRightClick = () => {
  console.log('right click event');
};

const onMouseDown = () => {
  console.log('mouse down event');
};

const onMouseUp = () => {
  console.log('mouse up event');
};

const onMouseWheel = () => {
  console.log('mouse wheel event');
};

const onMouseOver = () => {
  console.log('mouse over event');
};

const onMouseOut = () => {
  console.log('mouse out event');
};

const onDragStart = () => {
  console.log('mouse drag start event');
};

const onDrag = () => {
  console.log('mouse drag event');
};

const onDragEnd = () => {
  console.log('mouse drag end event');
};

// contextmenu event: right click
logo.addEventListener('contextmenu', onRightClick);

// mousedown event
logo.addEventListener('mousedown', onMouseDown);

// mouseup event
logo.addEventListener('mouseup', onMouseUp);

// mouse wheel event
logo.addEventListener('mousewheel', onMouseWheel);

//mouse over event
logo.addEventListener('mouseover', onMouseOver);

//mouse out event
logo.addEventListener('mouseout', onMouseOut);

//mouse dragstart event
logo.addEventListener('dragstart', onDragStart);

//mouse drag event
logo.addEventListener('drag', onDrag);

//mouse drag event
logo.addEventListener('dragend', onDragEnd);
