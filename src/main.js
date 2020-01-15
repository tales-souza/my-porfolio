import React from "react";
import Home from "./components/home/home";
import { Container } from 'react-materialize';
import Contact from "./components/contact/contact";
import NoMatch from "./components/noMatch/noMatch";
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contact' component={Contact}/>
        <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </Container>
  </main>  
);

export default Main;