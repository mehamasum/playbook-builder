import "antd/dist/antd.css";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Create from './pages/Create';
import List from './pages/List';
import Edit from './pages/Edit';

import './App.css';

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route exact path="/new">
          <Create />
        </Route>
        <Route exact path="/:id/edit">
          <Edit />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
