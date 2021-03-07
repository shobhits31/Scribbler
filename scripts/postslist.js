function showPost() {
  window.location.href = "../html/post.html";
}

var deleteModal = document.getElementById("delete-modal");
var postToBeDeleted;
function deletePost(postId) {
  postToBeDeleted = document.getElementById(postId);
  deleteModal.style.display = "flex";
}

function deletePostConfirm() {
  postToBeDeleted.remove();
  deleteModal.style.display = "none";
}

function closeDeleteModal() {
  deleteModal.style.display = "none";
}
