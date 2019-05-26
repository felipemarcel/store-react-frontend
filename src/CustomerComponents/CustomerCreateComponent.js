import React, {Component} from 'react';
import axios from 'axios';

export default class CustomerCreateComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeOrders = this.onChangeOrders.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            _id: '',
            firstName: '',
            lastName: '',
            orders: []
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }

    onChangeOrders(e) {
        this.setState({
            orders: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            orders: this.state.orders
        };
        axios.post('http://localhost:9000/customers', obj)
            .then(res => console.log(res.data));

        this.setState({
            firstName: '',
            lastName: '',
            orders: []
        })
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3 align="center">Adicionar novo cliente</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.firstName}
                            onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Sobrenome: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.lastName}
                               onChange={this.onChangeLastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Compras</label>
                        {
                            this.orders = this.state.orders.map((item, key) =>
                                <li key={item}>{item.quantity}</li>
                            )
                        }
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               value="Adicionar"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}