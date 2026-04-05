import { useState, useEffect } from 'react'
import './App.css'

const PAGE_SIZE = 10;

function App() {
  
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async() => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Products are here : ", products);
  }, [products]);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  }

  const goToPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  }


  return (
    <>
      <h1>PAGINATION</h1>
      <div className='pagination-numbers'>
        <button disabled={currentPage === 0} onClick={() => goToPreviousPage()} style={{cursor: 'pointer'}}>
          ⬅️
        </button>
        {
          [...Array(noOfPages).keys()].map((n) => (
            <button 
              className={'page-no ' + (n === currentPage ? 'active' : '')} 
              key={n} 
              onClick={() => handlePageChange(n)}
            >
              {n + 1}
            </button>
          ))
        }
        <button disabled={currentPage === noOfPages - 1} onClick={() => goToNextPage()} style={{cursor: 'pointer'}}>
          ➡️
        </button>
      </div>
      <div className="container">
        {products.slice(start, end).map((item) => (
          <div className="card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />

            <h3>{item.title}</h3>

            <p className="desc">
              {item.description.slice(0, 60)}...
            </p>

            <div className="price-section">
              <span className="price">₹{item.price}</span>
              <span className="discount">
                {item.discountPercentage}% OFF
              </span>
            </div>

            <div className="bottom">
              <span>⭐ {item.rating}</span>
              <span className={item.stock < 10 ? "low" : "stock"}>
                {item.stock < 10 ? "Low Stock" : "In Stock"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
