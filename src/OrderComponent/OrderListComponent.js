import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './OrderTableRow';
import {Link} from 'react-router-dom';

export default class OrderListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {orders: []};
    }

    componentDidMount() {
        axios.get('http://localhost:9000/orders')
            .then(response => {
                this.setState({orders: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.orders.map(function (object, i) {
            return <TableRow obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Compras</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Status</th>
                        <th colSpan="2">Ação</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
                <div>
                    <Link to="/orders/create">
                        <input type="submit"
                               value="Nova compra"
                               className="btn btn-primary"/>
                    </Link>
                </div>
            </div>
        );
    }
}