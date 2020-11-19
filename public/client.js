const input = document.querySelector("#name");

const getList = function () {
  console.log("Get list");
  let options = {
    method: "GET",
  };
  fetch("/users", options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var panel = document.createElement("div");
      data.forEach((element) => {
        var card = document.createElement("h1");
        card.innerText = element.name;
        panel.appendChild(card);
      });
      var body = document.getElementById("main");
      body.appendChild(panel);
    });
};

$(document).ready(function () {
  $("#buttonJquery").click(function () {
    $.ajax({
      url: "/users",
      success: function (result) {
        result.forEach((element) => {
          $("body").append("<h1>" + element.name + "</h1>");
        });
      },
    });
  });
});

const createUser = function () {
  console.log("create");
  let userName = { name: input.value };
  let options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(userName),
  };
  fetch("/users", options)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
const form = document.querySelector(".form");
form.addEventListener("submit", createUser);
const buttonGet = document.querySelector(".buttonGetList");
buttonGet.addEventListener("click", getList);
