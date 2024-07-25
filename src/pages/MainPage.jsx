import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Loader from '../components/Loader';
import Card from '../components/Card';

function MainPage() {
  //- product context ine abone olalım
  //-  const values = useContext(ProductContext);  destructure
  const { products, selectedCategory } = useContext(ProductContext);

  return (
    <div className="container my-5 py-5">
      <div className="d-flex justify-content-end me-3 fw-bold fs-3  text-capitalize mb-5">
        {selectedCategory}
      </div>
      <div className="mainpage mt-4">
        {products?.map(item => (
          <Card product={item} key={item.id} />
        ))}
      </div>
      {!products && <Loader />}
    </div>
  );
}

export default MainPage;
