import React from 'react';
import { Route, Switch , withRouter} from "react-router-dom";
import './App.css';
import LandingPage from './routes/landing-page/landing-page';
import Login from './routes/Login/login';
import Register from './routes/Register/register';
import TeamJoin from './routes/team-join/team-join';
import Dashboard from './routes/dashboard-main/dashboard-main';
import TeamAuth from './routes/team-auth/team-auth';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
      </header>
      <main className='App-main'>
      <Switch>
      <Route exact path={"/"} component={LandingPage} />
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/register"} component={Register} />
      <Route exact path={"/team-join"} component={TeamJoin} />
      <Route path={"/team-join/:teamId/auth"} component={TeamAuth} />
      <Route path={"/dashboard/:teamId"} component={Dashboard} />
      </Switch>
      </main>
    </div>
  );
}

export default withRouter(App);
