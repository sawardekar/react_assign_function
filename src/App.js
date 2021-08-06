
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import UserDetail from './components/UserDetail';
import Users from './components/Users';
import AddUser from './components/RegisterPage';
import UserUpdate from './components/UserUpdate';
// import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Users} />
          <Route path='/details/:id' component={UserDetail} />
          <Route path='/add' component={AddUser} />
          <Route path='/edit/:id' component={UserUpdate} />
        </Switch>
      </div>
    </Router>
    // <div>
    //   <User />
    // </div>
  );
}

export default App;
