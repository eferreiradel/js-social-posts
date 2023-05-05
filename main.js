const posts = [
  {
    id: 2,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Sofia Perlari",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 120,
    created: "2021-09-03",
  },
  {
    id: 3,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=234",
    author: {
      name: "Chiara Passaro",
      image: "https://unsplash.it/300/300?image=20",
    },
    likes: 78,
    created: "2021-05-15",
  },
  {
    id: 4,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Luca Formicola",
      image: null,
    },
    likes: 56,
    created: "2021-04-03",
  },
  {
    id: 5,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=534",
    author: {
      name: "Alessandro Sainato",
      image: "https://unsplash.it/300/300?image=29",
    },
    likes: 95,
    created: "2021-03-05",
  },
];

//---->

const postList = document.querySelector(".posts-list");
const post = document.querySelector(".post");

generatePost();
function generatePost() {
  for (counter = 0; counter < posts.length; counter++) {
    let newPost = post.cloneNode(true);
    newPost.setAttribute("id", posts[counter].id);

    document.querySelector(".post-meta__author").innerHTML =
      posts[counter].author.name;
    document.querySelector(
      ".post-meta__icon"
    ).innerHTML = `<img class="profile-pic" src="${posts[counter].author.image}"></img>`;
    document.querySelector(".post-meta__time");

    document.querySelector(
      ".post__text"
    ).innerHTML = `${posts[counter].content}`;
    document.querySelector(
      ".post__image"
    ).innerHTML = `<img class="post__image" src="${posts[counter].media}"></img>`;

    document.querySelector(".js-likes-counter").innerHTML =
      posts[counter].likes;

    console.log(counter);
    postList.appendChild(newPost);
  }
}

document.querySelectorAll(".like-button").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add("like-button--liked");
  });
});
