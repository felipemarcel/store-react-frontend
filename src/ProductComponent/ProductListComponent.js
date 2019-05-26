import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './ProductTableRow';
import {Link} from "react-router-dom";

export default class ProductListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        axios.get('http://localhost:9000/products')
            .then(response => {
                this.setState({products: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.products.map(function (object, i) {
            return <TableRow obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Produtos</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Endreço da imagem</th>
                        <th colSpan="2">Ação</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
                <div>
                    <Link to="/products/create">
                        <input type="submit"
                               value="Novo Produto"
                               className="btn btn-primary"/>
                    </Link>
                </div>
            </div>
        );
    }
}