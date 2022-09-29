function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
}

const EquiryFrom = () => {
  window.location.href = "./dashBoard.html";
  console.log("hello");
  Equiry();
};

const Equiry = () => {
  console.log("hello1");
  setTimeout(() => {
    document.getElementById("customize").click();
  }, 3000);
};
