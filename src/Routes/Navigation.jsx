import React from 'react'
import { 
    BrowserRouter,
    Routes,
    Route,
   
 }  from 'react-router-dom'

 
import App from '../App'
import { Films } from '../movies/Films'
import {  filmsoscar, filmSpotlight , MubiPod, FilmOfTheDay, Movie} from '../db/Films.json'
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
                      <Route key={MubiTop1000.id} path={MubiTop1000.path.toLowerCase()} element={ <Films {...MubiTop1000} />}  />
                    
                    )
                }
                     {
                    Movie.map(Movie=>  
                      <Route key={Movie.id} path={Movie.path.toLowerCase()} element={ <Films {...Movie} />}  />
                    
                    )
                }
                    
                    {
                    trending.map(trending=>  
                      <Route key={trending.id} path={trending.path.toLowerCase()} element={ <Films {...trending} />}  />
                    
                    )
                }
                    
                    {
                    festivalfocus.map(festivalfocus=>  
                      <Route key={festivalfocus.id} path={festivalfocus.path.toLowerCase()} element={ <Films {...festivalfocus} />}  />
                    
                    )
                }
                    
                    {
                    GoldenPalms.map(GoldenPalms=>  
                      <Route key={GoldenPalms.id} path={GoldenPalms.path.toLowerCase()} element={ <Films {...GoldenPalms} />}  />
                    
                    )
                }
   
                {
                    filmsoscar.map(filmsoscar=>  
                      <Route key={filmsoscar.id} path={filmsoscar.path.toLowerCase()} element={ <Films {...filmsoscar} />}  />
                    
                    )
                }
                 {
                    filmSpotlight.map(filmSpotlight=>  
                      <Route key={filmSpotlight.id} path={filmSpotlight.path.toLowerCase()} element={ <Films {...filmSpotlight} />}  />
                    
                    )
                }
                   {
                    MubiPod.map(MubiPod=>  
                      <Route key={MubiPod.id} path={MubiPod.path.toLowerCase()} element={ <Films {...MubiPod} />}  />
                    
                    )
                }
                       {
                    FilmOfTheDay.map(FilmOfTheDay=>  
                      <Route key={FilmOfTheDay.id} path={FilmOfTheDay.path.toLowerCase()} element={ <Films {...FilmOfTheDay} />}  />
                    
                    )
                }
                
               
              
            </Routes>
        </div>
    </BrowserRouter>
  )
}
