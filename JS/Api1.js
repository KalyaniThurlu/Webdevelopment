const mainDiv = document.getElementById("image");
function fetchData() {
  "https://api.thecatapi.com/v1/images/search"
    .then(function (res) {
      console.log(res);
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      displayData(data[0]);
    });
}
function displayData(data) {
  const mainDiv = "";
  const img = document.getElementById("img");
  img.src = data.url;
  img.alt = cat - img;
  img.style.width = "100px";
  img.style.height = "100px";
}
document.getElementById("btn").addEventListener("click", fetchData);
