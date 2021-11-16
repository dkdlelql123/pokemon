import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Splash from "./feature/Splash";
import Pokemon from "./feature/pokemon/Pokemon";
import PokemonDetail from "./feature/pokemon/PokemonDetail";

const App = () => {
  return (
    <div className="App">
      <div className="min-h-screen bg-gradient-to-b from-purple-400 to-blue-400 ">
        <Router>
          <Switch>
            <Route path="/pokemon/detail" component={PokemonDetail} />
            <Route path="/pokemons" component={Pokemon} />
            <Route path="/" component={Splash} exact />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
