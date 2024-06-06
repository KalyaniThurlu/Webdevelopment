const mainDiv = document.getElementById("products");
function fetchData() {
  fetch("https://dummyjson.com/carts/1")
    .then(function (res) {
      console.log(res);
      return res.json();
    })
    .then(function (data) {
      displayData(data.products);
    })
    .catch(function (error) {
      console.log("this is erroe" + error);
    });
}
fetchData();
function displayData(data) {
  data.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("carts");
    const id = document.createElement("h1");
    id.textContent = `id:${element.id}`;
    const title = document.createElement("p");
    title.textContent = element.title;
    const price = document.createElement("h2");
    price.textContent = `price:${element.price}`;
    const thumbnail = document.createElement("img");
    thumbnail.src = element.thumbnail;
    thumbnail.alt = element.title;
    div.appendChild(id);
    div.appendChild(title);
    div.appendChild(price);
    div.appendChild(thumbnail);
    mainDiv.appendChild(div);
  });
}
displayData(data);
