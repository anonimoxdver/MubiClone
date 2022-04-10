import React from 'react'
import { 
    BrowserRouter,
    Routes,
    Route,
   
 }  from 'react-router-dom'

 
import App from '../App'
import { Films } from '../movies/Films'
import {  filmsoscar, filmSpotlight , MubiPod, FilmOfTheDay} from '../db/Films.json'
import { MubiTop1000, GoldenPalms, trending, festivalfocus} from '../db/categories.json'




export const Navigation = () => {
  return (
    <BrowserRouter>
        <div>
            <Routes>
                <Route  path='/' element={ <App/> } />
                 <Route  path='/*' element={ <App/> } />
             
               
                {
                    MubiTop1000.map(MubiTop1000=>  
                      <Route key={MubiTop1000.id} path={MubiTop1000.path} element={ <Films {...MubiTop1000} />}  />
                    
                    )
                }
                    
                    {
                    trending.map(trending=>  
                      <Route key={trending.id} path={trending.path} element={ <Films {...trending} />}  />
                    
                    )
                }
                    
                    {
                    festivalfocus.map(festivalfocus=>  
                      <Route key={festivalfocus.id} path={festivalfocus.path} element={ <Films {...festivalfocus} />}  />
                    
                    )
                }
                    
                    {
                    GoldenPalms.map(GoldenPalms=>  
                      <Route key={GoldenPalms.id} path={GoldenPalms.path} element={ <Films {...GoldenPalms} />}  />
                    
                    )
                }
   
                {
                    filmsoscar.map(filmsoscar=>  
                      <Route key={filmsoscar.id} path={filmsoscar.path} element={ <Films {...filmsoscar} />}  />
                    
                    )
                }
                 {
                    filmSpotlight.map(filmSpotlight=>  
                      <Route key={filmSpotlight.id} path={filmSpotlight.path} element={ <Films {...filmSpotlight} />}  />
                    
                    )
                }
                   {
                    MubiPod.map(MubiPod=>  
                      <Route key={MubiPod.id} path={MubiPod.path} element={ <Films {...MubiPod} />}  />
                    
                    )
                }
                       {
                    FilmOfTheDay.map(FilmOfTheDay=>  
                      <Route key={FilmOfTheDay.id} path={FilmOfTheDay.path} element={ <Films {...FilmOfTheDay} />}  />
                    
                    )
                }
                
               
              
            </Routes>
        </div>
    </BrowserRouter>
  )
}
