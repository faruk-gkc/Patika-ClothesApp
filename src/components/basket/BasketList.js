import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import {Link} from 'react-router-dom' 

const BasketList = () => {
  let { basketProducts } = useContext(GlobalContext);
  console.log(basketProducts);
  return (
    <ul class="list-group">
      {basketProducts.map((product, index) => (
        <>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <div
            key={index}
            className="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div className="d-flex w-100 justify-content-between">
                <img src={product.product.image} alt={product.product.title} width="70"/>
             <div className="d-flex flex-column align-items-center justify-content-center">
             <h5 className="mb-1">{product.product.category}</h5>
            <p class="mb-1">{product.product.description}</p>
             </div>
              <badge class="badge badge-danger d-flex align-items-center justify-content-center p-3">{product.qty}</badge>
            </div>
          </div>
          </Link>
         
        </>
      ))}
      <Link to='/' style={{ textDecoration: 'none' }}>
      <button className="btn btn-block btn-outline-info">
            Anasayfaya Dön
          </button>
      </Link>
       
    </ul>
  );
};

export default BasketList;
