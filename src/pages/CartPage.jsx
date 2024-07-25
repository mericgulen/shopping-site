import ShoppingCard from '../components/ShoppingCard';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import CartInfo from '../components/CartInfo';

function CartPage() {
  const { basket } = useContext(CartContext);

  //-  the quantity of products in the basket
  const totalAmount = basket.reduce((total, curr) => total + curr.amount, 0);
  //- total price
  const totalPrice = basket.reduce(
    (total, curr) => total + curr.price * curr.amount,
    0
  );
  return (
    <div className="container my-5 py-5 ">
      <h1>Shopping Cart</h1>
      <div className="row my-5 gap-4 gap-md-0">
        <div className="col-md-8">
          <div className="d-flex flex-column gap-3 ">
            {basket.length === 0 ? (
              <CartInfo />
            ) : (
              basket.map(product => (
                <ShoppingCard product={product} key={product.id} />
              ))
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-end  bg-info-subtle rounded-3  pe-4 w-100">
            <p className="d-flex pt-4 gap-2 align-items-center">
              <span>Total Quantity:</span>
              <span className="fw-bold fs-5">{totalAmount}</span>
            </p>
            <p className="d-flex gap-2 align-items-center">
              <span>Total Price:</span>
              <span className="fw-bold fs-5">{totalPrice.toFixed(1)}$</span>
            </p>
          </div>
          <div className="mt-4">
            <form className="d-flex gap-2 ">
              <input
                className="form-control"
                type="text"
                placeholder="Promo code..."
              />
              <button className="btn btn-success" type="submit">
                Apply
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartPage;
