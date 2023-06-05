// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Get item ID from URL
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('id');

// Get category from URL
const urlCategory = urlParams.get('category');

// Get reference to item container element
const itemContainer = document.querySelector('.inner-section');

// Get item detail from Firebase Firestore
const itemRef = db.collection(`/koraa/items/${urlCategory}`).doc(itemId);

// Increment view count and get item data on page load
itemRef.get()
  .then((doc) => {
    if (doc.exists) {
      const itemData = doc.data();
      // Increment view count
      itemRef.update({
        view: (itemData.view || 0) + 1
      })
        .then(() => {
          console.log("View count updated successfully");
        })
        .catch((error) => {
          console.log("Error updating view count:", error);
        });

      // Display item detail in container element
      document.getElementById('item-image').src = itemData.img;
      document.getElementById('item-name').textContent = itemData.name;
      document.getElementById('item-author').innerHTML = itemData.author;
      document.getElementById('item-views').textContent = itemData.view || 0;

      if (itemData.preview) {
        document.getElementById('item-link').href = itemData.preview;
      } else {
        // Set default link if preview is not available
        document.getElementById('item-link').href = '/404';
      }

      document.getElementById('item-desc').innerHTML = `${itemData.desc.replace(/\n/g, "<br>")}`;
    } else {
      itemContainer.innerHTML = '<h2>Item not found</h2>';
    }
  })
  .catch((error) => {
    console.log("Error getting item:", error);
  });
