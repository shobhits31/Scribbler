var postTitle = document.getElementById("header");
var postContent = document.getElementById("content");
var editButton = document.getElementById("edit-btn");
var saveButton = document.getElementById("save-btn");
var updatedPostTitle = "UPDATED: " + postTitle.innerHTML;
var updatedPostContent = "UPDATED: " + postContent.innerHTML;

function editPostContent() {
  postTitle.contentEditable = "true";
  postContent.contentEditable = "true";
  postTitle.style.border = "1px solid pink";
  postContent.style.border = "1px solid pink";
  editButton.style.display = "none";
  saveButton.style.display = "block";
}

function savePostContent() {
  postContent.contentEditable = "false";
  postTitle.contentEditable = "false";
  postTitle.style.border = "none";
  postContent.style.border = "none";
  editButton.style.display = "block";
  saveButton.style.display = "none";
}
