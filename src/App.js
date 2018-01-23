import React, {Component} from 'react';

import {Route, Switch} from "react-router-dom";

import Layout from "./pages/Layout";
import SessionPage from "./pages/SessionPage";
import MentorsPage from "./pages/MentorsPage";
import MentorDetailPage from "./pages/MentorDetailPage";
import ProfilePage from "./pages/ProfilePage";
import MainPage from "./pages/MainPage";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={MainPage}/>

          <Route path="/session" component={SessionPage}/>
          <Route exact path="/mentors" component={MentorsPage}/>
          <Route exact path="/mentors/:id" component={MentorDetailPage}/>
          <Route path="/profile" component={ProfilePage}/>

        </Switch>
      </Layout>
    );
  }
}

export default App;
