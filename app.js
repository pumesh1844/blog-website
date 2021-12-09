// DOM Elements
const post = document.getElementById("post");
const postsContainer = document.querySelector(".posts");
const nameInput = post["name"];
const titleInput = post["title"];
const detailsInput = post["details"];

/* 
{
  name: text,
  title: text,
  details: text
}
*/

const posts = JSON.parse(localStorage.getItem("posts")) || [];

const addpost = (name, title, details) => {
  posts.push({
    name,
    title,
    details,
  });

  localStorage.setItem("posts", JSON.stringify(posts));

  return { name, title, details };
};

const createpostElement = ({ name, title, details }) => {
  // Create elements
  const postDiv = document.createElement("div");
  const postName = document.createElement("h2");
  const posttitle = document.createElement("p");
  const postdetails = document.createElement("p");

  // Fill the content
  postName.innerText = "Author name: " + name;
  posttitle.innerText = "Article name: " + title;
  postdetails.innerText = "Article Description: " + details;

  // Add to the DOM
  postDiv.append(postName, posttitle, postdetails);
  postsContainer.appendChild(postDiv);

  postsContainer.style.display = posts.length === 0 ? "none" : "flex";
};

postsContainer.style.display = posts.length === 0 ? "none" : "flex";

posts.forEach(createpostElement);

post.onsubmit = e => {
  e.preventDefault();

  const newpost = addpost(
    nameInput.value,
    titleInput.value,
    detailsInput.value
  );

  createpostElement(newpost);

  nameInput.value = "";
  titleInput.value = "";
  detailsInput.value = "";
};

