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
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.price}
                </td>
                <td>
                    {this.props.obj.pictureUrl}
                </td>
                <td>
                    <Link to={"/products/" + this.props.obj._id.$oid} className="btn btn-primary">Alterar</Link>
                </td>
            </tr>
        );
    }
}

export default TableRow;