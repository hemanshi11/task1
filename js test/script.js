fetch("photos.json")
  .then((response) => response.json())
  .then((data) => {
    var result = data.result;
    var dataContainer = document.getElementById("dataContainer");

    result.forEach(function (product) {
      var createdAt = new Date(product.createdAt);
    //   var month = createdAt.toLocaleString("default", { month: "long" });
      var date = createdAt.toLocaleString("default", { date: "long" });
 

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
            <div class="product-name"> ${product.title.slice(0, 15)}</div>
            <div class='price'>
              <div class="product-price">${product.price.map((e) => e.number +" "+ e.currency.slice(0, 1))}</div>
            </div>
          </div>
          <hr/>
          <div class='rating'>
            <div class="product-description"> ${date.slice(0, 9)}</div>
            <div class="product-rating">Rating: ${ratingStars}</div>
          </div>
        </div>`;

      dataContainer.appendChild(card);
    });
  })
  .catch((error) => console.log(error));

