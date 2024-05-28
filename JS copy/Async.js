
const mainDiv = document.getElementById("img");

const fetchData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/carts/1"); // Corrected URL
    const data = await response.json();
    displayData(data); // Adjusted to pass the data object directly
  } catch (error) {
    console.log("this is " + error);
  }
};

document.getElementById("btn").addEventListener("click", fetchData);

const displayData = (data) => {
  mainDiv.textContent = "";

  // Assuming the data has a structure like { products: [{ thumbnail, title, price, ... }, ...] }
  const product = data.products[0]; // Displaying the first product

  const img = document.createElement("img");
  img.src = product.thumbnail;
  img.alt = product.title;

  const title = document.createElement("h2");
  title.textContent = product.title;

  const price = document.createElement("h3");
  price.textContent = `$${product.price}`;

  mainDiv.appendChild(img);
  mainDiv.appendChild(title);
  mainDiv.appendChild(price);
};
