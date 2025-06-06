import { Route, Switch } from "react-router";
import Home from "phase-4-flask-api-code-challenge-pizza-restaurants-client/src/components/Home";
import Navbar from "phase-4-flask-api-code-challenge-pizza-restaurants-client/src/components/Navbar";
import Restaurant from "phase-4-flask-api-code-challenge-pizza-restaurants-client/src/components/Restaurant";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/restaurants/:id">
          <Restaurant />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
