import React, {Component} from 'react';
import axios from 'axios';

export default class OrderCreateComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeProducts = this.onChangeProducts.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            _id: '',
            status: '',
            products: []
        }
    }

    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        });
    }

    onChangeProducts(e) {
        this.setState({
            products: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            status: this.state.status,
            products: this.state.products
        };
        axios.post('http://localhost:9000/orders', obj)
            .then(res => console.log(res.data));

        this.setState({
            status: '',
            products: []
        });
        this.props.history.push('/orders');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3 align="center">Adicionar nova compra</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.status}
                            onChange={this.onChangeStatus}
                        />
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