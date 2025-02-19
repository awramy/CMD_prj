import css from './ProductList.module.scss'
import {useContext, useState} from "react";
import {MainContext} from "../../../contexts/mainContext.tsx";
import ListItem from "./ListItem/ListItem.tsx";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";
import ProductModal from "../ProductModal/ProductModal.tsx";
import {TypeProduct} from "../../../../types/types.ts";

//компонент списка товаров на странице каталога - observer для обновления при изменении данных в контексте
const ProductList = observer(() => {
  //получаем данные о списке продуктов и об активном продукте
  const { products } = useContext(MainContext)
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeProduct, setActiveProduct ] = useState<TypeProduct>()

  const handlerActiveProduct = (modalStatus: boolean, product: TypeProduct) => {
    setShowModal(modalStatus)
    setActiveProduct(product)
    products.setActiveProduct(product)
    console.log(products.activeProduct.name)
  }

  return (
    <div className={css.product_list}>
      {
        //toJS - создаем копию объекта списка товаров из контекста
        toJS(products.products).map((product, index) => (
          <ListItem onClick={() => handlerActiveProduct(true, product)} key={index} id={product.id} name={product.name} price={product.price} image={product.image} description={product.description} info={product.info} pattern={product.pattern}/>
        ))
      }
      <ProductModal show={showModal} id={activeProduct?.id} name={activeProduct?.name} price={activeProduct?.price} image={activeProduct?.image} description={activeProduct?.description} pattern={activeProduct?.pattern} info={activeProduct?.info}/>
    </div>
  );
});

export default ProductList;