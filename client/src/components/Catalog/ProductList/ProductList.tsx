import css from './ProductList.module.scss'
import {useContext, useEffect, useState} from "react";
import {MainContext} from "../../../contexts/mainContext.tsx";
import {ModalContext} from "../../../contexts/modalContext.tsx";
import ListItem from "./ListItem/ListItem.tsx";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";
import ProductModal from "../ProductModal/ProductModal.tsx";
import {TypeProduct} from "../../../../types/types.ts";

//компонент списка товаров на странице каталога - observer для обновления при изменении данных в контексте
const ProductList = observer(() => {
  //получаем данные о списке продуктов и об активном продукте
  const { products, user } = useContext(MainContext)
  const { showModal, setShowModal } = useContext(ModalContext);
  const [activeProduct, setActiveProduct ] = useState<Partial<TypeProduct>>()
  const [renderProducts, setRenderProducts] = useState<TypeProduct[]>([])

  useEffect(() => {
    if(products.filter === '')
      return setRenderProducts(products.products);

    console.log(products.filter)
    const newProducts = products.products.filter(item => {
      return item.info.some(info_item => info_item.description === products.filter )
    })
    console.log(newProducts)
    setRenderProducts(newProducts)
  }, [products.filter]);

  const handlerActiveProduct = (product: Partial<TypeProduct>) => {
    if(showModal) {
      setShowModal(false)
      document.body.style.overflow = ''
    } else {
      setShowModal(true)
      document.body.style.overflow = 'hidden'
    }
    setActiveProduct(product)
    products.setActiveProduct(product)
  }

  return (
    <div className={css.product_list}>
      {
        //toJS - создаем копию объекта списка товаров из контекста
        toJS(renderProducts).map((product, index) =>
          (
            <ListItem activePhoto={user.activePhoto?.path || ''} onClick={() => handlerActiveProduct(product)} key={index} _id={product._id} name={product.name} price={product.price} image={product.image} description={product.description} info={product.info} pattern={toJS(product).pattern}/>
          )
        )
      }
      <ProductModal onClick={() => handlerActiveProduct({})} show={showModal} _id={activeProduct?._id} name={activeProduct?.name} price={activeProduct?.price} image={activeProduct?.image} description={activeProduct?.description} pattern={activeProduct?.pattern} info={activeProduct?.info}/>
    </div>
  );
});

export default ProductList;