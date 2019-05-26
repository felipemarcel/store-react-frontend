import React, {Component} from 'react';
import axios from 'axios';

export default class CustomerEditComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeOrders = this.onChangeOrders.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            orders: []
        }
    }

    componentDidMount() {
        debugger;
        axios.get('http://localhost:9000/customers/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    orders: response.data.orders
                });
            })
            .catch(function (error) {
                console.log(error);
            })
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
        axios.put('http://localhost:9000/customers/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/customers');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3 align="center">Atualizar cliente</h3>
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
                               value="Atualizar"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}