var galleryItems = document.getElementsByClassName('box');
var loadMoreBtn = document.getElementById('load-more-btn');
var itemsToShow = 20;
var visibleItems = 0;

function showItems() {
  for (var i = visibleItems; i < visibleItems + itemsToShow; i++) {
    if (galleryItems[i]) {
      galleryItems[i].style.display = 'block';
    }
  }
  visibleItems += itemsToShow;

  if (visibleItems >= galleryItems.length) {
    loadMoreBtn.style.display = 'none';
  }
}

loadMoreBtn.addEventListener('click', showItems);

// Initially hide all items
for (var i = 0; i < galleryItems.length; i++) {
  galleryItems[i].style.display = 'none';
}

// Initially show the first set of items
showItems();