import React, {Component} from 'react';
import axios from 'axios';

export default class OrderCreateComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeProducts = this.onChangeProducts.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.addProduct = this.addProduct.bind(this);

        this.state = {
            _id: '',
            status: true,
            selectedValue: '',
            products: [{}],
            allProducts: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9000/products')
            .then(response => {
                this.setState({allProducts: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onChangeQuantity(e) {
        this.setState({
            selectedQuantity: parseFloat(e.target.value)
        });
    }

    onChangeProducts(e) {
        this.setState({
            products: e.target.value
        })
    }

    onSelectChange(e) {
        this.setState({
            selectedValue: this.state.allProducts[e.target.selectedIndex]
        });
    }

    addProduct() {
        let tempProducts = this.state.products;
        tempProducts.push({
            quantity: this.state.selectedQuantity,
            product: this.state.selectedValue
        });
        this.setState({
            products: tempProducts
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            status: this.state.status,
            products: this.state.products.filter((order) => order.product)
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
                <h3 align="center">Nova compra - Adicionar produtos</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        {this.state.products.map((product, index) => (
                            <div key={index}>
                                <label>Quantidade: </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    onChange={this.onChangeQuantity}
                                />
                                <label>Produto: </label>
                                <select className="form-control"
                                        id="selectedProduct"
                                        onChange={this.onSelectChange}
                                >
                                    {this.state.allProducts.map((product, index) => (
                                        <option key={index}>
                                            {product.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ))}
                        <div style={{marginTop: 25}}>
                            <button type="button"
                                    className="btn btn-secondary"
                                    onClick={this.addProduct}
                            >
                                Confirmar adição do produto
                            </button>
                        </div>
                    </div>
                    <div className="form-group " style={{marginTop: 10}}>
                        <input type="submit"
                               value="Finalizar compra"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}