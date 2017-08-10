import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import   App   from './components/App/App.jsx';
import  { ProductBag }  from './components/productBag/ProductBag.jsx';

ReactDOM.render((
<Router history={browserHistory}>
    <Route path='/' component={App}>
        <IndexRoute component={ProductBag}/>
    </Route>
</Router>
) , document.getElementById('app'));