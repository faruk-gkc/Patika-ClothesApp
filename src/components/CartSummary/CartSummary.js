import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";
import { HiShoppingCart } from "react-icons/hi";

const CartSummary = (props) => {
  let { basketProducts, removeBasket } = useContext(GlobalContext);
  console.log(basketProducts);
  return (
    <>
      <UncontrolledDropdown nav inNavbar className="mx-3 my-2">
        <DropdownToggle nav caret>
          <HiShoppingCart className="h3" />
        </DropdownToggle>
        <DropdownMenu right>
          {basketProducts.map((product) => (
            <DropdownItem key={product.product.id}>
              <Badge color="success" className="mr-5 p-2">
                {product.qty}
              </Badge>
                  {product.product.image && <img src={product.product.image} alt={product.product.title} width="40"/>}
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to="/cart">Go to cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
};

export default CartSummary;
