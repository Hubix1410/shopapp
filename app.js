
function showBooks() {
    fetch('http://localhost:3000/books', {
        method: "GET"
    })
        .then(response => response.json())
        .then(data => data.map( (element, index) => {
            let newBook = document.createElement('div');
            newBook.classList.add("book");
            newBook.innerHTML = "Title: " + element.name + " <br> Author: " + element.author;
            document.querySelector(".shop").appendChild(newBook);
        }));
}

showBooks();