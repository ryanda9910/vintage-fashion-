const link = [
  {
    navlink: "index.html",
    bloglink: "blog1.html",
  },
  {
    navlink: "about.html",
    bloglink: "blog2.html",
  },
  {
    navlink: "style.html",
    bloglink: "blog3.html",
  },
];

const navlink = link.map((item) => item.navlink);
const bloglink = link.map((item) => item.bloglink);

// function to Blog Page
blog_link = (e) => {
  e.preventDefault()
  document.getElementById("link-one").href = bloglink[0];
  document.getElementById("link-two").href = bloglink[1];
  document.getElementById("link-three").href = bloglink[2];
};

// Direct to Blog Page
blog_link();

// function for navigation bar
nav_link = (e) => {
  e.preventDefault()
  document.getElementById("nav-one").href = navlink[0];
  document.getElementById("nav-two").href = navlink[1];
  document.getElementById("nav-three").href = navlink[2];
};
// Direct for Navigation Bar
nav_link();
