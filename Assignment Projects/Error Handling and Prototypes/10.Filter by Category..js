// Filter by Category.

/**Write a function that takes an array of products and returns a function that filters the array by a given product
category. The function must filter an eCommerce products array by a specific category. The closure filters
products using the filter() method. Finally, it returns a new array containing only the products with the same
category as the input. */

function filterByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  
  const products = [
    { name: "Product A", category: "category1" },
    { name: "Product B", category: "category2" },
    { name: "Product C", category: "category1" },
    { name: "Product D", category: "category3" },
  ];
  
  const filterProductsByCategory = filterByCategory(products);
  const filteredProducts = filterProductsByCategory("category1");
  console.log(filteredProducts); // [{ name: "Product A", category: "category1" }, { name: "Product C", category: "category1" }]
  