import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import { Button } from "../button/Button";
import { Price } from "../Price/Price";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import './ProductItem.css'

const ProductItem = ({ product }) => {
  const { addBasket } = useContext(GlobalContext);
  // console.log(addBasket);
  // console.log(product);
  return (
    <div className="thumbnail card">
      <div className="img-event">
        <Link to={`/products/${product.id}`}>
          <img
            className="group list-group-image img-fluid"
            src={product.image}
            alt={product.title}
            width="200"
          />
        </Link>
      </div>
      <div class="caption card-body">
        <h4 class="group card-title inner list-group-item-heading">
          {(product.category).toUpperCase()}
          <Price>{product.price}TL</Price>
        </h4>
        <p class="group inner list-group-item-text">
          {(product.description).charAt(0).toUpperCase() + (product.description).slice(1).toLowerCase()}
        </p>
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <p class="lead">
           
            </p>
          </div>
          <div class="col-xs-12 col-md-6">
            <Button onClick={() => addBasket(product)}>
              <GrCart className="mr-3" />
              Satın Al
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
