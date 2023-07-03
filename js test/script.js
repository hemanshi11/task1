function render() {
  fetch("photos.json")
    .then((response) => response.json())
    .then((data) => {
      var result = data.result;
      var dataContainer = document.getElementById("dataContainer");
      let all = document.getElementById("all");
      let totalcount = result.length-5;
      let PetFriendly = document.getElementById('PetFriendly');
      let FamilyFreindly = document.getElementById('FamilyFreindly');
      let Luxury = document.getElementById('Luxury')
      var luxuries = result.filter(function (product) {
        return product.filter.includes('Luxury')
      })
      Luxury.addEventListener('click', function () {
        renderProductCards(luxuries)
      })
      var FamilyFreind = result.filter(function (product) {
        return product.filter.includes('Family Friendly')
      })
      FamilyFreindly.addEventListener('click', function () {
        renderProductCards(FamilyFreind)
      })
      var petFriendly = result.filter(function (product) {
        return product.filter.includes("Pet Friendly");
      });
      PetFriendly.addEventListener('click', function () {
        renderProductCards(petFriendly)
      })

      all.innerHTML = "Product List: " + totalcount;

      var clickReviews = document.getElementById("review");
      var emptyReviews = result.filter(function (product) {
        return product.property_reviews >= 1;
      });
      clickReviews.innerHTML = `Reviews: ${emptyReviews.length - 4}`;

      clickReviews.addEventListener("click", function () {
        renderProductCards(emptyReviews);
      });

      var clickShowAll = document.getElementById("all");
      clickShowAll.addEventListener("click", function () {
        renderProductCards(result);
      });

      var clickShowBadReview = document.getElementById("showbadreview");
      var badReviews = result.filter(function (product) {
        return product.property_reviews < 1;
      });
      clickShowBadReview.innerHTML = `Bad Reviews: ${badReviews.length }`;

      clickShowBadReview.addEventListener("click", function () {
        var noReviews = result.filter(function (product) {
          return product.property_reviews === 0;
        });
        renderProductCards(noReviews);
      });

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
                <div class="product-price">${product.price[0].number + " " + product.price[0].currency.slice(0,1)}</div>
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
      function renderProductCards(products) {
        dataContainer.innerHTML = "";
        products.forEach(function (product) {
          var createdAt = new Date(product.createdAt);
          var date = createdAt.toLocaleString("default", { date: "long" });
          var card = createProductCard(product, date);
          dataContainer.appendChild(card);
        });
      }
      renderProductCards(result);
    })
    .catch((error) => console.log(error));
}
render();