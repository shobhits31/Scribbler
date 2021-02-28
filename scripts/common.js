var modal1 = document.getElementById("signup-pop-up-modal");
var modal2 = document.getElementById("signin-pop-up-modal");

var btnAction1 = document.getElementsByClassName("signup-btn")[0];
var btnAction2 = document.getElementsByClassName("signin-btn")[0];

var span1 = document.getElementsByClassName("modal-close")[0];
var span2 = document.getElementsByClassName("modal-close")[1];

btnAction1.onclick = function () {
  modal1.style.display = "flex";
};

span1.onclick = function () {
  modal1.style.display = "none";
};

btnAction2.onclick = function () {
  modal2.style.display = "flex";
};

span2.onclick = function () {
  modal2.style.display = "none";
};
