import React from "react";
import Slider from 'react-slick'


import { Oscars } from "../components/Oscars";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import './lis.css'



export const ListOfOscars = ({trending}) => {
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
              background: '#000000',
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
    <div className=" o_main">
      <img src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1648880336/images-original_1_mq78sp.png" alt="" className="image_oscar" />
      <span className="p_oscar">Star-studded and Oscar-nominated—some winners, some losers—the films here are among the choicest cuts from the Night of a Thousand Stars. It’s the perfect opportunity to brush up on your Oscar trivia, fill some viewing gaps, or convince yourself again that a certain film or performance was robbed.</span>
      <div
        style={{  marginLeft: "180px",}}
      >
        
          <Slider {...settings}>
{trending.map((trending) => (
         <div style={{paddingLeft: '10px'}} key={trending.id} >
            <Oscars {...trending} />
         </div>
           
         ))}
          </Slider>
      
      </div>
    </div>
  );
};
