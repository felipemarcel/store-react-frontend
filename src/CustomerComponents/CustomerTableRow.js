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
                    {this.props.obj.firstName}
                </td>
                <td>
                    {this.props.obj.lastName}
                </td>
                <td>
                    <Link to={"/customers/" + this.props.obj._id.$oid} className="btn btn-primary">Alterar</Link>
                </td>
            </tr>
        );
    }
}

export default TableRow;