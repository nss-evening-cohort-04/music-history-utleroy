var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");

listLink.addEventListener("click", function(event) {
  event.preventDefault();
  addView.classList.add("hidden");

  listView.classList.add("visible");
  listView.classList.remove("hidden");
});

var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

addLink.addEventListener("click", function() {
  listView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

});