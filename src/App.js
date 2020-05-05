import React from 'react';
import { Route, Switch , withRouter} from "react-router-dom";
import './App.css';
import LandingPage from './routes/landing-page/landing-page';
import Login from './routes/Login/login';
import Register from './routes/Register/register';
import TeamJoin from './routes/team-join/team-join';
import Dashboard from './routes/dashboard-main/dashboard-main';
import TeamAuth from './routes/team-auth/team-auth';
import TeamJoinSuccessful from './routes/team-join/team-join-successful/team-join-successful';
import IssuePage from './routes/issue-page/issue-page';
import PrivateRoute from './components/utils/Private-route';
import About from './routes/about/About';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path={"/"} component={About} />
      <Route exact path={"/landing"} component={LandingPage} />
      <Route exact path={"/login"} component={Login} />
      <Route path={"/register"} component={Register} />
      <Route exact path={"/team-join"} component={TeamJoin} />
      <Route exact path={"/team-join/:teamId/:teamName/auth"} component={TeamAuth} />
      <Route path={"/team-join/:teamId/:teamName/join=success"} component={TeamJoinSuccessful} />
      <PrivateRoute path={"/dashboard"} component={Dashboard} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
