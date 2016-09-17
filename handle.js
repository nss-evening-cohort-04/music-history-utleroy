var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");
var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

listLink.addEventListener("click", function(event) {
  event.preventDefault();
  addView.classList.add("hidden");

  listView.classList.add("visible");
  listView.classList.remove("hidden");
});


addLink.addEventListener("click", function() {
  listView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

});