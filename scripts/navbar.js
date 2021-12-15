const searchForm = document.querySelector(".input-group")
const searchBar = document.querySelector("#search-bar");
const openSearch = document.querySelector("#search-icon");
const bookmarkIcon = document.querySelector("#bookmark-icon");
const closeSearch = document.querySelector("#search-close");
const navigationLinks = document.querySelector(".navigation-links");

openSearch.onclick = () => {
  searchBar.style.display = "block";
  searchForm.style.display = "flex";
  closeSearch.style.opacity = 1;
  searchBar.style.animation = "fade_in_show .4s ease-out";
  closeSearch.style.animation = "fade_in_show";
  searchBar.focus();
  openSearch.style.opacity = 0;
  bookmarkIcon.style.opacity = 0;
  navigationLinks.style.opacity = 0;
};

closeSearch.onclick = () => {
  searchBar.style.display = "none";
  searchForm.style.display = "none";
  closeSearch.style.opacity = 0;
  openSearch.style.opacity = 1;
  bookmarkIcon.style.opacity = 1;
  navigationLinks.style.opacity = 1;
};

