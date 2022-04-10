import React from "react";
import Slider from 'react-slick'


import { Oscars } from "../components/Oscars";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import './lis.css'



export const MubiPodcast = ({trending}) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className }
        style={{ ...style, 
                display: "block",
               
                position: 'absolute',
                marginRight: '25px',
                top: '533px',
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
              
              top: '533px',
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
    <div className=" pod_main">
      <img src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1648895826/podcast/images-original_gsnzrl.webp" alt="" className="image_pod" />
      <span className="p_oscar">Bringing together leading voices in Latin American film and culture to talk about their formative cinematic experiences, the <em>MUBI Podcast: Encuentros</em>  is here to help you navigate the oceans of cinema history. This accompanying selection of features offers a means to help you share in their passions.</span>
      <div
        style={{  marginLeft: "180px",}}
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
