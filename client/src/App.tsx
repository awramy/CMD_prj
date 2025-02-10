import './App.scss'
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Catalog from "./pages/Catalog.tsx";
import * as React from "react";
import Profile from "./pages/Profile.tsx";
import {TypeBasketList, TypeProduct} from "../types/types.ts";
import {useContext, useEffect} from "react";
import {MainContext} from "./contexts/mainContext.tsx";


const productsArray: TypeProduct[] = [
  {id: 1, name: "футболка M", price: "59$", image: "1.png", description: "Футболка мужская",  pattern: {
      top: '50%',
      left: '44%',
      width: '30%',
      opacity: '0.8',
      transform: 'rotate3d(0.5, 8, 0.3, 60deg)'
    }},
  {id: 2, name: "футболка M", price: "39$", image: "2.png", description: "Футболка мужская", pattern: {
      top: '47%',
      left: '50%',
      width: '10%',
      opacity: '0.7',
      transform: 'rotate3d(-0.5, -8, -0.3, 30deg)'
    }},
  {id: 3, name: "футболка Ж", price: "28$", image: "3.png", description: "Футболка мужская", pattern: {
      top: '38%',
      left: '50%',
      width: '10%',
      opacity: '0.8',
      transform: 'rotate(-6deg)'
    }},
  {id: 4, name: "кружка", price: "50$", image: "4.png", description: "Футболка мужская", pattern: {
      top: '48%',
      left: '40%',
      width: '25%',
      opacity: '0.8',
    }},
  {id: 5, name: "кружка", price: "22$", image: "5.png", description: "Футболка мужская", pattern: {
      top: '53%',
      left: '48%',
      width: '12.5%',
      opacity: '0.7',
      transform: 'rotate3d(-1, -1, -0.2, 20deg)'
    }
  },
]

const basketList: TypeBasketList = [
  {id: 1, product_id: 1, printImage: '1png.png'},
  {id: 2, product_id: 2, printImage: '2png.png'},
]


const App: React.FC = () => {

  const { products, basket } = useContext(MainContext);

  useEffect(() => {
    products.setProducts(productsArray)
    basket.setBasket((basketList))
  }, [])

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
