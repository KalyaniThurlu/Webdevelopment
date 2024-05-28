const mainDiv = document.getElementById("image");

function fetchData() {
  fetch("https://api.thecatapi.com/v1/images/search").then(function (res) {
    console.log(res);
    return res.json().then(function (data) {
      console.log(data);
      displayData(data[0]);
    });
  });
}

function displayData(data) {
  mainDiv.textContent = "";
  const img = document.createElement("img");
  img.src = data.url;
  img.alt = "cat-image";
  img.style.width = "200px";
  img.style.height = "200px";
  mainDiv.appendChild(img);
}
document.getElementById("btn").addEventListener("click", fetchData);
