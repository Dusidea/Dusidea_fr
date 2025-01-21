//to get an element by its classname
export function getElement(selector) {
  return document.querySelector(selector);
}

//to get all elements by sharing the classname
export function getElements(selector) {
  return document.querySelectorAll(selector);
}

//to get an element by its ID
export function getbyID(selector) {
  return document.getElementById(selector);
}

//to add an element to HTML ?
export function createElement(tag, className = "", content = "") {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content) element.innerHTML = content;
  return element;
}

// to modify an element by adding a class
export function addClass(selector, className = "") {
  return selector.classList.add(className);
}
