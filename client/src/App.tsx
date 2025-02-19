import './App.scss'
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Catalog from "./pages/Catalog.tsx";
import * as React from "react";
import Profile from "./pages/Profile.tsx";
import {TypeBasketList, TypeProduct} from "../types/types.ts";
import {useContext, useEffect} from "react";
import {MainContext} from "./contexts/mainContext.tsx";
import { check } from "./http/userAPI.ts";
import Loader from "./components/Loader/Loader.tsx";
import {fetchProducts} from "./http/productAPI.ts";



const basketList: TypeBasketList = [
  {id: 1, product_id: 1, printImage: '1png.png'},
  {id: 2, product_id: 2, printImage: '2png.png'},
]


const App: React.FC = () => {

  const [loading, setLoading] = React.useState<boolean>(true);
  const { products, basket } = useContext(MainContext);
  useEffect(() => {
    setTimeout( () =>
    check()
      .then(() => fetchProducts())
      .then(data => products.setProducts(data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    , 1000)

    //заполняем контекст данными
    basket.setBasket((basketList))
  }, [])

  if (loading) {
    return <Loader/>
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalog/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App
