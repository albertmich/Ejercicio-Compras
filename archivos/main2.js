const errorAlertElement = document.getElementById("error-alert");
const infoAlertElement = document.getElementById("info-alert");
const cardContainerElement = document.getElementsByClassName("card-container")[0];
const URLMain="https://fakestoreapi.com/products/";

const fetchData = () => {
    fetch("https://fakestoreapi.com/products/")
    .then(res => {
        console.log(res);
        res.json().then(r => {
        console.log(r[1]);
        infoAlertElement.innerHTML = `${r.title}`;
        infoAlertElement.style.display = "block";
        createCards(r);
        })
    })
.catch(err =>{
    errorAlertElement.innerHTML = `<b>Data Retrieval Error!</b>`;
    errorAlertElement.style.display = "block";
    console.log(err);
});
}     

const createCards = data => {
    data.forEach(e => {
        cardContainerElement.insertAdjacentHTML("beforeend", `
            <div class="card" style="width: 18rem;">
              <img src="${e.image}" class="card-img-top" alt="${e.description}">
              <div class="card-body">
                <h5 class="card-title">${e.title}</h5>
                <p class="card-text">${e.description}</p>
                <p class="card-text"><strong>$${e.price} USD</strong></p>
                <p class="rating card-text"><strong>Rating: </strong><i class="star-icon bi bi-star-fill"></i> ${e.rating.rate} (${e.rating.count} reviews)</p>
                <p class="categories card-text"><strong>Category:</strong> ${e.category}</strong></p>
              </div>
            </div>
            `
      )
        });
      }
fetchData();      