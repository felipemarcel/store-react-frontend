import React, {Component} from 'react';
import axios from 'axios';

export default class Product2CreateComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangePictureUrl = this.onChangePictureUrl.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            price: '',
            pictureUrl: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price: parseFloat(e.target.value)
        })
    }

    onChangePictureUrl(e) {
        this.setState({
            pictureUrl: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            price: this.state.price,
            pictureUrl: this.state.pictureUrl
        };
        axios.post('http://localhost:9000/products', obj)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            price: ''
        });

        this.props.history.push('/products');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3 align="center">Adicionar novo Produto</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Preço: </label>
                        <input type="number"
                               className="form-control"
                               value={this.state.price}
                               onChange={this.onChangePrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Endereço da imagem: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.pictureUrl}
                               onChange={this.onChangePictureUrl}
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