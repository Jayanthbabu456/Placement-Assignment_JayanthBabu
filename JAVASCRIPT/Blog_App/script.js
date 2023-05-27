// Fetch blogs from the API
function fetchBlogs() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      // Clear existing blogs
      document.getElementById("blogs").innerHTML = "";

      // Loop through blogs and append them to the UI
      data.forEach((blog) => {
        const blogDiv = document.createElement("div");
        blogDiv.className = "blog";

        const title = document.createElement("p");
        title.className = "title";
        title.innerText = blog.title;

        const body = document.createElement("p");
        body.className = "body";
        body.innerText = blog.body;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", () => {
          deleteBlog(blog.id);
        });

        blogDiv.appendChild(title);
        blogDiv.appendChild(body);
        blogDiv.appendChild(deleteBtn);

        document.getElementById("blogs").appendChild(blogDiv);
      });

      localStorage.setItem("blogs", JSON.stringify(data));
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

// Add new blog
function addBlog() {
  const titleInput = document.getElementById("title");
  const bodyInput = document.getElementById("body");

  const newBlog = {
    title: titleInput.value,
    body: bodyInput.value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBlog),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("New blog added:", data);
      titleInput.value = "";
      bodyInput.value = "";

      // Retrieve existing blogs from local storage
      const storedBlogs = localStorage.getItem("blogs");
      let blogs = [];

      if (storedBlogs) {
        blogs = JSON.parse(storedBlogs);
      }

      blogs.push(data);

      localStorage.setItem("blogs", JSON.stringify(blogs));

      document.getElementById("blogs").innerHTML = "";

      // Loop through blogs and append them to the UI
      blogs.forEach((blog) => {
        const blogDiv = document.createElement("div");
        blogDiv.className = "blog";

        const title = document.createElement("h3");
        title.className = "title";
        title.innerText = blog.title;

        const body = document.createElement("p");
        body.className = "body";
        body.innerText = blog.body;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", () => {
          deleteBlog(blog.id);
        });

        blogDiv.appendChild(title);
        blogDiv.appendChild(body);
        blogDiv.appendChild(deleteBtn);

        document.getElementById("blogs").appendChild(blogDiv);
      });

      document
        .getElementById("blogs-section")
        .scrollIntoView({ behavior: "smooth" });
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

// Delete blog
function deleteBlog(blogId) {
  const storedBlogs = localStorage.getItem("blogs");
  let blogs = [];

  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }

  const index = blogs.findIndex((blog) => blog.id === blogId);

  if (index !== -1) {
    blogs.splice(index, 1);

    localStorage.setItem("blogs", JSON.stringify(blogs));

    document.getElementById("blogs").innerHTML = "";

    // Loop through blogs and append them to the UI
    blogs.forEach((blog) => {
      const blogDiv = document.createElement("div");
      blogDiv.className = "blog";

      const title = document.createElement("h3");
      title.className = "title";
      title.innerText = blog.title;

      const body = document.createElement("p");
      body.className = "body";
      body.innerText = blog.body;

      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", () => {
        deleteBlog(blog.id);
      });

      blogDiv.appendChild(title);
      blogDiv.appendChild(body);
      blogDiv.appendChild(deleteBtn);

      document.getElementById("blogs").appendChild(blogDiv);
    });
  }
}

// Fetch blogs from local storage on page load
document.addEventListener("DOMContentLoaded", () => {
  const storedBlogs = localStorage.getItem("blogs");
  let blogs = [];

  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }

  // Display blogs from local storage
  blogs.forEach((blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.className = "blog";

    const title = document.createElement("h3");
    title.className = "title";
    title.innerText = blog.title;

    const body = document.createElement("p");
    body.className = "body";
    body.innerText = blog.body;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
      deleteBlog(blog.id);
    });

    blogDiv.appendChild(title);
    blogDiv.appendChild(body);
    blogDiv.appendChild(deleteBtn);

    document.getElementById("blogs").appendChild(blogDiv);
  });
});

// Add blog button click event
document.getElementById("add-btn").addEventListener("click", () => {
  addBlog();
});
