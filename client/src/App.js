//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/bookingcar' component={BookingCar} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
