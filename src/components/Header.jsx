import { Link, NavLink } from 'react-router-dom';
import { FaShopify } from 'react-icons/fa6';
import { useContext, useEffect, useState } from 'react';
import api from '../utils/api';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

function Header() {
  const [categories, setCategories] = useState([]);

  /// to change category
  const { setSelectedCategory } = useContext(ProductContext);
  //- the quantity of products in the basket
  const { basket } = useContext(CartContext);

  //-  total number of products in the basket
  const totalProduct = basket.reduce((total, curr) => total + curr.amount, 0);
  useEffect(() => {
    //- category verilerini alalım
    api.get(`/products/categories`).then(res => {
      setCategories(res.data);
    });
  }, []);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link
          className="navbar-brand text-info d-flex align-items-center gap-2"
          to="/"
        >
          <FaShopify className="fs-2" />
          Shopping
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title text-info"
              id="offcanvasDarkNavbarLabel"
            >
              Shopping Cart
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav d-flex justify-content-end flex-grow-1 pe-3 align-items-md-center gap-3">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item position-relative">
                <NavLink className="nav-link" to="/cart">
                  Shopping
                  <span className="badge bg-danger rounded-4 position-absolute top-0 end--1 ">
                    {totalProduct}
                  </span>
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </button>
                <ul className="dropdown-menu dropdown-menu-dark text-light">
                  <li>
                    <Link
                      to={'/'}
                      onClick={() => setSelectedCategory('all')}
                      className="dropdown-item text-capitalize"
                    >
                      All
                    </Link>
                  </li>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        to={'/'}
                        onClick={() => setSelectedCategory(category)}
                        className="dropdown-item text-capitalize"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
