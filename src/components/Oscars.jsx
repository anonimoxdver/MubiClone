import React from "react";
import "../App.css";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dsii7wbi4/image/upload/v1647939240/image-w1280_14_rdviwa.jpg";
const DEFAULT_PATH = "https://mubi.com/films/three-colors-red";
const DEFAULT_NAME = "TRREE COLORS: RED";
const DEFAULT_AUTOR = "KRZYSZTOF KIESLOWSKI ";
const DEFAULT_DATE = "FRANCE 1994";

export const Oscars = ({
  image = DEFAULT_IMAGE,
  path = DEFAULT_PATH,
  name = DEFAULT_NAME,
  autor = DEFAULT_AUTOR,
  date = DEFAULT_DATE,
}) => {
  return (
    <div  
    className="">
      
      
        <div className="c_main o_background ">
          <div className="c_img">
            <a href={path}>
              <img src={image} alt="image" />
              <span
              
              className="pAutor">  {autor}  <span className=" pSpan"> {date}</span> </span>     
              
            <span 
              className="pName" 
              style={{
                fontSize: '20px',
                marginBottom: '5px'
              }}
            > { name } </span>  
            </a>
          </div>
        </div>
      
    </div>
  );
};
