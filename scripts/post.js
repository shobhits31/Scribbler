var postTitle = document.getElementById("post-header");
var postContent = document.getElementById("content");
var editButton = document.getElementById("edit-btn");
var saveButton = document.getElementById("save-btn");
var updatedPostTitle;
var updatedPostContent;
var numberOfClick = 0;

// Invokes when "Edit" button is clicked
function editPostContent() {
  postTitle.contentEditable = "true";
  postContent.contentEditable = "true";
  postTitle.style.border = "1px solid pink";
  postContent.style.border = "1px solid pink";
  editButton.style.display = "none";
  saveButton.style.display = "block";
  updatedPostTitle.value = postTitle.innerHTML;
  updatedPostContent.value = postContent.innerHTML;
}

// Invokes when "Save" button is clicked
function savePostContent() {
  postContent.contentEditable = "false";
  postTitle.contentEditable = "false";
  postTitle.style.border = "none";
  postContent.style.border = "none";
  editButton.style.display = "block";
  saveButton.style.display = "none";
  postTitle.innerHTML = "UPDATED: " + updatedPostTitle.value;
  postContent.innerHTML = "UPDATED: " + updatedPostContent.value;
}

// Method to add likes and update the count
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

// Method to add user comments and displaying it on page
function addComment(comment) {
  if (comment.value.length > 0) {
    var commentBox = document.getElementById("comment-list");
    commentBox.style.display = "flex";
    document.getElementById("comment-list").innerHTML +=
      '<p id="comment-posted">' + comment.value + "</p>";
    var userComment = document.getElementById("userComment");
    userComment.value = userComment.defaultValue;
  } else {
    alert("Please enter some comment");
  }
}
