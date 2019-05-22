import React, {Component} from 'react';
import TodoList from '../TodoList';
import Header from "../Header";
class Index extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <TodoList/>
            </div>
        );
    }
}

export default Index;