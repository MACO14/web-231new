const books = [
    { titleName: 'To Kill a Mocking Bird', isbn: 9780812416800, pages: 423},
    { titleName: 'Pride & Prejudice', isbn: 9781503290563, pages: 323},
    { titleName: 'The Great Gatsby', isbn: 9780333791035, pages: 256},
]

const authors = [
    { firstName: 'Jane', lastName: 'Austen', genre: 'Romance'},
    { firstName: 'Louie', lastName: 'Giglio', genre: 'Religion'},
    { firstName: 'C.S.', lastName: 'Lewis', genre: 'Religion'},
]

let headers = ['titleName', 'isbn', 'pages'];

btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(header => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(header);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    
    table.appendChild(headerRow);

    myTable.appendChild(table);
})

function pressed(){
    let choice = document.getElementById("select").value;
    if (choice = books) {
        result = "To Kill a Mocking Bird", "The Great Gatsby", "Pride & Prejudice";
    }
    
    if (choice = authors) {
        result = "Jane Austen", "Louie Giglio", "C.S. Lewis";
    }
}