import './App.css';
import ScrollingHeade from './components/ScrollingHeader/ScrollingHeade';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import Home from './pages/Home';
import Support from './pages/Support'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollingHeade/>
        <Switch>
          <Route exact path='/' component={withRouter(Home)}/>
          <Route path='/Support' component={withRouter(Support)}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
