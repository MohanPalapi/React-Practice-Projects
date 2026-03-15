import { useState, useEffect } from "react";

function ProductCard({ title, image }) {
  return (
    <div className="productCard">
      <img src={image} alt="title-logo" className="product-logo" />
      <span>{title}</span>
    </div>
  );
}

const PAGE_SIZE = 10;

export default function Pagination() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchdata = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=200");
    const res = await data.json();
    setProducts(res.products);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const totalProducts = products.length;
  const numberOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const handleClick = (n) => {
    setCurrentPage(n);
  };
  return (
    <div>
      <h1>Pagination</h1>
      <div className="page-buttons">
        {[...Array(numberOfPages).keys()].map((n) => (
          <button className="page-button" onClick={() => handleClick(n)}>
            {n}
          </button>
        ))}
      </div>
      <div className="product-list">
        {products.slice(start, end).map((item) => (
          <ProductCard title={item?.title} image={item?.thumbnail} />
        ))}
      </div>
    </div>
  );
}
