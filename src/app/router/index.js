import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Layout from "../containers/layout";
import Phone from '../containers/phone';
import Phones from '../containers/phones';
import Basket from '../containers/basket';

import  Notification from '../components/notification';

const RouterContainer = () => (
    <Router>
      <div>
        <Switch>
          <Route path="/phones/:id" component={Phone} />
          <Route path="/basket" component={Basket} />
          <Layout>
            <Route exact path="/" component={Phones} />
            <Route path="/categories/:id" component={Phones} />
          </Layout>
        </Switch>
        <Notification/>
      </div>
    </Router>
);

export default RouterContainer;