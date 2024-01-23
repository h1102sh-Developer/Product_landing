const jsonData = {
    "data": [
      {
        "name": "Cosmetics",
        "productList": [
          {
            "name": "Hair Oil",
            "price": 122
          },
          {
            "name": "Face wash",
            "price": 123
          }
        ]
      },
      {
        "name": "Household",
        "productList": [
          {
            "name": "Dish Soap",
            "price": 55
          },
          {
            "name": "Laundry Detergent",
            "price": 99
          }
        ]
      }
    ]
  };
  
  const cart = [];
  
  function renderProductBox(category, product) {
    const productBoxContainer = document.createElement("div");
    productBoxContainer.classList.add("product-box-container");
  
    const productBox = document.createElement("div");
    productBox.classList.add("product-box");
  
    const productName = document.createElement("p");
    productName.textContent = product.name;
  
    const productPrice = document.createElement("p");
    productPrice.textContent = `$${product.price.toFixed(2)}`;
  
    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.addEventListener("click", () => addToCart(category, product));
  
    const removeFromCartBtn = document.createElement("button");
    removeFromCartBtn.textContent = "Remove from Cart";
    removeFromCartBtn.addEventListener("click", () => removeFromCart(category, product));
  
    productBox.appendChild(productName);
    productBox.appendChild(productPrice);
    productBox.appendChild(addToCartBtn);
    productBox.appendChild(removeFromCartBtn);
  
    productBoxContainer.appendChild(productBox);
  
    return productBoxContainer;
  }
  
  function renderProducts(category, productList) {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");
  
    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = category;
  
    categoryContainer.appendChild(categoryTitle);
  
    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products-container");
  
    productList.forEach((product, index) => {
      if (index % 2 === 0) {
        const row = document.createElement("div");
        row.classList.add("product-row");
  
        const productBox1 = renderProductBox(category, product);
        row.appendChild(productBox1);
  
        const nextProduct = productList[index + 1];
        if (nextProduct) {
          const productBox2 = renderProductBox(category, nextProduct);
          row.appendChild(productBox2);
        }
  
        productsContainer.appendChild(row);
      }
    });
  
    categoryContainer.appendChild(productsContainer);
  
    document.getElementById("app").appendChild(categoryContainer);
  }
  
  function addToCart(category, product) {
    cart.push({ category, ...product });
    console.log("Product added to the cart.");
    console.log("List of products in the cart:", cart);
    showNotification("Product Added to the Cart");
  }
  
  function removeFromCart(category, product) {
    const index = cart.findIndex(item => item.category === category && item.name === product.name);
    if (index !== -1) {
      cart.splice(index, 1);
      console.log("Product removed from the cart.");
      console.log("List of products in the cart:", cart);
      showNotification("Product Removed from the Cart");
    }
  }
  
  function showNotification(message) {
    alert(message);
  }
  
  // Render products from JSON data
  jsonData.data.forEach(category => {
    renderProducts(category.name, category.productList);
  });
