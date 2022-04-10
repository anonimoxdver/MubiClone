import React from "react";
import { NavBar } from "../components/NavBar";

import "../App.css";

const IMAGE_DEFAULT =
  "https://res.cloudinary.com/dsii7wbi4/image/upload/v1648550327/image-w1280_dpodt8.webp";
const NAME_DEFAULT = "THREE COLORS: RED ";
const SYNOPSIS_DEFAULT =
  "Part-time model Valentine meets a retired judge who lives in her neighborhood after she runs over his dog. At first the judge gifts her with the dog, but her boyfriend won’t allow her to keep it. When she returns to the judge’s house, she finds him listening in on his neighbors’ conversations.";
const OUR_DEFAULT =
  "Sumptuously stylish and sexy, this modern classic takes an unconventional look at fate, love, and chance in an interconnected society. Starring Irène Jacob, it was an Academy Award nominee for Best Director and Screenplay and is arguably the great Polish director’s masterpiece.";
const RATING_DEFAULT = "8.8/10 ";
const RATING = "19.500 Ratings";
const DIRECTOR_DEFAULT =
  "Directed by Krzysztof Kieślowski France, Switzerland, 1994";



export const Films = ({
  image = IMAGE_DEFAULT,
  name = NAME_DEFAULT,
  synopsis = SYNOPSIS_DEFAULT,
  our_take = OUR_DEFAULT,
  ratings = RATING_DEFAULT,
  director = DIRECTOR_DEFAULT,
  rat = RATING,
  actors 
}) => {
  return (
    <div >
      <NavBar />
          <div className="div_master">
      
      <div className="film_main">
        <img src={image} alt="" className="film_image" />
        <div className='play_div'>
           <img  className='play'src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1649457032/1024px-Caret_right_font_awesome.svg_zyram1.png" alt="" />
         </div>
        <p className="synopsis">SYNOPSIS</p>
        <p className="our">OUR TAKE</p>
        <p className="p_main p_1">{name} </p>
        <p className="p_main p_2">{director} </p>
        <p className="p_main p_3">{synopsis} </p>
        <p className="p_main p_4">{our_take} </p>
        <p className="p_main p_5">{ratings} </p>
        <p className="p_rat">{rat} </p>
        <div className="line"></div>

        <img className="fourk"src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1648624492/4k_t1lx8s.svg" alt="" />
        <img
          className="startwo"
          src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1648555266/1200px-Star_empty.svg_hqejey.png"
          alt=""
        />

        <p className="genre"> Drama </p>
        <img
          className="star"
          src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1648540071/16231559165-star-rating-condensed_bzikvr.png"
          alt=""
        />
      </div >
           <p className="cast_crew">CAST & CREW</p>
      <div className="div_main" > 
            <div className="ul_actors">
              
                {
                 
                    actors.map(actors=> 
                        <div key={actors.id} className='actors'>
                          <div className="color_back">
                              <img src={actors.photo} alt="" className="img_actors"/>
                              <p className="p_actors1">{actors.name} </p>
                              <p className="p_actors2">{actors.cast} </p>
                          </div>

                        </div>
                    )
                }
            </div>
      </div>
   
    </div>
 


    </div>
   );
};
