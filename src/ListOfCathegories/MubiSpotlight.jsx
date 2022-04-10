import React from "react";
import Slider from 'react-slick'


import { Oscars } from "../components/Oscars";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import './lis.css'



export const Mubispotlight = ({trending}) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className }
        style={{ ...style, 
                display: "block",
               
                position: 'absolute',
                marginRight: '25px',
                top: '534px',
                height:  '206px',
                width: '113px',
                content: "aaa",
                
  
              }}
        onClick={onClick}
      />
    );
  }
  
  
  function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
           
              height: '206px',
              fontSize: '200px',
              lineHeight: '40px',
              
              top: '534px',
              width: '220px',
         
            
            }}
      onClick={onClick}
    />
  );
}
  let settings = {
  
      dots: true,
      infinite: false,
      speed: 500,
      
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      variableWidth: true
      
    };




  return (
    <div className=" o_spotlight">
      <span className="p_spot">MUBI SPOTLIGHT</span>
      <span className="p_light">An exclusive showcase of exiciting releaces recently in cinemas</span>
      <div
        style={{  marginLeft: "180px" }}
      >
        
          <Slider {...settings}>
{trending.map((trending) => (
         <div style={{marginLeft: '4px'}} key={trending.id} >
            <Oscars {...trending} />
         </div>
           
         ))}
          </Slider>
      
      </div>
    </div>
  );
};
