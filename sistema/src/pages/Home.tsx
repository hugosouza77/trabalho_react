import tue from "../img/tue.jpg"
import matue from "../img/30praum.jpg"
import tropa from "../img/logo.png"

import "./home.css"
export const Home = ()=>{
    return(
      
        <div className="container">
   <div className="texto">
      <h1>Matue</h1> 
      <p>Matheus Brasileiro Aguiar, natural de Fortaleza/CE<br />Cantor e Compositor<br />@matue  </p> <br />
   <h1>Wiu</h1>
   <p> Vinicius William, natural de Fortaleza/CE<br /> Cantor, compositor e produtor <br /> @howiu30</p> <br />
   <h1>Teto</h1>
   <p>Clériton Sávio <br /> Cantor e compositor <br /> @euteto</p>
   </div>
      <div className="wiu">
        <img className="wiu" src={tropa} alt="" />
      </div >
      
   </div>
       
    );
}
