import React from "react";

import "./servico.css"
export const Servicos = ()=>{
    return(
        <div className="servic">
        <div className="um">
        <h1>Contato para shows:</h1><br />
        <p>booking@30praum.com</p>
        </div>
        <h1 className="mar">Dados para receber nossas informações </h1>
        <form action="" className="form">
            
            <div className="mb-3">
                <h1>Email</h1>
                <br />
             <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <h1>Número</h1>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="numero ex: 83809334 " />
            </div>
            <div className="bnts">
                <input className="button" type="submit" name="" value="Enviar"  />

            </div>
        </form>
        </div>
       
    );
}