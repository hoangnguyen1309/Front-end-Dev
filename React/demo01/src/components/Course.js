import React, { Component } from 'react';
import Lesson from './Lesson';

class Course extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowContent: false,
        }

        this.handleClick3 = this.handleClick3.bind(this);
        this.regButton = this.regButton.bind(this);
        this.handleToggleContent = this.handleToggleContent.bind(this);
    }

    handleClick1() {
        alert('view 1');
    }

    handleClick2(content) {
        alert(content);
    }

    handleClick3() {
        alert(this.props.name);
    }

    regButton() {
        console.log(this.refs.username.value);
    }

    showButtonFree() {
        const isFree = this.props.free;
        if (isFree === true) {
            return (
                <div>
                    <button onClick={this.handleClick1} type="button" className="btn btn-primary">View 1</button>
                    <button onClick={this.handleClick2} type="button" className="btn btn-primary">View 2</button>
                    <button onClick={this.handleClick3} type="button" className="btn btn-primary">View 3</button>
                </div>
            )

        } else {
            return (
                <div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" className="form-control" ref='username' placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <button onClick={this.regButton} type="button" className="btn btn-primary">Register</button>
                </div>
            )
        }
    }

    handleToggleContent() {
        this.setState({
            isShowContent: !this.state.isShowContent
        });
    }

    render() {
        let elmContent = null;
        if (this.state.isShowContent === true) {
            elmContent = <ul className="list-group">
            <Lesson name='Lesson 1' />
            <Lesson name='Lesson 2' />
            <Lesson name='Lesson 3' />
        </ul>
        }
        return (
            <div className="row col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p>{this.props.time}</p>
                        <p>{this.props.desc}</p>
                        <p><button onClick={this.handleToggleContent} type="button" className="btn btn-primary">Toggle Content</button></p>
                        {elmContent}
                    </div>
                    <div className='card-footer'>
                        {this.showButtonFree()}
                    </div>

                </div>
            </div>
        );
    }
}

Course.propTypes = {

};

export default Course;