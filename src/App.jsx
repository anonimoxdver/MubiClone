import React from 'react'
import { NavBar } from './components/NavBar'
import {  filmsoscar, filmSpotlight, MubiPod, FilmOfTheDay} from './db/Films.json'
import { MubiTop1000, trending,  festivalfocus, GoldenPalms} from './db/categories.json'
import { List } from './ListOfCathegories/List'
import { ListOfOscars } from './ListOfCathegories/ListOfOscars'
import { Mubispotlight } from './ListOfCathegories/MubiSpotlight'
import { MubiPodcast } from './ListOfCathegories/MubiPodcast'
import { CoverPage } from './components/CoverPage'


const App = () => {


  return (
    <div>
      
        <NavBar/>
        <CoverPage/>
        <List films1={FilmOfTheDay} xddd='FILM OF THE DAY'/>
        <Mubispotlight trending={filmSpotlight}/>
        <ListOfOscars trending={filmsoscar} />
        <MubiPodcast trending={MubiPod } />
        
        
        <List films1={MubiTop1000} xddd='MUBI TOP 1000'/>
        <List films1={trending} xddd='TRENDING'/>
        <List films1={festivalfocus}  xddd='FESTIVAL FOCUS: CANNES FILM FESTIVAL' />
         <List films1={GoldenPalms}  xddd='GOLDEN PALMS, LIONS, AND BEARS, OH MY!: AWARD-WINNING GREATS' />

    </div>
   
  )
}

export default App