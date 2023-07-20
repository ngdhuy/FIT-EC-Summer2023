import ProductItem from '../ProductItem';
import './style.css';

export default function Products(props) {
  const products = [
    {
      id    : 1, 
      name  : 'iPhone', 
      price : 2000
    },
    {
      id    : 2, 
      name  : 'iPad Pro', 
      price : 1500
    },
    {
      id    : 3, 
      name  : 'macBook Pro', 
      price : 3000
    },
    {
      id    : 4, 
      name  : 'airPod', 
      price : 300
    }
  ];
  return (
    <>
      <h3>List of products</h3>
      {
        products.map((item, index) => <ProductItem key={index} obj={item} /> )
      }
    </>
  );
}