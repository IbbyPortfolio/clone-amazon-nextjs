import Product from './Product';

const ProductFeed = ({ products }) => {
   const productCard = () => {};

   return (
      <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
         {products.slice(0, 4).map((product, { id }) => (
            <Product key={id} product={product} />
         ))}

         <img
            className='md:col-span-full'
            src='https://links.papareact.com/dyz'
            alt=''
         />

         <div className='md:col-span-2'>
            {products.slice(4, 5).map((product, { id }) => (
               <Product key={id} product={product} />
            ))}
         </div>
         {products.slice(5, products.length).map((product, { id }) => (
            <Product key={id} product={product} />
         ))}
      </div>
   );
};

export default ProductFeed;
