import logo from './logo.svg';
import './App.css';
import SideNav from './components/SideNav/SideNav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <SideNav/>
        <h1>Hello World!</h1>
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
