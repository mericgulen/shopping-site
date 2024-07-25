import { Link } from 'react-router-dom';

function CartInfo() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 pb-5">
      <p className="mb-0 me-2 fs-4">Your cart is empty.</p>
      <Link to={'/'} className="btn btn-info rounded-2">
        Click here to add a product
      </Link>
    </div>
  );
}
export default CartInfo;
