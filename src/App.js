import React, {Component} from "react";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import DarkModeToggle from './components/DarkModeToggle';
import Snowfall from 'react-snowfall'



import "./App.css";


class App extends Component {
  render() {

    return (
      
      <div className="App">

        <div className="navbar" />
        
        <DarkModeToggle />
        <div className="menubar">
     
        <Menu menuButton={<MenuButton>Open menu</MenuButton>} transition>


      <MenuItem onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>Top</MenuItem>
    
      <MenuItem onClick={() => { window.scrollTo({top: 800, left: 0, behavior: 'smooth'}); }}>About Me</MenuItem>
   
      <MenuItem onClick={() => { window.scrollTo({top: 2000, left: 0, behavior: 'smooth'}); }}>Skills</MenuItem>
 
    </Menu>
    
      </div>
        <TitlesSection />
        <AboutSection />
        <SkillSection />
       


      </div>

);
  }
}


export default App;
