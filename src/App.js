import './App.css';
import Home from './pages/home';
import { Gallery, About, Services, Contact } from './pages';
import {Route, Switch} from 'react-router-dom';
import {NavBar} from './components';
import { Footer } from './components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';
import { theme } from './Theme';
import Burger from './components/burger';
import Menu from './components/menu';
import React, {useState} from 'react'



function App() {
  const [open, setOpen] = useState(false);



  return (
    <ThemeProvider theme={theme}>   
    <div className="App">

    <GlobalStyles />
          <NavBar />
          <Burger  open={open} setOpen={setOpen}/>
          <Menu  open={open} setOpen={setOpen}/>
          <Switch>

            <Route exact path='/'>
                <Home/>
            </Route>

              <Route exact path='/Gallery'>
                <Gallery/>
              </Route>
              
              <Route exact path='/About'>
                <About/>
              </Route>
              
              <Route exact path='/Services'>
                <Services/>
              </Route>
              
              <Route exact path='/Contact'>
                <Contact/>
              </Route>
          </Switch>
      
      <Footer/>

    </div>
    </ThemeProvider>
    
  )
}


export default App