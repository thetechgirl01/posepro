var filterButtons = document.getElementsByClassName('filter-button');
    var galleryItems = document.getElementsByClassName('gallery-item');

    function filterGallery(category) {
      for (var i = 0; i < galleryItems.length; i++) {
        var item = galleryItems[i];

        if (category === 'all' || item.dataset.category === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    }

    for (var i = 0; i < filterButtons.length; i++) {
      filterButtons[i].addEventListener('click', function() {
        var selectedCategory = this.dataset.filter;

        // Remove 'active' class from all buttons
        for (var j = 0; j < filterButtons.length; j++) {
          filterButtons[j].classList.remove('active');
        }

        // Add 'active' class to the clicked button
        this.classList.add('active');

        // Filter the gallery based on the selected category
        filterGallery(selectedCategory);
      });
    }