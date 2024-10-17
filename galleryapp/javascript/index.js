window.addEventListener("load", setupGallery);

function setupGallery() {
  var i,
    links = document.querySelectorAll("#images a");

  for (i = 0; i < links.length; i++) {
    links[i].addEventListener("click", showPic);
  }
}
function showPic(evt) {
  evt.preventDefault();

  var source = this.getAttribute("href");
  var title = this.getAttribute("title");

  var placeholder = document.querySelector("#placeholder");
  placeholder.setAttribute("src", source);
  placeholder.setAttribute("alt", title);

  var description = document.querySelector("#description");
  description.textContent = title;
}
