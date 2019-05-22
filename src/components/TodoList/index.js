import React, {Component} from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            inputValue: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.delete = this.delete.bind(this);
    };

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value,
        })
    }

    handleBtnClick() {
        const newTd = this.state.data;
        newTd.push({
            des: this.state.inputValue,
            status: '未完成',
            className:'todoItem__table'
        });

        this.setState({
            data: newTd,
            inputValue: '',
        });

        console.log(this.state.data);
    }

    changeStatus(index) {
        const data = [...this.state.data];
        data[index].status = '已完成';
        data[index].className = 'todoItem__delete';
        this.setState(
            {
                data
            }
        );
    }

    delete(index) {
        const data = [...this.state.data];

        data.splice(index, 1);
        this.setState(
            {
                data
            }
        )
    }

    render() {
        return (
            <div>
                <div>
                    <input className="input-class" value={this.state.inputValue} onChange={this.handleInputChange}/>
                    <button className="red-btn" onClick={this.handleBtnClick}>添加</button>
                </div>

                <table align="center">
                    <thead>
                    <tr>
                        <td className='todoItem__table'>信息</td>
                        <td className='todoItem__table'>状态</td>
                        <td className='todoItem__table'>操作</td>
                    </tr>
                    {this.state.data.map(
                        (item, index) => {
                            return (
                                <TodoItem key={index}
                                          data={item}
                                          index={index}
                                          changeStatus={this.changeStatus}
                                          delete={this.delete}
                                />
                            )
                        }
                    )}
                    </thead>
                </table>
            </div>
        );
    }
}

export default TodoList;