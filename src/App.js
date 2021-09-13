import './App.css';
import SideNav from './components/SideNav/SideNav';
import ScrollingHeader from './components/ScrollingHeader/ScrollingHeade';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollingHeader/>
        <SideNav/>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
