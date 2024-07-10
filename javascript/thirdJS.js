function LoadPage() {
    // Retrieve JSON data and user's cluster choice from Local Storage
    const jsonData = JSON.parse(localStorage.getItem("jsonData"));
    const selectedCluster = localStorage.getItem("selectedCluster");

    // Get the book list based on the selected cluster
    const bookList = [];
    for (const book of jsonData.ClusterSpecifics) {
        if (book.cluster === selectedCluster) {
            bookList.push(book);
        }
    }
    document.querySelector("#headerText").innerHTML=` Cluster <strong> ${selectedCluster}</strong> Book List`;
    // Rest of your code to populate the book list and display it on the page



let bookListContainer = document.querySelector("#bookListContainer");

 

 
for (const book of bookList) {
    const bookHTML = `
        <tr>
        <th>ISBN</th>
        <th>Title</th>
        <th>#Pages</th>
        <th>Author</th>
        <th>Book Cover</th>
    </tr><tr>
            <td>${book.isbn}</td>
            <td>${book.title}</td>
            <td>${book.pages}</td>
            <td>${book.authors}</td>
            <td><img src="../images/${book.bookPic}" alt="${book.title}" /></td>
        </tr>
    `;

    // Append the bookHTML to the table body
    const bookList = document.getElementById("bookList");
    bookList.innerHTML += bookHTML;
}
}

function goBack() {
    location.assign("../index.html");  
}