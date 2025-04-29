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
      booksObj.forEach((book) => {
        // console.log(book.title);

        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

        col.innerHTML = `<div class="card">
                      <img src=${book.img} class="card-img-top"  alt="...">
                      <div class="card-body">
                          <h5 class="card-title text-truncate">${book.title}</h5>
                          <p class="card-text">${book.price}</p>
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
