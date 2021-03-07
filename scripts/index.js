// Redirects to postslist page
function loadAllPosts() {
  window.location.href = "./html/postslist.html";
}

// Displays Create Post modal
function showCreatePost() {
  var createPostModal = document.getElementById("createpost-pop-up-modal");
  createPostModal.style.display = "flex";
}

// Closes Create Post modal
function hideCreatePost() {
  var createPostModal = document.getElementById("createpost-pop-up-modal");
  createPostModal.style.display = "none";
}
