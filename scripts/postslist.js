// Redirects to Post page
function showPost() {
  window.location.href = "../html/post.html";
}

var deleteModal = document.getElementById("delete-modal");
var postToBeDeleted;

// Invokes on clicking trash button on a post
function deletePost(postId) {
  postToBeDeleted = document.getElementById(postId);
  deleteModal.style.display = "flex";
}

// Invokes on clicking "Yes" button on confirmation screen
function deletePostConfirm() {
  postToBeDeleted.remove();
  deleteModal.style.display = "none";
}

// Closes delete modal
function closeDeleteModal() {
  deleteModal.style.display = "none";
}
