import Container from "../components/Container/Container.tsx";
import ListItem from "../components/ListItem/ListItem.tsx";
// import Slider from "../components/Slider/Slider.tsx";
import Header from "../components/Header/Header.tsx";
import TopMenu from "../components/Catalog/TopMenu/TopMenu.tsx";
import {useContext} from "react";
import {MainContext} from "../contexts/mainContext.tsx";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";

const Catalog = observer(() => {

  const { products } = useContext(MainContext);

  return (
    <div>
      <Container>
        <Header/>
        <TopMenu />
        {
          toJS(products.products).map((user, index) => (
            <ListItem key={index} id={user.id} name={user.name} price={user.price} pattern={user.pattern}/>
          ))
        }
      </Container>
    </div>
  );
});

export default Catalog;