import css from './ProductList.module.scss'
import {useContext} from "react";
import {MainContext} from "../../../contexts/mainContext.tsx";
import ListItem from "./ListItem/ListItem.tsx";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";

const ProductList = observer(() => {
  const { products } = useContext(MainContext)
  return (
    <div className={css.product_list}>
      {
        toJS(products.products).map((user, index) => (
          <ListItem key={index} id={user.id} name={user.name} price={user.price} pattern={user.pattern}/>
        ))
      }
    </div>
  );
});

export default ProductList;