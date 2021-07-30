import React, { useState,useEffect } from "react";
import CoinNavbar from "./CoinNavbar"
import CoinTable from "./CoinTable";
import CoinSearch from "./CoinSearch"
//Funciones Helpers
import { getCoins, searchCoins } from "../helpers/CoinsFetch"

const Home = () => {
const [coins, setCoins] = useState({
  datos:[],
  loading:true,
  update:false,
});

const [inputValue, setInputValue] =useState ('')


useEffect(() => {
  
  //acciones
  getCoins().then((respuesta)=>{
    setCoins({
      datos:respuesta,
      loading: false,
      update:true,
    });
    setInputValue('')
    // console.log(respuesta)
  })

}, [coins.update])

useEffect(() => {
  searchCoins(inputValue).then(respuesta=>{
    setCoins({
      datos:respuesta,
      loading: false,
      update:true,
    });
  })

}, [inputValue])




getCoins()

  return (
    <>
    <CoinNavbar coins={coins} setCoins={setCoins} />
  <div className="container mt-3">
    <CoinSearch inputValue={inputValue} setInputValue={setInputValue} />
    <div className="row">
      <div className="col">

    {coins.loading ?  
    
    <h3 className="text-white text-center">Cargando...</h3>
    
    :  
   
   <CoinTable coins={coins} />
  }

      </div>
    </div>
  </div>
  </>

  )
  
};
export default Home;