import { createContext } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [basket, setBasket] = useLocalStorage('sepet', []);

  const addToCard = newProduct => {
    //- check the product in cart
    const foundItem = basket.find(item => item.id === newProduct.id);

    if (foundItem) {
      //-  if the product is in the cart, increase the quantity by 1
      const updatedBasket = { ...newProduct, amount: foundItem.amount + 1 };

      //-  replace old product with new product
      const newBasket = basket.map(item =>
        item.id === updatedBasket.id ? updatedBasket : item
      );
      //- update cart
      setBasket(newBasket);
      toast.info(
        `Product quantity increased. Total quantity: ${updatedBasket.amount}`
      );
    } else {
      //- if the product is not in the cart
      //* setBasket(basket.concat({ ...newProduct, amount: 1 }));
      setBasket([...basket, { ...newProduct, amount: 1 }]);
      toast.success('Product successfully added');
    }
  };

  const decreaseAmountItem = id => {
    //- find the product to reduce quantity
    const findItem = basket.find(item => item.id === id);

    if (findItem.amount > 1) {
      /// If more than 1, reduce the amount by 1
      //- update item
      const updatedItem = { ...findItem, amount: findItem.amount - 1 };
      //- replace old product with new product
      const newBasket = basket.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      );
      //- update state
      setBasket(newBasket);
      toast.error(
        `Product quantity reduced. Total quantity: ${updatedItem.amount}`
      );
    } else {
      /// remove from cart if quantity 1
      removeFromBasket(id);
    }
  };

  const removeFromBasket = id => {
    //- remove item from the cart
    const filteredBasket = basket.filter(item => item.id !== id);
    setBasket(filteredBasket);
    toast.error('Product removed from cart');
  };

  return (
    <CartContext.Provider
      value={{ basket, addToCard, removeFromBasket, decreaseAmountItem }}
    >
      {children}
    </CartContext.Provider>
  );
}
