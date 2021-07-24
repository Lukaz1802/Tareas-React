import React, { useState,useEffect } from "react";
import CoinNavbar from "./components/CoinNavbar";
import CoinTable from "./components/CoinTable";

//Funciones Helpers
import { getCoins } from "./helpers/coinsFetch";

const App = () => {
  const [coins, setCoins] = useState({
    datos:[],
    loading:true,
    update:false,
  })

  useEffect(() => {
    
    //acciones
  getCoins().then(respuesta=>{

    setCoins({
      datos:respuesta,
      loading:false,
      update:true,
    })

   console.log(respuesta)
  })

  },[coins.update])



  return(
       <>
  <CoinNavbar coins={coins} setCoins={setCoins}/>
  <div className="container mt-3">
    <div className="row">
      <div className="col">
      <CoinTable coins={coins}/>
      </div>
    </div>
  </div>;
</>
);
};
export default App;
