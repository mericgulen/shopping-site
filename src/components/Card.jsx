import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Card({ product }) {
  const { addToCard } = useContext(CartContext);
  return (
    <div className="card p-3  h-100" style={{ width: '250px' }}>
      <div className="d-flex justify-content-center h-100">
        <img
          src={product.image}
          alt={product.title}
          height={120}
          className="object-fit-contain"
        />
      </div>
      <div className="card-body">
        <h5 className="text-truncate">{product.title}</h5>
        <p>Price : {product.price}$</p>
        <p className="text-capitalize">{product.category}</p>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => addToCard(product)}
            className="btn btn-info btn-sm rounded-2 w-75"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
