import React, { Component } from 'react';
import './App.css';

class TodoTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="App">
                <table>
                    <tbody>
                        <tr><th>Date</th><th>Description</th></tr>
                        {this.props.todos.map((item, index) =>
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.description}</td>
                                <td><button id={index} onClick={() => this.props.onDelete(index)}>Delete</button></td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

TodoTable.propTypes = {

};

export default TodoTable;