import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './404';
import routerConfig from './routers/config';

import './index.css';
import * as serviceWorker from './serviceWorker';

function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact render={() => <Redirect to='/home' />}></Route>
        {/* <Route path='/home' exact component={App}></Route> */}

        {
          routerConfig.map((routerItem) => {
            return <Route key={routerItem.path} path={routerItem.path} render={(props) => {
              return <routerItem.component { ...props }></routerItem.component>
            }}></Route>
          })
        }

        <Route path='/404' component={NotFound}></Route>
        {/* <Redirect from='/*' to='/404'></Redirect> */}
      </Switch>
    </Router>
  )
}

ReactDOM.render(<RouterComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
