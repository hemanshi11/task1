function render() {
  fetch("photos.json")
    .then((response) => response.json())
    .then((data) => {
      var result = data.result;
      var dataContainer = document.getElementById("dataContainer");
      let all = document.getElementById("all");
      let totalcount = result.length;
      all.innerHTML = "Product List: " + totalcount;

      var clickReviews = document.getElementById("review");
      var emptyReviews = result.filter(function (product) {
        return product.property_reviews > 0;
      });
      clickReviews.innerHTML = `Reviews: ${emptyReviews.length}`;

      clickReviews.addEventListener("click", function () {
        renderProductCards(emptyReviews);
      });

      var clickShowAll = document.getElementById("all");
      clickShowAll.addEventListener("click", function () {
        renderProductCards(result);
      });

      var clickShowBadReview = document.getElementById("showbadreview");
      var badReviews = result.filter(function (product) {
        return product.property_reviews < 5;
      });
      clickShowBadReview.innerHTML = `Bad Reviews: ${badReviews.length}`;

      clickShowBadReview.addEventListener("click", function () {
        var noReviews = result.filter(function (product) {
          return product.property_reviews === 0;
        });
        renderProductCards(noReviews);
      });

      // Function to create a product card
      function createProductCard(product, date) {
        var card = document.createElement("div");
        var ratingStars = "";
        var filledStars = product.property_reviews;
        var emptyStars = 5 - filledStars;

        for (var i = 0; i < filledStars; i++) {
          ratingStars += '<i class="icon fa-solid fa-star"></i>';
        }

        for (var i = 0; i < emptyStars; i++) {
          ratingStars += '<i class="icon fa-regular fa-star"></i>';
        }

        card.innerHTML = `
          <div class="product-card">
            <img class="img" src="${product.image[product.image.length - 1]}" />
            <div class="title-css">
              <div class="product-name">${product.title.slice(0, 15)}</div>
              <div class='price'>
                <div class="product-price">${product.price.map((e) => e.number + "  " + e.currency.slice(0, 1))}</div>
              </div>
            </div>
            <hr/>
            <div class='rating'>
              <div class="product-description">${date.slice(0, 9)}</div>
              <div class="product-rating">Rating: ${ratingStars}</div>
            </div>
          </div>`;

        return card;
      }

      // Function to render product cards based on the given products array
      function renderProductCards(products) {
        dataContainer.innerHTML = "";

        products.forEach(function (product) {
          var createdAt = new Date(product.createdAt);
          var date = createdAt.toLocaleString("default", { date: "long" });

          var card = createProductCard(product, date);
          dataContainer.appendChild(card);
        });
      }

      // Show all products initially
      renderProductCards(result);
    })
    .catch((error) => console.log(error));
}

render();
