import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './CustomerTableRow';
import {Link} from 'react-router-dom';

export default class CustomerListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {customers: []};
    }

    componentDidMount() {
        axios.get('http://localhost:9000/customers')
            .then(response => {
                this.setState({customers: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.customers.map(function (object, i) {
            return <TableRow obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Clientes</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th colSpan="2">Ação</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
                <div>
                    <Link to="/customers/create">
                        <input type="submit"
                               value="Novo Cliente"
                               className="btn btn-primary"/>
                    </Link>
                </div>
            </div>
        );
    }
}