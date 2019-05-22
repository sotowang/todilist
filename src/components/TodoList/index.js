import React, {Component} from 'react';
import TodoItem from '../TodoItem';


// const data = [
//     {
//         des: '1这是一个描述',
//         status: '完成',
//     },
//     {
//         des: '2这是一个描述',
//         status: '未完成',
//     }
//
// ];


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
            status: '未完成'
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
        this.setState(
            {
                data: data
            }
        );
        console.log(index);

    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange}/>
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