if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (pos) {
    const { latitude, longitude } = pos.coords;
    console.log("latitude" + latitude, "longitude" + longitude);
  });
} else {
  console.log("this is error");
}
