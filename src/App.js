import React from 'react';
import './App.css';
import {
  HashRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Tasks from './tasksComponent/Tasks';

function CustomeRoutes() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
      <Redirect exact from="/" to="tasks" />
        <Route exact path="/tasks">
          <Tasks />
        </Route>
      </Switch>
  </HashRouter>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to the CDK Global Task List
      </header>
      <CustomeRoutes />
    <footer className="App-footer">
      Thanks for visiting
    </footer>
    </div>
  );
}

export default App;
