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
                    <Link to={"/orders/" + this.props.obj._id.$oid} className="btn btn-primary">Alterar</Link>
                </td>
            </tr>
        );
    }
}

export default TableRow;