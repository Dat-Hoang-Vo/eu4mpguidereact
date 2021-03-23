import '../style/App.css';
import Home from './home/Home';
import Country from './country/Country';
import Income from './income/Income';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/country">
            <Country />
          </Route>
          <Route exact path="/income">
            <Income />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
