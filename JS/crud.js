let data = [
  { id: 1, name: "latha", email: "abc@gmail.com" },
  { id: 2, name: "setha", email: "xyz" },
];

function readAll() {
  localStorage.setItem("data", JSON.stringify(data));
  var tabledata = document.querySelector(".data_table");
  var storedData = localStorage.getItem("data");
  var ObjectData = JSON.parse(storedData);
  var elements = "";
  ObjectData.map((record) => {
    elements += `<tr>
              <td>${record.name}</td>
              <td>${record.email}</td>
              <td>
                <button class="btn btn-secondary" onclick="edit(${record.id})">Edit</button>
                <button class="btn btn-danger" onclick="del(${record.id})">Delete</button>
              </td>
            </tr>`;
  });
  tabledata.innerHTML = elements;
}

function create() {
  document.querySelector(".create_form").style.display = "block";
  document.querySelector(".add_div").style.display = "none";
}

function add(event) {
  event.preventDefault();
  var name = document.querySelector(".create_form .name").value;
  var email = document.querySelector(".create_form .email").value;
  var newId = data.length ? data[data.length - 1].id + 1 : 1;
  var newObject = { id: newId, name: name, email: email };
  data.push(newObject);
  document.querySelector(".create_form").reset();
  document.querySelector(".create_form").style.display = "none";
  document.querySelector(".add_div").style.display = "block";
  readAll();
}

function edit(id) {
  document.querySelector(".update_form").style.display = "block";
  var obj = data.find((rec) => rec.id === id);
  document.querySelector(".update_form .id").value = obj.id;
  document.querySelector(".update_form .uname").value = obj.name;
  document.querySelector(".update_form .uemail").value = obj.email;
}

function update(event) {
  event.preventDefault();
  var id = parseInt(document.querySelector(".update_form .id").value);
  var uname = document.querySelector(".update_form .uname").value;
  var email = document.querySelector(".update_form .uemail").value;
  var index = data.findIndex((rec) => rec.id === id);
  data[index] = { id: id, name: uname, email: email };
  document.querySelector(".update_form").reset();
  document.querySelector(".update_form").style.display = "none";
  readAll();
}

function del(id) {
  data = data.filter((rec) => rec.id !== id);
  readAll();
}

document.addEventListener("DOMContentLoaded", readAll);
