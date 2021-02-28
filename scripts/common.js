var modal = document.getElementById("signup-pop-up-modal");

var btnAction = document.getElementsByClassName("signup-btn")[0];

var span = document.getElementsByClassName("modal-close")[0];

btnAction.onclick = function () {
  modal.style.display = "flex";
};

span.onclick = function () {
  modal.style.display = "none";
};
