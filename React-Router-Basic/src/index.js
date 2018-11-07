import React from "react";
import ReactDOM from "react-dom";
import Root from "./component/Root";
import Reg from "./component/Reg";
import About from './component/About';
import List1 from './component/List1';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {Root}>
         <IndexRoute component = {About} />
         <Route path = "/reg" component = {Reg} />
         <Route path = "/about" component = {About} />
         <Route path = "/list1" component = {List1} />
      </Route>
   </Router>
), document.getElementById('root'));

//ReactDOM.render(<Root/>, document.getElementById("root"));

//ReactDOM.render(<Reg/>, document.getElementById("reg"));
