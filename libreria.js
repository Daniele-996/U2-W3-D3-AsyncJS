const fetchCharacters = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((responseObj) => {
      console.log(responseObj);
      if (responseObj.ok) {
        return responseObj.json();
      }
    })
    .then((booksObj) => {
      console.log(booksObj);

      const row = document.querySelector(".charactersGrid");
      booksObj.forEach((books) => {
        console.log(books.title);

        const col = document.createElement("div");
        col.className = "col-md-3";

        col.innerHTML = `<div class="card">
                      <img src=${books.img} class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">${books.title}</h5>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                  </div>`;

        row.appendChild(col);
      });
    })

    .catch((error) => console.log(error));
};

window.onload = () => {
  fetchCharacters();
};
