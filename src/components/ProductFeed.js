import Product from './Product';

const ProductFeed = ({ products }) => {
   return (
      <div>
         <h1>Product Feed</h1>
         {products.map((product, { id }) => (
            <Product key={id} product={product} />
         ))}
      </div>
   );
};

export default ProductFeed;
