import { createContext, useEffect, useState } from 'react';
import api from '../utils/api.js';

/*
  /1. createContext  ile ProductContext adında bir context yapısı oluşturulur
      
  /2.  verileri bileşenlere aktaracak olan Provvider fonksiyon olan ProductProvider tanımlarız

  /3.  <ProductContext.Provider> {children}  </ProductContext.Provider>

   -  App bileşeni children props u olarak alınır

  /4. aktarmak istediğimizi state i value ile  atarız

  /5. Provider a value  props u vererek almak istediğimiz verileri yazarız ve  tüm bileşenler tarafından erişilebilir olur. genelde value props una nesne olarak veririz

*/

/// context oluştur
export const ProductContext = createContext();

/// Provider fonksiyon. children props u olarak App bileşeni tanımlandı
export function ProductProvider({ children }) {
  const [products, setProducts] = useState();
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const url =
      selectedCategory === 'all'
        ? '/products'
        : `/products/category/${selectedCategory}`;
    api.get(url).then(res => setProducts(res.data));
  }, [selectedCategory]);

  return (
    <ProductContext.Provider
      value={{ products, selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
}
