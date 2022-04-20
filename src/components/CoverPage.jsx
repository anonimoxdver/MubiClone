import React from 'react'
import '../App.css'
export const CoverPage = () => {
  return (
    <div>
        
       <div className='page_main'>
         <div className='exclusive'>Exclusive</div>
         <span className='span1'>FILM OF THE DAY</span>
         <div className='play_div'>
           <a href="/lamb">
              <img  className='play'src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1649457032/1024px-Caret_right_font_awesome.svg_zyram1.png" alt="" />
           </a>
         </div>
            <img src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1649448132/images-original_1_qdzjiw.webp" alt=""  className='img_page'/>
            <span className='direc_'>Valdimar Jóhannsson</span>
            <span className='iceland'>Iceland 2021</span>
            <p className='synopsis2'>Precision-timed in revealing its uncanny mysteries,
             it’s little wonder that Valdimar Jóhannsson’s
              nightmarishly eerie debut took the Prize of Originality at Cannes.
               Led by a magnificent Noomi Rapace, this genre-defying fable stages a cloven reckoning 
               with the psychological landscapes of motherhood.</p>
            <p className='partof'> Part of MUBI SPOTLIGHT </p>
          </div>
    
    </div>
   
  )
}
