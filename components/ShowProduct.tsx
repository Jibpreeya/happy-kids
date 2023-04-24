import { useState, useEffect } from "react";

function ShowProduct() {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const newProducts = products.filter(
      (product) => new Date(product.createdDate) > weekAgo
    );
    setNewArrivals(newProducts);
  }, []);

  return (
    <div>
      <h1>New Arrivals</h1>
      <ul>
        {newArrivals.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShowProduct;
