import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import CustomerCreate from './CustomerComponents/CustomerCreateComponent';
import CustomerList from './CustomerComponents/CustomerListComponent';
import CustomerEdit from "./CustomerComponents/CustomerEditComponent";
import ProductList from "./ProductComponent/ProductListComponent";
import ProductCreate from "./ProductComponent/ProductCreateComponent";
import ProductEdit from "./ProductComponent/ProductEditComponent";
import OrderList from "./OrderComponent/OrderListComponent";
import OrderCreate from "./OrderComponent/OrderCreateComponent";
import OrderEdit from "./OrderComponent/OrderEditComponent";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/customers'} className="navbar-brand">Store</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/customers'} className="nav-link">Clientes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/orders'} className="nav-link">Compras</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/products'} className="nav-link">Produtos</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route path='/customers' exact={true} component={CustomerList}/>
                        <Route path='/customers/create' exact={true} component={CustomerCreate}/>
                        <Route path='/customers/:id' component={CustomerEdit}/>
                        <Route path='/products' exact={true} component={ProductList}/>
                        <Route path='/products/create' exact={true} component={ProductCreate}/>
                        <Route path='/products/:id' component={ProductEdit}/>
                        <Route path='/orders' exact={true} component={OrderList}/>
                        <Route path='/orders/create' exact={true} component={OrderCreate}/>
                        <Route path='/orders/:id' component={OrderEdit}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;