import React, {Component,Fragment} from 'react';
import './style.css';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        const {index} = this.props;
        this.props.delete(index);
    }
    render() {
        const {data} = this.props;
        return (
            <Fragment>
                <tr>
                <td className='todoItem__table'>{data.des}</td>
                <td className='todoItem__table'>{data.status}</td>
                <td className='todoItem__table'>
                    <button className='todoItem__btn--red'>完成</button>
                    <button className='todoItem__btn--red' onClick={this.handleDelete}>删除</button>
                </td>
                </tr>
            </Fragment>

        );
    }
}

export default TodoItem;