

window.onload = function () {

console.log(localStorage.Book_link0.5);

// Search box

var searchBox = document.querySelector('#book-search input');

searchBox.addEventListener('keyup', (e) => {
  var base = e.target.value.toLowerCase();
  var books = document.querySelectorAll('.title');

  books.forEach( function (n) {
   if (n.innerText.toLowerCase().includes(base)) {
     n.parentElement.style.display = "grid";
   } else {
        n.parentElement.style.display = "none";
      };
  })
})

// Deleting Books

var bookList = document.getElementById('book-list');

bookList.addEventListener('click', (e) => {
  if (e.target.className == 'delete') {
    e.target.parentElement.remove();
  }
})

// Creating New Book

var addBox = document.getElementsByName('bookTitle');
var addLink = document.getElementsByName('bookLink');
var addBtn = document.getElementsByName('bookAdd');
var toolTipBox = document.querySelector('#book-add input[name="bookLink"]');
var goodReads = document.querySelector('#book-add a');


addBox[0].addEventListener('focus', function () {
  console.log(document.querySelector('.wrapper p[name="warning"]'));
  document.querySelector('.wrapper p[name="warning"]').remove();
})

document.getElementsByTagName('html')[0].addEventListener('click', function (e) {
  if (e.target != toolTipBox && e.target != goodReads) {
  toolTipBox.style.display = "none";
  goodReads.className = "hidden";
  }
})

document.querySelector('#book-add a').addEventListener('click', function (e) {
    if (goodReads.className == "show" && e.target != toolTipBox) {
      toolTipBox.style.display = "none";
      goodReads.className = "hidden";
    } else {
    toolTipBox.style.display = "initial";
    goodReads.className = "show";
  }
})


addBtn[0].addEventListener('click', (e) => {
  e.preventDefault();
  if (addBox[0].value.length > 0){
    var li = document.createElement('LI');
    var bookName = document.createElement('span');
    bookName.classList.add('title');
    bookName.innerText = addBox[0].value;
    var bookLink = document.createElement('A');
    if (addLink[0].value.length > 0) {
      bookLink.classList.add('goodreads');
      bookLink.setAttribute('href', addLink[0].value);
      bookLink.setAttribute('target', '_blank');
    }
    var bookDelete = document.createElement('span');
    bookDelete.classList.add('delete');
    bookDelete.innerText = 'Delete';

// Add new book to local storage
    var n = (localStorage.length - 1) / 2 ;
    localStorage.setItem('Book_name'+n, addBox[0].value);
    localStorage.setItem('Book_link'+n, addLink[0].value);

    li.appendChild(bookName);
    li.appendChild(bookLink);
    li.appendChild(bookDelete);
    bookList.appendChild(li);
    addBox[0].value = '';
    addLink[0].value = '';
  } else {
    var warning = document.createElement('P');
    warning.setAttribute('name','warning');
    warning.innerText = "Please enter book's title";
    document.querySelector('.wrapper').appendChild(warning);
  }

})











};
