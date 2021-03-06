var postTitle = document.getElementById("post-header");
var postContent = document.getElementById("content");
var editButton = document.getElementById("edit-btn");
var saveButton = document.getElementById("save-btn");
var updatedPostTitle = "UPDATED: " + postTitle.innerHTML;
var updatedPostContent = "UPDATED: " + postContent.innerHTML;
var numberOfClick = 0;

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
  postTitle.innerHTML = updatedPostTitle;
  postContent.innerHTML = updatedPostContent;
}

function addLike() {
  var likeButton = document.getElementById("add-likes");
  likeButton.innerHTML =
    '<i class="fa fa-thumbs-up ">' + "</i>" + "&nbsp;" + "Liked!";
  likeButton.style.border = "none";
  numberOfClick += 1;
  if (numberOfClick != 0) {
    if (numberOfClick == 1) {
      document.getElementById("like-count").innerHTML =
        numberOfClick + " person likes this!";
    } else {
      document.getElementById("like-count").innerHTML =
        numberOfClick + " people likes this!";
    }
  }
}
