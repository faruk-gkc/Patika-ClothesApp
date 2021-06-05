import { createContext, useState } from "react";
import alertify from "alertifyjs";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [basketProducts, setBasketProducts] = useState([]);

  let addBasket = (product) => {
    // alert(product.title)
    let addItem = basketProducts.find(item => item.product.id === product.id);
    if (addItem) {
      addItem.qty += 1;
    } else {
      basketProducts.push({ product, qty: 1 });
    }
    setBasketProducts([...basketProducts]);
    alertify.success(product.price + " TL'lik ürün sepete eklendi.", 2);
  };

  // let removeBasket = (product) => {
  //   let removeItem = basketProducts.filter(item => item.product.id !== product.id)
  //   setBasketProducts([...basketProducts]);
  //   alertify.error("Ürün sepetten kaldırıldı.", 2)
  // }

  let values = {
    basketProducts,
    addBasket,
    // removeBasket
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
