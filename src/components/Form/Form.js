import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class Form extends Component {
    state = {
        newCount: {
            type: '',
            startCount: ''
        }
    }

    render() {
        return (
            <div>
                <h3>This is the form</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewCount}>
                    <input type='text' value={this.state.newCount.type} onChange={this.handleChange} />
                    <input type='text' value={this.state.newCount.startCount} onChange={this.handleChange} />
                    <input type='submit' value='Add New Count' />
                </form>
            </div>
        );
    }
    
}




export default Form;