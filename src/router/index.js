import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Layout from "../app/containers/layout/index";
import Phone from '../app/containers/phone/index';
import Phones from '../app/containers/phones/index';
import Basket from '../app/containers/basket/index';

import  Notification from '../app/components/notification/index';

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