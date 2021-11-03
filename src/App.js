import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Login from './Pages/Login';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component={Login}/>
      </Switch>
      
    </div>
  )
}

export default App;
