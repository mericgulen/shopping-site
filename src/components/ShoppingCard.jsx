import { VscTrash } from 'react-icons/vsc';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

function ShoppingCard({ product }) {
  const { addToCard, removeFromBasket, decreaseAmountItem } =
    useContext(CartContext);
  return (
    <div className="d-flex align-items-center gap-1 flex-column flex-sm-row shadow bg-body-tertiary px-sm-4 rounded-3 py-3  py-sm-4 ">
      <div>
        <img
          className="object-fit-contain"
          width={60}
          src={product.image}
          height={60}
          alt={product.title}
        />
      </div>
      <div className="d-flex justify-content-between align-items-center flex-column-reverse flex-lg-row gap-3 flex-grow-1 px-sm-3 mt-3 mt-sm-0 ">
        <p className="mb-0 fs-6 fw-bold">
          {product.title.length > 15
            ? product.title.slice(0, 15) + '...'
            : product.title}
        </p>
        <p className="mb-0">Category: {product.category}</p>
        <p className="mb-0">
          Price:
          <span className="lead fw-bold ms-2">
            ${product.price.toFixed(1) * product.amount}
          </span>
        </p>
      </div>
      <div className="d-flex align-items-center gap-1 mt-3 mt-sm-0 ms-sm-3">
        <div className="d-flex align-items-center gap-2 bg-body-secondary ">
          <button
            onClick={() => decreaseAmountItem(product.id)}
            className="btn btn-sm btn-primary"
          >
            -
          </button>
          <span className="fw-bold fs-5">{product.amount}</span>

          <button
            onClick={() => addToCard(product)}
            className="btn btn-sm btn-success"
          >
            +
          </button>
        </div>
        <button
          onClick={() => removeFromBasket(product.id)}
          className="btn btn-danger btn-sm"
        >
          <VscTrash />
        </button>
      </div>
    </div>
  );
}
export default ShoppingCard;
