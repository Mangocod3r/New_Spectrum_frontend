// // const list = document.querySelector('#col-lg-6')
// //   const forms = document.forms

// //   const searchBar = forms['search-books'].querySelector('input');
// //   searchBar.addEventListener('keyup', (e) => {
// //     const term = e.target.value.toLowerCase()
// //     const books = list.getElementsByTagName('h1')
//     // console.log(books)
//     // Array.from(books).forEach((book) => {
//     //   const title = book.firstElementChild.textContent
//     //   if (title.toLowerCase().indexOf(e.target.value) != -1) {
//     //     book.style.display = 'block'
//     //   } else {
//     //     book.style.display = 'none'
//     //   }
//     // });
// //   });

// const users = list.getElementsByTagName('h1')

//   const searchInput = document.querySelector("[data-search]")

// // let users = []
// searchInput.addEventListener("input", e => {
//   const value = e.target.value.toLowerCase()
//   Array.from(users).forEach(user => {
//     const isVisible =
//       user.name.toLowerCase().includes(value) ||
//       user.email.toLowerCase().includes(value)
//     user.element.classList.toggle("hide", !isVisible)
//   })
// })