function randomColor() {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}

const colorButton = document.getElementById('color')
const background = document.querySelector('div')
colorButton.addEventListener('click', function() {
  background.style.backgroundColor = randomColor()
  colorButton.classList.add('btn', 'btn-primary')
})

const textButton = document.getElementById('text')
const link = document.getElementsByTagName('a')
textButton.addEventListener('click', function() {
  textButton.innerHTML = 'Link is removed!'
  link[0].removeAttribute('href')
})

const addButton = document.getElementById('add')
const deleteButton = document.getElementById('delete')
const ul = document.querySelector('ul')
let counter = 1
addButton.addEventListener('click', function() {
  list = document.createElement('li')
  list.innerHTML = `Item ${counter}`
  ul.appendChild(list)
  counter++
})
deleteButton.addEventListener('click', function() {
  ul.removeChild(ul.childNodes[0])
})

// jQuery Equivalent
// $( "#color" ).click(function() {
//     $(this).addClass( "btn btn-primary" );
//     $('div:first').css("background-color",randomColor());
// });

// $( "#text" ).click(function() {
//     $( this ).text("Link is removed!");
//     $('a').removeAttr("href");
// });

// let counter = 1;
// $( "#add" ).click(function() {
//     $( 'ul' ).append(`<li>Item ${counter}</li>`);
//     counter++
// });
// $( "#delete" ).click(function() {
//     $( 'li:first' ).remove();
// });
