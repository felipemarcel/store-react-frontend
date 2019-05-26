import React, {Component} from 'react';
import axios from 'axios';

export default class ProductEditComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangePictureUrl = this.onChangePictureUrl.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            _id: '',
            name: '',
            price: '',
            pictureUrl: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9000/products/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    name: response.data.name,
                    price: response.data.price,
                    pictureUrl: response.data.pictureUrl
                });
            })
            .catch(function (error) {
                console.log(error);
            })
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
            _id: this.state._id,
            name: this.state.name,
            price: this.state.price,
            pictureUrl: this.state.pictureUrl
        };
        axios.put('http://localhost:9000/products/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/products');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3 align="center">Atualizar Produto</h3>
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
                               step="0.05"
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
                               value="Atualizar"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}