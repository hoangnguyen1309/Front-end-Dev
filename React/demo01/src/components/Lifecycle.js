import React, { Component } from 'react';

class Lifecycle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Lifecycle'
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
    }

    handleChangeTitle() {
        this.setState({
            title: "LifecycleComponent - handleChangeTitle"
        })
    }

    render() {
        return(
            <div className='card'>
                <div className='card-header'>
                    {this.state.title}  
                </div>
                <div className='card-body'>
                    <button onClick={this.handleChangeTitle} type="button" class="btn btn-success"></button>
                </div>
            </div>
        );
    }
}

Lifecycle.propTypes = {

};

export default Lifecycle;