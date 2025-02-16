import Container from "../components/Container/Container.tsx";
import Header from "../components/Header/Header.tsx";
import TopMenu from "../components/Catalog/TopMenu/TopMenu.tsx";
import ProductList from "../components/Catalog/ProductList/ProductList.tsx";

const Catalog = () => {
  return (
    <Container>
      <Header/>
      <TopMenu/>
      <ProductList/>
    </Container>
  );
};

export default Catalog;