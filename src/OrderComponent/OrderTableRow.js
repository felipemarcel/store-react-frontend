import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TableRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.status ? 'Pago' : 'Em aberto'}
                </td>
                <td>
                    {this.props.obj.products.map((order, index) => (
                        <div layout="flex">
                            {order.product.name} | Preço Unitário: {order.product.price} |  Total: {order.product.price * order.quantity}
                        </div>
                    ))}
                </td>
                <td>
                    {this.props.obj.products.map(order => order.quantity * order.product.price)
                        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)}
                </td>
                <td>
                    <Link to={"/orders/" + this.props.obj._id.$oid} className="btn btn-primary">Alterar</Link>
                </td>
            </tr>
        );
    }
}

export default TableRow;