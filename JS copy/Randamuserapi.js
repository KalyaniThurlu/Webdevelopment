
const mainDiv = document.getElementById("img");

const fetchData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    displayData(data.products[0]); // Assuming data.products[0] based on common API response structures
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

document.getElementById("btn").addEventListener("click", fetchData);

const displayData = (data) => {
  mainDiv.textContent = "";

  const img = document.createElement("img");
  img.src = data.thumbnail; // Assuming 'thumbnail' as a common image field name
  img.alt = data.title; // Assuming 'title' as a common name field

  const title = document.createElement("h2");
  title.textContent = `${data.brand} ${data.title}`; // Assuming 'brand' and 'title' fields

  const description = document.createElement("p");
  description.textContent = data.description; // Assuming 'description' field

  const price = document.createElement("h3");
  price.textContent = `$${data.price}`; // Assuming 'price' field

  // Append elements to mainDiv one by one
  mainDiv.appendChild(img);
  mainDiv.appendChild(title);
  mainDiv.appendChild(description);
  mainDiv.appendChild(price);
};
