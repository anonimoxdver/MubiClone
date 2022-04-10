import React from "react";
import { useEffect, useState } from "react";
import "../App.css";


import {seacrh } from '../db/search.json'


export const NavBar = () => {

  
  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");


  const peticionGet=()=>{

 
    setUsuarios(seacrh.filter(seacrh=> seacrh));
    setTablaUsuarios(seacrh.filter(seacrh=> seacrh));



}

const handleChange=e=>{
  setBusqueda(e.target.value);
 filtrar(e.target.value);

}

const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
    if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())



    ){
      return elemento;
    }
  });
  
  setUsuarios(resultadosBusqueda);
}


useEffect(()=>{
peticionGet();
},[])
  return (
    <div className="NavBar">
      <a href="http://localhost:3000">
        <img
          className="NavBarImage"
          src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1648022951/1280px-Mubi_logo.svg_d4dstq.png"
          alt="Logo mubi"
        />
      </a>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUJJREFUSEu9le0xBEEURc9GQAhEgAzIgAjIABmQARmQgQwQARnYEIiAOlWv1avR3TO7NWOq9sdOd9/z+r6PWbHws1pYnx5gD7gEjoHDCOQdeAHugfWU4FqAuxDvabjnegxSAxjlQRx8BBTynY83uQLO042OepAhoET+FdYU4aGGIK3aCbuEVp8M0POP2GVULfEiJOQt/uy3cpIBJXoT2IxoEOZD2NU8kwHF+ynRD2/h2WouMuA7Tm3aG91zcwEsit1aluey6DWq7g/jX5O8bZlqjyVbHR2tRvsETjq9oOBz+H4L3ExptLInjwrr3BrPo8IBeJEEXTMYg+rmIC+ODTttcc9pzK0mZGxc29GOa4efogr5U1zPLU1nkutVyKZNVXOhC5kDIDRDzoCnEslcgALRzl9xX84JGP0e9D5MW68tfoMfCXxMGRHr0pcAAAAASUVORK5CYII="
        className="searchSvg"
      />
     
            
      
      <a href="http://localhost:3000" className="NOWBar">
        NOW SHOWING
      </a>
      <a href="" className="NotebookBar">
        NOTEBOOK
      </a>
      <a href="">
        <img
          className="AvatarNav"
          src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1648025815/avatar_dokcxh.png"
          alt=""
        />
      </a>
      <a href="">
        <img
          className="OptionsBar"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAGVJREFUSEvtlDsOACAIQ+H+h9YVEgi/NCw4C4+2IhP4MLg/rQDeUJUa2lIABwwF6PKVDOQIWbvcQSMFcMA4j0gBBJC1xYPfHtRiiULO5nF7UPNd3l75rrPBthet74dRGT3TMQwO+OBWChlWtxY1AAAAAElFTkSuQmCC"
        />
      </a>
          <input
            className="searchInput"
            value={busqueda}
            placeholder="Search"
            onChange={handleChange}
          />
        

        <div className="search_search">
        {
           busqueda.length > 0
                        ?    <ul className='ul_'>  { usuarios.map(usuarios=>( 
                                   
                                    
                                       <li className='xd'key={usuarios.id}>
                                          < a href={usuarios.path} className='a_search' >
                                        <img src={usuarios.image} alt="xd"  className='img_heig'/>
                                        <p className='name_search'>{usuarios.name} </p>
                                         <p className='direc_search'>{usuarios.director} </p>
                                         </a>  
                              </li>
                                     
                                
                                      
                                       )) } </ul> 
                        :<p></p> 
                               
                                       
                             
                         
                   
         }
        
  </div>
    </div>
  );
};
