import './App.css';
import ScrollingHeade from './components/ScrollingHeader/ScrollingHeade';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import Home from './pages/Home';
import Support from './pages/Support'
import { Component, useState, useEffect } from 'react';
import axios from "axios";
import NewestRelease from './pages/NewestRelease';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      publicationList: [],
      recentPublication: {},
    }
  }

  componentDidMount() {
    this.refreshList();
    this.getRecent();
  }

  refreshList = () => {
    axios.get("/api/publications")
        .then((res) => this.setState({ publicationList: res.data }) )
        .catch((err) => console.log(err))
  };

  getRecent = () => {
    const data = this.mostRecent(this.state.publicationList);
    this.setState({ recentPublication: data });
    console.log(data);
  };

  mostRecent = (jsonData) => { 
    var mostRecentJsonElement = jsonData[0]
    for (let index = 1; index < jsonData.length; index++) {
        const jsonElement = jsonData[index];
        if ( jsonElement.pub_id === this.compare(mostRecentJsonElement, jsonElement).pub_id ) {
            mostRecentJsonElement = jsonElement;
        }
    }
    return mostRecentJsonElement;        
};

  compare = (jsonData1, jsonData2) => {
    const date1Arr = jsonData1.pub_date.split("-");
    const date2Arr = jsonData2.pub_date.split("-");
    for (let index = 0; index < date1Arr.length; index++) {
        const element1 = date1Arr[index];
        const element2 = date2Arr[index];
        if ( parseInt(element1) > parseInt(element2) ) {
            return jsonData1;
        } else if ( parseInt(element2) > parseInt(element1) ) {
            return jsonData2;
        }
    }
    console.log('An error has occured...')
  };

  render() {
    return (
      <div className="App">
        <Router>
          <ScrollingHeade/>
          <Switch>
            <Route exact path='/' component={withRouter(Home)}/>
            <Route path='/Newest_Release' render={(props) => <NewestRelease gloabalStore={this.recentPublication} {...props}/> }/>
            <Route path='/Support' component={withRouter(Support)}/>
          </Switch>
        </Router>
      </div>
    );}
}

export default App;
