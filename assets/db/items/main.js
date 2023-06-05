// Inisialisasi aplikasi Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Make firebase auth and reference
const auth = firebase.auth();
const db = firebase.firestore();

document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);
});

const exploreContainer = document.querySelector(".items");

const fetchTrending = (data) => {
  let html = "";
  data.forEach((doc) => {
    const product = doc.data();

    // Calculate the time elapsed since the upload
    const uploadTime = product.time.toDate(); // Convert Firestore timestamp to JavaScript Date object
    const currentTime = new Date();
    const timeDiff = Math.abs(currentTime - uploadTime);
    const minutesDiff = Math.floor(timeDiff / (1000 * 60));
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let timeDisplay;

    if (daysDiff >= 7) {
      const uploadMonth = uploadTime.getMonth() + 1; // Get month (0-11) and add 1 to match the desired format
      const uploadYear = uploadTime.getFullYear();
      timeDisplay = `${uploadMonth}/${uploadYear}`;
    } else if (daysDiff >= 1) {
      timeDisplay = `${daysDiff} day${daysDiff > 1 ? 's' : ''}`;
    } else if (hoursDiff >= 1) {
      timeDisplay = `${hoursDiff} hour${hoursDiff > 1 ? 's' : ''}`;
    } else {
      timeDisplay = `${minutesDiff} minute${minutesDiff > 1 ? 's' : ''}`;
    }
    const li = `
      <div class="col">
        <div class="product-card">
          <div class="product-media">
            <a class="product-image" href="#" data-bs-toggle="modal" data-bs-target="#product-view-${doc.id}">
              <img src="${product.img}" alt="Items">
            </a>
            <div class="product-widget">
              <a title="Product View" href="#" class="ri-eye-line" data-bs-toggle="modal" data-bs-target="#product-view-${doc.id}"></a>
            </div>
          </div>
          <div class="product-content">
            <div class="items-author">
              <a>by ${product.author}</a>
            </div>
            <h6 class="product-name">
              <a href="#" data-bs-toggle="modal" data-bs-target="#product-view-${doc.id}">${product.name}</a>
            </h6>
          </div>
        </div>
      </div>
    `;

    html += li;

    const modal = `
    <div class="modal fade" id="product-view-${doc.id}">
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="modal-close ri-close-line" data-bs-dismiss="modal"></button>
                <div class="product-view">
                    <div class="row">
                        <div class="col-md-6 col-lg-6">
                            <div class="view-gallery">
                                <ul class="preview-slider slider-arrow">
                                    <li><img src="${product.img}" alt="product"></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6">
                            <div class="view-details">
                                <h3 class="view-name"><a>${product.name}</a></h3>
                                <div class="view-meta">
                                    <p>${timeDisplay}</p>
                                </div>
                                <div class="view-meta">
                                    <p>by :<span>${product.author}</span></p>
                                    <p>view :<span>${product.view || 0}</span></p>
                                </div>
                                <p class="view-desc">${product.desc || 'Desc Tidak Tersedia'}</p>
                                <div class="view-add-group">
                                    <button class="product-add" data-item-id="${doc.id}">
                                        <span>View Items</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    html += modal;
  });

  exploreContainer.innerHTML = html;

  // Add event listener to product cards
  const productCards = document.querySelectorAll(".product-add");
  productCards.forEach((card) => {
    card.addEventListener("click", (event) => {
      const itemId = event.currentTarget.getAttribute("data-item-id");
      const currentPath = window.location.pathname;
      let category;
      if (currentPath.includes("/items/mobile")) {
        category = "mobile";
      } else if (currentPath.includes("/items/logo")) {
        category = "logo";
      } else if (currentPath.includes("/items/product-design")) {
        category = "product design";
      } else if (currentPath.includes("/items/web-design")) {
        category = "web design";
      }
      // Redirect to item detail page using the item ID and category
      if (category) {
        window.location.href = `/details/?category=${category}&id=${itemId}`;
      }
    });
  });
};

window.addEventListener("beforeunload", () => {
  const modalBackdrop = document.querySelector(".modal-backdrop");
  if (modalBackdrop) {
    modalBackdrop.remove();
  }

  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.remove();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  let category;
  if (currentPath.includes("/items/mobile")) {
    category = "mobile";
  } else if (currentPath.includes("/items/logo")) {
    category = "logo";
  } else if (currentPath.includes("/items/product-design")) {
    category = "product design";
  } else if (currentPath.includes("/items/web-design")) {
    category = "web design";
  }

  if (category) {
    const collectionPath = `/koraa/items/${category}`; // Menyesuaikan path koleksi dengan kategori
    db.collection(collectionPath)
      .orderBy("time", "desc")
      .onSnapshot((snapshot) => {
        fetchTrending(snapshot.docs);
      });
  }
});
