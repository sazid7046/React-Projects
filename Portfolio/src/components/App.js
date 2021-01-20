import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import Contact from '../Contact/Contact';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={() => <div>home</div>}/>
          <Route exact path="/home" component={() => <div>home</div>}/>
          <Route exact path="/project" component={() => <div>project</div>}/>
          <Route exact path="/blog" component={() => <div>home</div>}/>
          <Route exact path="/podcast" component={() => <div>home</div>}/>
          <Route exact path="/contact" component={() => <div><Contact/></div>}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
