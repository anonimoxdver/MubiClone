import React from "react";
import Slider from 'react-slick'
import {Linkjsx} from '../components/link'

import { Trending} from '../components/App'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import './lis.css'




export const List = ({films1, xddd}) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className }
        style={{ ...style, 
                display: "block",
               
                position: 'absolute',
                marginRight: '25px',
                top: '134px',
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
              
              top: '134px',
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
    <div >
      <Linkjsx name={xddd}/>
      <div
        style={{  marginLeft: "180px", overflowX: '' }}
      >
        
          <Slider {...settings}>
{films1.map((films1) => (
         <div style={{marginLeft: '4px'}} key={films1.id} >
            <Trending {...films1} />
         </div>
           
         ))}
          </Slider>
      
      </div>
    </div>
  );
};
