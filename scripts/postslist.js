function showPost() {
  window.location.href = "../html/post.html";
}

var deleteModal = document.getElementById("delete-modal");
function deletePost() {
  deleteModal.style.display = "flex";
}

function closeDeleteModal() {
  deleteModal.style.display = "none";
}

function deletePostConfirm() {
  var deleteElement = document.getElementsByClassName("post")[0];
  deleteElement.remove();
}
